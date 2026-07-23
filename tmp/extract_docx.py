import sys, zipfile, re
from xml.etree import ElementTree as ET

NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

def text_of(el):
    return ''.join(t.text or '' for t in el.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'))

def style_of_p(p):
    pPr = p.find('w:pPr', NS)
    if pPr is None:
        return ''
    st = pPr.find('w:pStyle', NS)
    if st is None:
        return ''
    return st.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val') or ''

def extract(path, out):
    with zipfile.ZipFile(path) as z:
        xml = z.read('word/document.xml')
    root = ET.fromstring(xml)
    body = root.find('w:body', NS)
    lines = []
    for child in body:
        tag = child.tag.split('}')[1]
        if tag == 'p':
            txt = text_of(child).strip()
            style = style_of_p(child)
            if txt:
                prefix = f'[{style}] ' if style else ''
                lines.append(prefix + txt)
        elif tag == 'tbl':
            lines.append('<TABLE>')
            for tr in child.findall('w:tr', NS):
                cells = []
                for tc in tr.findall('w:tc', NS):
                    paras = [text_of(p).strip() for p in tc.findall('w:p', NS)]
                    cells.append(' '.join(t for t in paras if t))
                lines.append('| ' + ' | '.join(cells) + ' |')
            lines.append('</TABLE>')
    with open(out, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print(f'{out}: {len(lines)} lines')

extract(sys.argv[1], sys.argv[2])
