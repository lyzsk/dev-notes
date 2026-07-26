# add_columns.py — 向现有 Excel 的 sheet 右侧追加列, 样式继承左侧列
#
# 用法:
#   1) 命令行指定列定义:
#      python add_columns.py input.xlsx 完成日期:date 金额:currency "状态:select:通过,不通过,待确认" "标签:multiselect:A,B,C"
#      python add_columns.py input.xlsx -s Sheet1 -s Sheet2 备注        # 只处理指定 sheet
#      python add_columns.py input.xlsx -o output.xlsx 完成日期:date     # 输出到新文件(默认原地修改)
#
#   2) 修改下方 CONFIG 后直接运行(命令行列定义优先于 CONFIG):
#      python add_columns.py input.xlsx
#
# 列定义格式: 名称[:类型[:选项1,选项2,...]]   (冒号中英文均可)
#   类型:
#     text        文本(默认), 只继承样式, 无附加格式
#     date        日期, 数字格式 yyyy-mm-dd
#     currency    货币(人民币), 数字格式 "¥"#,##0.00
#     select      单选, 第 2~1000 行加下拉框, 必须提供选项; 选项外用逗号输入会报错
#     multiselect 多选, 同样加下拉框, 但允许用英文逗号输入多个选项(提示但不拦截)
#   类型也接受中文: 文本 / 日期 / 货币 / 单选 / 多选
#   选项用英文逗号分隔, 注意下拉公式总长不能超过 255 字符
#
# 样式继承规则:
#   - 新列的每个单元格(表头 + 已有数据行)复制其左侧相邻列同行单元格的全部样式
#     (字体/底色/边框/对齐/数字格式), date/currency 类型再覆盖数字格式
#   - 连续添加多列时, 后一列继承前一新列的样式(即始终继承相邻左列)
#   - 列宽继承左侧列宽
#
# 依赖: pip install openpyxl
import argparse
import re
import sys
from copy import copy
from pathlib import Path

# ============================================================
# CONFIG: 命令行未给列定义时使用; 命令行给了列定义则忽略此项
# ============================================================
CONFIG = {
    # 要追加的列, 格式同命令行列定义, 例如:
    # "columns": ["完成日期:date", "金额:currency", "状态:select:通过,不通过,待确认"],
    "columns": [],
    # 只处理这些 sheet; None 或空列表 = 全部 sheet
    "sheets": None,
}

TYPE_ALIASES = {
    "text": "text", "文本": "text",
    "date": "date", "日期": "date",
    "currency": "currency", "货币": "currency", "人民币": "currency",
    "select": "select", "单选": "select",
    "multiselect": "multiselect", "多选": "multiselect",
}
NUMBER_FORMATS = {
    "date": "yyyy-mm-dd",
    "currency": '"¥"#,##0.00',
}
DV_MAX_ROW = 1000          # 下拉框生效的行范围: 第 2 ~ 1000 行


def parse_column_spec(spec):
    """'名称:类型:选项1,选项2' -> (名称, 类型, [选项...])"""
    parts = re.split(r"[:：]", spec)
    name = parts[0].strip()
    if not name:
        raise ValueError(f"列定义缺少名称: {spec!r}")
    raw_type = parts[1].strip() if len(parts) > 1 else "text"
    ctype = TYPE_ALIASES.get(raw_type.lower(), TYPE_ALIASES.get(raw_type))
    if ctype is None:
        raise ValueError(f"未知类型 {raw_type!r} (列 {name!r}), 支持: text/date/currency/select/multiselect")
    options = []
    if len(parts) > 2:
        options = [o.strip() for o in re.split(r"[,，]", parts[2]) if o.strip()]
    if ctype in ("select", "multiselect") and not options:
        raise ValueError(f"{ctype} 类型必须提供选项, 如 '状态:{raw_type}:通过,不通过' (列 {name!r})")
    if options and ",".join(options) and ctype in ("select", "multiselect"):
        formula = ",".join(options)
        if len(formula) > 255:
            raise ValueError(f"列 {name!r} 的选项总长 {len(formula)} 超过 255 字符, 下拉框放不下")
    return name, ctype, options


