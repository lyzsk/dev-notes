# md_to_excel.py — Markdown 转 Excel 工具, 支持两种模式
#
# 用法:
#   python md_to_excel.py [table] input.md [output.xlsx]   # 表格模式(默认, 可省略 table)
#   python md_to_excel.py functionlist input.md [output.xlsx]  # 功能清单模式
#
# 依赖:
#   pip install pandas openpyxl      # 表格模式
#   pip install openpyxl             # 功能清单模式仅需 openpyxl
#
# ============================================================
# 模式一: table — 通用 Markdown 表格转 Excel
#   1) 只有 `#` 标题(任意层级)和 `---` 分隔线才会开新 sheet
#   2) 空行隔开的连续表格属于同一个 sheet: 第一个是主表, 其后两列的表格视为
#      "列名 -> 说明" 对照表, 说明以批注形式挂到主表对应表头上
#   3) 列名 xxx(Y/N) -> 列名变为 xxx, 整列(第 2~1000 行)加 Y/N 下拉框
#   4) sheet 名取标题文本(无标题则 Table1/Table2...), 自动去非法字符/截断31字符/重名加后缀
#
# 模式二: functionlist — 功能清单范式 md 转 Excel
#   1) 每个 `## xxx Function List` 生成一个 sheet, sheet 名为 xxx
#   2) 表头: 一级功能 / 二级功能 / 功能描述
#   3) 一级功能 = `#### N.M xxxx` 中的 xxxx
#   4) 二级功能 = 条目 `- **yyyy**` 中的 yyyy, 功能描述 = `: zzzz` 中的 zzzz
#   5) 加粗条目下缩进的普通 `- ` 子项, 追加到该条目的功能描述中
#   6) 缩进的加粗子条目(如 `- **作业前**: ...`)作为独立行
#   7) 无加粗的顶层条目(如 `- Fixed Buffer`), 二级功能留空, 文本进入功能描述
#   8) 全文统一字体: 宋体, 10 号
# ============================================================
import re
import sys
import unicodedata
from pathlib import Path


def split_md_row(line):
    """按 | 切分一行，支持转义符 \\| 和行内代码 `...` 里的竖线"""
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    cells, buf, in_code, i = [], [], False, 0
    while i < len(line):
        ch = line[i]
        if ch == "\\" and i + 1 < len(line) and line[i + 1] == "|":
            buf.append("|")
            i += 2
            continue
        if ch == "`":
            in_code = not in_code
            i += 1
            continue
        if ch == "|" and not in_code:
            cells.append("".join(buf).strip())
            buf = []
        else:
            buf.append(ch)
        i += 1
    cells.append("".join(buf).strip())
    return cells


def is_separator(line):
    """| :-- | :-: | --: | 这种分隔行"""
    return bool(re.fullmatch(r"\|?[\s:\-|]+\|?", line.strip())) and "-" in line


YN_PATTERN = re.compile(r"\s*\(\s*[Yy]/[Nn]\s*\)\s*$")   # 列名结尾的 (Y/N)
HEADING_PATTERN = re.compile(r"^#{1,6}\s+(.*\S)\s*$")    # # ~ ###### 标题
HRULE_PATTERN = re.compile(r"^(-{3,}|\*{3,}|_{3,})$")    # --- / *** / ___ 分隔线


def build_table(rows):
    """把一个表格的行列表转成 (DataFrame, Y/N 列索引列表)"""
    import pandas as pd
    header, yn_cols = [], []
    for h in split_md_row(rows[0]):
        if YN_PATTERN.search(h):
            header.append(YN_PATTERN.sub("", h).strip())
            yn_cols.append(len(header) - 1)
        else:
            header.append(h)
    data = [split_md_row(r) for r in rows[1:] if not is_separator(r)]
    n = len(header)
    data = [r + [""] * (n - len(r)) if len(r) < n else r[:n] for r in data]
    return pd.DataFrame(data, columns=header), yn_cols


