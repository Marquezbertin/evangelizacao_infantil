import re, json

for fn in ['data1.json','data2.json','data3.json','data4.json']:
    s = open(fn, encoding='utf-8').read()
    fixed = re.sub(r'([^\x00-\x7f])\]', r'\1"]', s)
    open(fn, 'w', encoding='utf-8').write(fixed)
    try:
        d = json.loads(fixed)
        print(fn, 'OK', len(d), 'temas')
    except json.JSONDecodeError as e:
        print(fn, 'STILL FAILS', e)
