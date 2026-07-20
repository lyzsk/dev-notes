# 规则:
#   1) 只有 `#` 标题(任意层级)和 `---` 分隔线才会开新 sheet
#   2) 空行隔开的连续表格属于同一个 sheet: 第一个是主表, 其后两列的表格视为
#      "列名 -> 说明" 对照表, 说明以批注形式挂到主表对应表头上
#   3) 列名 xxx(Y/N) -> 列名变为 xxx, 整列(第 2~1000 行)加 Y/N 下拉框
#   4) sheet 名取标题文本(无标题则 Table1/Table2...), 自动去非法字符/截断31字符/重名加后缀
#
# 用法: python md_to_excel.py test.md
# 依赖: pip install pandas openpyxl
import re
import sys
import unicodedata
from pathlib import Path

import pandas as pd


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
                cell.fill = PatternFill("solid", fgColor="8DB4E2")
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


if __name__ == "__main__":
    md_to_excel(sys.argv[1] if len(sys.argv) > 1 else "input.md",
                sys.argv[2] if len(sys.argv) > 2 else None)