def parse_md_blocks(text):
    """按 # 标题 / --- 分隔线切 block。
    返回 [(heading, [(df, yn_cols), ...]), ...]
    同一 block 内空行隔开的多个表格同属一个 sheet。"""
    blocks, tables, rows, heading = [], [], [], None

    def flush_rows():
        nonlocal rows
        if len(rows) >= 2:
            tables.append(build_table(rows))
        rows = []

    def flush_block():
        nonlocal tables
        flush_rows()
        if tables:
            blocks.append((heading, tables))
        tables = []

    for line in text.splitlines():
        s = line.strip()
        m = HEADING_PATTERN.match(s)
        if m and not s.startswith("|"):
            flush_block()
            heading = m.group(1).strip()
        elif HRULE_PATTERN.match(s):
            flush_block()
            heading = None
        elif s.startswith("|") and s.endswith("|"):
            rows.append(s)
        else:
            flush_rows()          # 空行: 结束当前表格, 但不结束 block
    flush_block()
    return blocks


INVALID_SHEET_CHARS = re.compile(r'[\\/*?\[\]:]')        # Excel sheet 名非法字符


def make_sheet_name(title, used, idx):
    """sheet 名: 取标题文本, 去非法字符, 最长 31, 重名自动加 _2/_3 后缀"""
    name = INVALID_SHEET_CHARS.sub(" ", title).strip() if title else f"Table{idx}"
    name = (name or f"Table{idx}")[:31]
    base, k = name, 2
    while name in used:
        suffix = f"_{k}"
        name = base[:31 - len(suffix)] + suffix
        k += 1
    used.add(name)
    return name


def display_width(s):
    """中文按 2 个字符宽度算"""
    return sum(2 if unicodedata.east_asian_width(c) in "WF" else 1 for c in s)


def md_to_excel(md_path, xlsx_path=None, max_row=1000):
    """表格模式: 通用 Markdown 表格 -> Excel"""
    import pandas as pd
    md_path = Path(md_path)
    xlsx_path = xlsx_path or md_path.with_suffix(".xlsx")
    blocks = parse_md_blocks(md_path.read_text(encoding="utf-8"))
    if not blocks:
        print("未找到任何 Markdown 表格")
        return

    from openpyxl.comments import Comment
    from openpyxl.styles import Alignment, Font, PatternFill
    from openpyxl.utils import get_column_letter
    from openpyxl.worksheet.datavalidation import DataValidation

    used_names = set()
    with pd.ExcelWriter(xlsx_path, engine="openpyxl") as writer:
        for i, (heading, tables) in enumerate(blocks, 1):
            df, yn_cols = tables[0]                       # 第一个表 = 主表
            sheet = make_sheet_name(heading, used_names, i)
            df.to_excel(writer, sheet_name=sheet, index=False)
            ws = writer.sheets[sheet]

            for cell in ws[1]:                            # 表头加粗 + 底色 + 居中
                cell.font = Font(bold=True)
                cell.fill = PatternFill("solid", fgColor="2f5496")
                cell.alignment = Alignment(horizontal="center")
            ws.freeze_panes = "A2"                        # 冻结首行

            for col in ws.columns:                        # 列宽自适应
                w = max(display_width(str(c.value or "")) for c in col)
                ws.column_dimensions[col[0].column_letter].width = min(max(w + 2, 8), 42)

            for c in yn_cols:                             # Y/N 列加下拉框
                letter = get_column_letter(c + 1)
                dv = DataValidation(type="list", formula1='"Y,N"', allow_blank=True)
                dv.error = "只能填写 Y 或 N"
                dv.errorTitle = "输入无效"
                dv.showErrorMessage = True
                ws.add_data_validation(dv)
                dv.add(f"{letter}2:{letter}{max_row}")

            # 后续表格 = 列名说明 -> 表头批注
            comments = 0
            for extra_df, _ in tables[1:]:
                if extra_df.shape[1] != 2:
                    print(f"  [{sheet}] 警告: 说明表不是两列, 已跳过")
                    continue
                desc_map = {str(r[0]).strip(): str(r[1]).strip()
                            for r in extra_df.itertuples(index=False) if str(r[0]).strip()}
                for c, col_name in enumerate(df.columns, 1):
                    if col_name in desc_map:
                        cm = Comment(desc_map[col_name], "列名说明")
                        cm.width, cm.height = 420, 160
                        ws.cell(row=1, column=c).comment = cm
                        comments += 1
            print(f"  [{sheet}] {df.shape[1]} 列, Y/N 下拉 {len(yn_cols)} 列, 表头批注 {comments} 个")
    print(f"已生成 {xlsx_path}，共 {len(blocks)} 个 sheet")


