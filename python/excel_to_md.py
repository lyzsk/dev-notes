import pandas as pd
from tabulate import tabulate

file_path = "【CIM】EAP&FDC_Demo需求.xlsx"
output_path = "output.md"

# 获取所有Sheet名称
xls = pd.ExcelFile(file_path)
sheet_names = xls.sheet_names

with open(output_path, "w", encoding="utf-8") as f:
    for sheet in sheet_names:
        df = pd.read_excel(xls, sheet_name=sheet)
        
        # 添加二级标题作为Sheet标识
        f.write(f"## {sheet}\n\n")
        
        md_table = tabulate(df, headers="keys", tablefmt="pipe", showindex=False)
        f.write(md_table)
        f.write("\n\n")  # 表格之间空两行，避免渲染粘连