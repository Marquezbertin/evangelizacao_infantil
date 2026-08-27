# -*- coding: utf-8 -*-
import json

src = open('gen5.py', encoding='utf-8').read()
for i in range(1, 14):
    src += open('part%d.py' % i, encoding='utf-8').read()

ns = {}
exec(src, ns)
R = ns['R']
builder_raw = ns['builder_raw'].replace('@Q@', '"')
foreach_raw = ns['foreach_raw']
buttons_raw = ns['buttons_raw']
OUT = ns['OUT']

assert len(R) == 40, 'expected 40 themes, got %d' % len(R)
for k, s in enumerate(R):
    idx = 40 + k
    assert len(s['forca']) == 12, 'forca %d = %d' % (idx, len(s['forca']))
    assert len(s['mem']) == 12, 'mem %d = %d' % (idx, len(s['mem']))
    assert len(s['caca']) == 12, 'caca %d = %d' % (idx, len(s['caca']))
    assert len(s['qd']) == 6, 'qd %d = %d' % (idx, len(s['qd']))
    assert len(s['quiz']) == 8, 'quiz %d = %d' % (idx, len(s['quiz']))
    assert s['velha']['x'] and s['velha']['o'] and s['velha']['xt'] and s['velha']['ot'], 'velha %d' % idx
    for q in s['quiz']:
        assert q['r'] in (0,1,2,3), 'bad answer index tema %d' % idx

header = ("var temaNome=[];var temaContent={};var velhaTemas=[];var forcaTemas=[];"
          "var memoriaTemas=[];var cacaTemas=[];var lpTemas=[];var qdConteudo=[];"
          "var qdTitulos=[];var quizPerguntasTema=[];\n")

js = header + "var NOVOS=" + json.dumps(R, ensure_ascii=False) + ";\n" + builder_raw + foreach_raw + buttons_raw

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(js)

print('OK temas:', len(R))
print('bytes:', len(js.encode('utf-8')))
print('sample nome[0]:', R[0]['nome'])