# ============================================================
# 模式二: functionlist — 功能清单范式 md 转 Excel
# ============================================================

FL_SHEET_RE = re.compile(r"^##\s+(.+?)\s+Function List\s*$")
FL_L1_RE = re.compile(r"^####\s+[\d.]+\s*(.+?)\s*$")
FL_BOLD_ITEM_RE = re.compile(r"^\s*-\s+\*\*(.+?)\*\*\s*[:：]?\s*(.*?)\s*$")
FL_PLAIN_ITEM_RE = re.compile(r"^\s*-\s+(.+?)\s*$")


def parse_functionlist_md(text):
    """返回 {sheet名: [(一级功能, 二级功能, 功能描述), ...]}"""
    sheets = {}
    sheet_name = None
    l1 = None
    last_row = None

    for line in text.splitlines():
        m = FL_SHEET_RE.match(line)
        if m:
            sheet_name = m.group(1).strip()
            sheets.setdefault(sheet_name, [])
            l1 = None
            last_row = None
            continue

        m = FL_L1_RE.match(line)
        if m and sheet_name:
            l1 = m.group(1).strip()
            last_row = None
            continue

        if line.startswith("#"):
            continue

        if not sheet_name or not l1:
            continue

        m = FL_BOLD_ITEM_RE.match(line)
        if m:
            last_row = [l1, m.group(1).strip(), m.group(2).strip()]
            sheets[sheet_name].append(last_row)
            continue

        m = FL_PLAIN_ITEM_RE.match(line)
        if m:
            item_text = m.group(1).strip()
            indented = line[:1] in (" ", "\t")
            if indented and last_row is not None:
                # 缩进的子项内容并入上一条的功能描述
                last_row[2] = (last_row[2] + "\n" + item_text) if last_row[2] else item_text
            else:
                # 顶层无加粗条目: 二级功能留空, 文本进入功能描述
                last_row = [l1, "", item_text]
                sheets[sheet_name].append(last_row)

    return sheets


def functionlist_to_excel(md_path, xlsx_path=None):
    """功能清单模式: 功能清单范式 md -> Excel (宋体 10 号, 无其他样式)"""
    from openpyxl import Workbook
    from openpyxl.styles import Font

    md_path = Path(md_path)
    xlsx_path = xlsx_path or md_path.with_suffix(".xlsx")
    sheets = parse_functionlist_md(md_path.read_text(encoding="utf-8"))
    if not sheets:
        print("未找到任何 `## xxx Function List` 章节")
        return

    wb = Workbook()
    wb.remove(wb.active)
    font = Font(name="宋体", size=10)

    for name, rows in sheets.items():
        ws = wb.create_sheet(title=name[:31])
        ws.append(["一级功能", "二级功能", "功能描述"])
        for row in rows:
            ws.append(row)
        for r in ws.iter_rows():
            for cell in r:
                cell.font = font
        print(f"  [{name}] {len(rows)} 行")

    wb.save(xlsx_path)
    print(f"已生成 {xlsx_path}，共 {len(sheets)} 个 sheet")


MODES = {
    "table": md_to_excel,
    "functionlist": functionlist_to_excel,
}


def main(argv):
    args = list(argv)
    mode = "table"
    if args and args[0] in MODES:
        mode = args.pop(0)
    if not args:
        print(__doc__ or "")
        print("用法: python md_to_excel.py [table|functionlist] input.md [output.xlsx]")
        sys.exit(1)
    MODES[mode](args[0], args[1] if len(args) > 1 else None)


if __name__ == "__main__":
    main(sys.argv[1:])
