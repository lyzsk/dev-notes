from PyPDF2 import PdfMerger
import os

"""pip install PyPDF2"""

#  必须加 r 前缀，防止 \U 和 \D 被当作转义字符
base_dir = r"C:\Users\Sichu Huang\Downloads" 

merger = PdfMerger()
files = ["01.pdf", "02.pdf", "03.pdf", "04.pdf", "05.pdf"]

for pdf in files:
    full_path = os.path.join(base_dir, pdf)
    merger.append(full_path)

output_path = os.path.join(base_dir, "merged_output.pdf")
merger.write(output_path)
merger.close()

print(f"✅ 合并完成: {output_path}")