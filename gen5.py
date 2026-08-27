# -*- coding: utf-8 -*-
import json, os

OUT = r'C:/Users/Usuário/AppData/Local/Temp/opencode/evangelizacao_infantil/licoes-biblicas-extra5.js'

builder_raw = r'''// ===== 40 NOVOS TEMAS (índices 40 a 79) =====
function __histHTML(s){return '<h2>'+s.nome+' <button class=@Q@tts-btn-ouvir@Q@ onclick=@Q@ttsLer(\'historia\',this)@Q@>🔊 Ouvir</button></h2>'+
  '<p class=@Q@ref@Q@>'+s.ref+'</p><div class=@Q@eb@Q@>'+s.eb+'</div>'+
  s.hist.map(function(p){return '<p>'+p+'</p>';}).join('')+
  '<div class=@Q@vers@Q@>'+s.vers+'</div>'+
  '<div class=@Q@reflexao@Q@>💭 <strong>Reflexão Espírita:</strong> '+s.refl+'</div>';}
function __aulaHTML(s){var a=s.aula;return '<h2>👩‍🏫 Plano de Aula: '+s.titulo+' <button class=@Q@tts-btn-ouvir@Q@ onclick=@Q@ttsLer(\'aula\',this)@Q@>🔊 Ouvir</button></h2>'+
  '<p style=@Q@color:#6b5b8c;font-size:.75rem;margin-bottom:6px@Q@><strong>Faixa etária:</strong> '+a.faixa+' | <strong>Duração:</strong> '+a.duracao+' | <strong>Tema:</strong> '+a.tema+'</p>'+
  '<h3>🎯 Objetivos</h3><p>'+a.obj+'</p>'+
  '<h3>📖 1. Acolhida ('+a.t1+' min)</h3><p>'+a.s1+'</p>'+
  '<h3>🌟 2. Introdução ('+a.t2+' min)</h3><p>'+a.s2+'</p>'+
  '<h3>📜 3. História Interativa ('+a.t3+' min)</h3><p>'+a.s3+'</p>'+
  '<h3>💬 4. Diálogo ('+a.t4+' min)</h3><p>'+a.s4+'</p>'+
  '<h3>🎲 5. Atividade Lúdica ('+a.t5+' min)</h3><p>'+a.s5+'</p>'+
  '<h3>✏️ 6. Fixação ('+a.t6+' min)</h3><p>'+a.s6+'</p>'+
  '<h3>🙏 7. Encerramento ('+a.t7+' min)</h3><p>'+a.s7+'</p>'+
  '<div class=@Q@dica@Q@>💡 Dica: '+a.dica+'</div>';}
function __brincHTML(s){var h='<h2>🎪 Brincadeiras: '+s.titulo+' <button class=@Q@tts-btn-ouvir@Q@ onclick=@Q@ttsLer(\'brincadeiras\',this)@Q@>🔊 Ouvir</button></h2>';
  s.brinc.forEach(function(b,idx){h+='<h3>'+(idx+1)+'️⃣ '+b.nome+' (💡 '+b.idade+', '+b.tempo+')</h3>'+
   '<p><strong>🎯 Aprende:</strong> '+b.aprende+'</p><p><strong>📦 Material:</strong> '+b.material+'</p>'+
   '<p><strong>🎮 Como brincar:</strong> '+b.como+'</p>';});return h;}
function __revHTML(s){var h='<h2>📚 Revisão — '+s.titulo+' <button class=@Q@tts-btn-ouvir@Q@ onclick=@Q@ttsLer(\'revisao\',this)@Q@>🔊 Ouvir</button></h2>'+
  '<p style=@Q@color:#6b5b8c;font-size:.8rem@Q@>Fontes: '+s.ref+'</p>';
  s.rev.forEach(function(r){h+='<h3>'+r.h+'</h3><p>'+r.t+'</p>';});return h;}
'''

foreach_raw = r'''NOVOS.forEach(function(s,k){
  var i=40+k;
  if(s.forca.length!==12)console.error('forca '+i+'='+s.forca.length);
  if(s.mem.length!==12)console.error('mem '+i+'='+s.mem.length);
  if(s.caca.length!==12)console.error('caca '+i+'='+s.caca.length);
  if(s.qd.length!==6)console.error('qd '+i+'='+s.qd.length);
  if(s.quiz.length!==8)console.error('quiz '+i+'='+s.quiz.length);
  temaNome.push(s.nome);
  temaContent[i]={hist:__histHTML(s),aula:__aulaHTML(s),brinc:__brincHTML(s),rev:__revHTML(s)};
  temaContent[i].rec=s.rec;
  velhaTemas.push(s.velha);
  forcaTemas.push(s.forca);
  memoriaTemas.push(s.mem);
  cacaTemas.push(s.caca);
  lpTemas.push([]);
  qdConteudo.push(s.qd);
  qdTitulos.push(s.nome);
  quizPerguntasTema.push(s.quiz);
});
'''

