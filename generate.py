import json, io

base = 'C:/Users/Usuário/AppData/Local/Temp/opencode/evangelizacao_infantil/'
specs = []
for fn in ['data1.json','data2.json','data3.json','data4.json']:
    specs += json.loads(open(base+fn, encoding='utf-8').read())
assert len(specs) == 40, len(specs)

HEADER = (
"// ===== LIÇÕES BÍBLICAS — QUINTA LEVA (temas 40-79) =====\n"
"// Fonte de textos/passagens: https://www.bibliadocaminho.com/\n"
"// Padrão de new-themes.js / licoes-biblicas-extra*.js: empurra para temaNome,\n"
"// temaContent, velhaTemas, forcaTemas, memoriaTemas, cacaTemas, lpTemas,\n"
"// qdConteudo, qdTitulos e quizPerguntasTema NA MESMA ORDEM (índices alinhados).\n"
"// Os temas são gerados a partir de specs via funções BUILDER e loop NOVOS.forEach.\n\n"
)

BUILDERS = r'''// ---------- FUNÇÕES BUILDER (montam o HTML de cada seção) ----------
function __histHTML(s){
  return `<h2>${s.nome} <button class="tts-btn-ouvir" onclick="ttsLer('historia',this)">🔊 Ouvir</button></h2>`
   +`<p class="ref">${s.ref}</p>`
   +`<div class="eb">${s.eb}</div>`
   +`<p>${s.hist[0]}</p>`
   +`<p>${s.hist[1]}</p>`
   +`<div class="vers">${s.vers}</div>`
   +`<div class="reflexao">💭 <strong>Reflexão Espírita:</strong> ${s.refl}</div>`;
}

function __aulaHTML(s){
  var a=s.aula;
  return `<h2>👩‍🏫 Plano de Aula: ${s.titulo} <button class="tts-btn-ouvir" onclick="ttsLer('aula',this)">🔊 Ouvir</button></h2>`
   +`<p style="color:#b8a8d8;font-size:.75rem;margin-bottom:6px"><strong>Faixa etária:</strong> ${a.faixa} | <strong>Duração:</strong> ${a.duracao} | <strong>Tema:</strong> ${a.tema}</p>`
   +`<h3>🎯 Objetivos</h3><p>${a.obj}</p>`
   +`<h3>📖 1. Acolhida (${a.t1} min)</h3><p>${a.s1}</p>`
   +`<h3>🌟 2. Introdução (${a.t2} min)</h3><p>${a.s2}</p>`
   +`<h3>📜 3. História Interativa (${a.t3} min)</h3><p>${a.s3}</p>`
   +`<h3>💬 4. Diálogo (${a.t4} min)</h3><p>${a.s4}</p>`
   +`<h3>🎲 5. Atividade Lúdica (${a.t5} min)</h3><p>${a.s5}</p>`
   +`<h3>✏️ 6. Fixação (${a.t6} min)</h3><p>${a.s6}</p>`
   +`<h3>🙏 7. Encerramento (${a.t7} min)</h3><p>${a.s7}</p>`
   +`<div class="dica">💡 Dica: ${a.dica}</div>`;
}

function __brincHTML(s){
  var h=`<h2>🎪 Brincadeiras: ${s.titulo} <button class="tts-btn-ouvir" onclick="ttsLer('brincadeiras',this)">🔊 Ouvir</button></h2>`;
  for(var i=0;i<s.brinc.length;i++){
    var b=s.brinc[i], n=i+1;
    h+=`<h3>${n}️⃣ ${b.nome} (💡 ${b.idade}, ${b.tempo})</h3>`
      +`<p><strong>🎯 Aprende:</strong> ${b.aprende}</p>`
      +`<p><strong>📦 Material:</strong> ${b.material}</p>`
      +`<p><strong>🎮 Como brincar:</strong> ${b.como}</p>`;
  }
  return h;
}

function __revHTML(s){
  var h=`<h2>📚 Revisão — ${s.titulo} <button class="tts-btn-ouvir" onclick="ttsLer('revisao',this)">🔊 Ouvir</button></h2>`;
  h+=`<p style="color:#b8a8d8;font-size:.8rem">Fontes: ${s.ref}</p>`;
  for(var i=0;i<s.rev.length;i++){
    h+=`<h3>${s.rev[i].h}</h3><p>${s.rev[i].t}</p>`;
  }
  return h;
}

'''

LOOP = r'''// ---------- ARRAY DE SPECS (temas 40 a 79) ----------
var NOVOS = __SPEC__;

// ---------- MONTAGEM E INJEÇÃO NAS ARRAYS GLOBAIS ----------
var __start = temaNome.length;
NOVOS.forEach(function(s){
  if(s.hist.length!==2) console.error('HIST',s.nome);
  if(s.brinc.length!==3) console.error('BRINC',s.nome);
  if(s.rev.length!==4) console.error('REV',s.nome);
  if(s.rec.length!==3) console.error('REC',s.nome);
  if(s.forca.length!==12) console.error('FORCA',s.nome);
  if(s.mem.length!==12) console.error('MEM',s.nome);
  if(s.caca.length!==12) console.error('CACA',s.nome);
  if(s.qd.length!==6) console.error('QD',s.nome);
  s.qd.forEach(function(q){ if(q.e.length!==3) console.error('QD-E',s.nome); });
  if(s.quiz.length!==8) console.error('QUIZ',s.nome);
  temaNome.push(s.nome);
  var idx = temaNome.length-1;
  temaContent[idx] = {
    hist: __histHTML(s),
    aula: __aulaHTML(s),
    brinc: __brincHTML(s),
    rev: __revHTML(s)
  };
  temaContent[idx].rec = s.rec;
  velhaTemas.push(s.velha);
  forcaTemas.push(s.forca);
  memoriaTemas.push(s.mem);
  cacaTemas.push(s.caca);
  lpTemas.push([]);
  qdConteudo.push(s.qd);
  qdTitulos.push(s.nome);
  quizPerguntasTema.push(s.quiz);
});

// ===== INJETAR BOTÕES DOS NOVOS TEMAS NA INTERFACE =====
(function(){
  for(var i=__start; i<temaNome.length; i++){
    var nome=temaNome[i]||('Tema '+i);
    var tb=document.createElement('button');
    tb.className='tema-btn';
    tb.setAttribute('data-tema',i);
    tb.textContent=nome;
    tb.setAttribute('onclick','setTema('+i+')');
    var tbC=document.getElementById('tema-botoes');
    if(tbC) tbC.appendChild(tb);
    var qb=document.createElement('button');
    qb.className='dif-btn';
    qb.setAttribute('data-t',i);
    qb.textContent=nome;
    qb.setAttribute('onclick','setQuizTema('+i+')');
    var qbC=document.getElementById('quiz-tema');
    if(qbC) qbC.appendChild(qb);
  }
})();
'''

novos_json = json.dumps(specs, ensure_ascii=False, separators=(',',':'))
out = HEADER + BUILDERS + LOOP.replace('__SPEC__', novos_json)

with io.open(base+'licoes-biblicas-extra5.js','w',encoding='utf-8') as f:
    f.write(out)
print('escrito', len(out), 'bytes;', len(specs), 'temas')