def add_columns(xlsx_path, columns, sheets=None, output=None):
    """向 xlsx 各目标 sheet 右侧追加列, 样式继承相邻左列"""
    from openpyxl import load_workbook
    from openpyxl.utils import get_column_letter
    from openpyxl.worksheet.datavalidation import DataValidation

    xlsx_path = Path(xlsx_path)
    wb = load_workbook(xlsx_path)
    targets = sheets or wb.sheetnames
    for sname in targets:
        if sname not in wb.sheetnames:
            print(f"错误: 找不到 sheet {sname!r}, 现有 sheet: {wb.sheetnames}")
            sys.exit(1)

    specs = [parse_column_spec(c) for c in columns]

    for sname in targets:
        ws = wb[sname]
        added = []
        for name, ctype, options in specs:
            src_col = ws.max_column          # 相邻左列
            new_col = src_col + 1
            max_row = max(ws.max_row, 1)

            # 逐行复制左列样式(表头 + 数据行)
            for r in range(1, max_row + 1):
                src = ws.cell(row=r, column=src_col)
                if src.has_style:
                    ws.cell(row=r, column=new_col)._style = copy(src._style)

            # 表头文字
            ws.cell(row=1, column=new_col).value = name

            # date/currency: 覆盖数据区数字格式
            if ctype in NUMBER_FORMATS:
                for r in range(2, max_row + 1):
                    ws.cell(row=r, column=new_col).number_format = NUMBER_FORMATS[ctype]

            # 列宽继承
            src_letter = get_column_letter(src_col)
            dst_letter = get_column_letter(new_col)
            src_dim = ws.column_dimensions.get(src_letter)
            if src_dim is not None and src_dim.width:
                ws.column_dimensions[dst_letter].width = src_dim.width

            # 单选/多选: 加下拉框
            if ctype in ("select", "multiselect"):
                dv = DataValidation(type="list", formula1='"' + ",".join(options) + '"',
                                    allow_blank=True, showDropDown=False)
                # 注意: openpyxl 的 showDropDown=False 才是"显示下拉箭头"(Excel 里该属性含义相反)
                if ctype == "multiselect":
                    dv.errorStyle = "information"      # 逗号输入多个时仅提示, 不拦截
                    dv.errorTitle = "多选提示"
                    dv.error = "多选列: 请从下拉框选择, 或用英文逗号分隔输入多个选项"
                else:
                    dv.errorTitle = "输入无效"
                    dv.error = "只能从下拉选项中选择一项"
                dv.showErrorMessage = True
                ws.add_data_validation(dv)
                dv.add(f"{dst_letter}2:{dst_letter}{DV_MAX_ROW}")

            added.append(f"{name}({ctype})")
        print(f"  [{sname}] 追加 {len(added)} 列: {', '.join(added)}")

    out = Path(output) if output else xlsx_path
    wb.save(out)
    print(f"已保存 {out}" + ("" if out == xlsx_path else f" (源文件 {xlsx_path} 未改动)"))


def main(argv):
    p = argparse.ArgumentParser(
        description="向现有 Excel 右侧追加列, 样式继承左侧列",
        epilog="列定义: 名称[:类型[:选项1,选项2]], 类型: text/date/currency/select/multiselect (或中文: 文本/日期/货币/单选/多选)",
    )
    p.add_argument("xlsx", help="要修改的 xlsx 文件")
    p.add_argument("columns", nargs="*", help="列定义, 如 完成日期:date '状态:select:通过,不通过'")
    p.add_argument("-s", "--sheet", action="append", dest="sheets",
                   help="只处理指定 sheet, 可多次使用; 默认全部 sheet")
    p.add_argument("-o", "--output", help="输出到新文件; 默认原地修改输入文件")
    args = p.parse_args(argv)

    columns = args.columns or CONFIG.get("columns") or []
    if not columns:
        p.print_help()
        print("\n错误: 没有给出任何列定义, 请在命令行提供或填写脚本内的 CONFIG['columns']")
        sys.exit(1)
    sheets = args.sheets or CONFIG.get("sheets") or None

    add_columns(args.xlsx, columns, sheets=sheets, output=args.output)


if __name__ == "__main__":
    main(sys.argv[1:])