buttons_raw = r'''(function(){
  for(var i=40;i<=79;i++){
    var nome=temaNome[i]||('Tema '+i);
    var tb=document.createElement('button');tb.className='tema-btn';tb.setAttribute('data-tema',i);tb.textContent=nome;tb.setAttribute('onclick','setTema('+i+')');
    var tbC=document.getElementById('tema-botoes');if(tbC)tbC.appendChild(tb);
    var qb=document.createElement('button');qb.className='dif-btn';qb.setAttribute('data-t',i);qb.textContent=nome;qb.setAttribute('onclick','setQuizTema('+i+')');
    var qbC=document.getElementById('quiz-tema');if(qbC)qbC.appendChild(qb);
  }
})();
'''

def aula(titulo,eb,tema,obj,dica):
    e0=eb[0] if eb else '🌟'
    return {
      'faixa':'5 a 12 anos','duracao':'50 min','tema':tema,'obj':obj,'dica':dica,
      't1':'5','s1':'Oração. Perguntar: O que você já ouviu falar sobre '+titulo+'?',
      't2':'5','s2':'Mostrar o emoji '+e0+'. Perguntar: O que esse sinal nos ensina?',
      't3':'15','s3':'Contar a história com os emojis do quadro e gestos simples.',
      't4':'8','s4':'Diálogo: O que aconteceu? Qual a lição? Como aplicar no dia a dia?',
      't5':'10','s5':'Quiz do tema | Jogo da Memória | Teatro ou desenho da história.',
      't6':'5','s6':'Frase para decorar: Deus me ensina com '+titulo+'.',
      't7':'2','s7':'Prece agradecendo a luz e o amor de Deus.'
    }

def brinc(titulo,foco):
    return [
      {'nome':'Abraço de '+foco,'idade':'5-10 anos','tempo':'15 min',
       'aprende':'Deus nos ensina com '+titulo,
       'material':'Nenhum.',
       'como':'As crianças formam duplas e, ao ouvirem '+titulo+', dão as mãos e giram suavemente repetindo a lição.'},
      {'nome':'Caça às Palavras','idade':'6-12 anos','tempo':'15 min',
       'aprende':'Lembrar as palavras da história',
       'material':'Cartões com palavras-chave.',
       'como':'Esconder cartões com palavras-chave; ao achá-los, a criança diz como cada um aparece em '+titulo+'.'},
      {'nome':'Roda da Luz','idade':'5-12 anos','tempo':'15 min',
       'aprende':'Compartilhar a mensagem',
       'material':'Nenhum.',
       'como':'Em roda, cada um diz uma atitude boa ligada a '+titulo+' e recebe a bênção dos colegas.'}
    ]

def rev(titulo,hist,refl,vers):
    return [
      {'h':'📜 O acontecimento','t':hist[0]},
      {'h':'💡 O que aprendemos','t':hist[1]},
      {'h':'📖 O versículo','t':vers},
      {'h':'💭 Reflexão Espírita','t':refl}
    ]

def rec(terms):
    return [{'n':t.capitalize()+' (vídeo)','u':'https://www.youtube.com/results?search_query+'+t.replace(' ','+')} for t in terms]

def T(nome,titulo,ref,eb,hist,vers,refl,tema,obj,dica,foco,forca_t,mem_t,qd_t,quiz_t,velha,search):
    return dict(
      nome=nome,titulo=titulo,ref=ref,eb=eb,hist=hist,vers=vers,refl=refl,
      aula=aula(titulo,eb,tema,obj,dica),
      brinc=brinc(titulo,foco),
      rev=rev(titulo,hist,refl,vers),
      rec=rec(search),
      velha=velha,
      forca=[{'p':p,'d':d} for p,d in forca_t],
      mem=[{'e':e,'t':t} for e,t in mem_t],
      caca=[p for p,d in forca_t],
      qd=[{'e':[a,b,c],'f':f,'l':l} for a,b,c,f,l in qd_t],
      quiz=[{'q':q,'o':o,'r':r,'e':e} for q,o,r,e in quiz_t],
    )

R=[]
