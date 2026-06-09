// ===== NEW GAMES - Extends the existing site with 5 more games =====
// Override irP to add new game routes
var ngIrPOrig=irP;
irP=function(t){
  ngIrPOrig(t);
  if(t==='colorir')startColorir();
  if(t==='quebra')initQuebra();
  if(t==='memimg')initMemImg();
  if(t==='labirinto')initLabirinto();
  if(t==='palavras')initPalavras();
};

// ================================================================
// GAME 1: COLORIR (Canvas Coloring)
// ================================================================
var colorirOutlines=[];

colorirOutlines[0]=[
  {x:100,y:10},{x:127,y:75},{x:195,y:75},{x:142,y:115},{x:162,y:185},
  {x:100,y:148},{x:38,y:185},{x:58,y:115},{x:5,y:75},{x:73,y:75},{x:100,y:10}
];
colorirOutlines[1]=[
  {x:50,y:20},{x:150,y:20},{x:150,y:180},{x:50,y:180},{x:50,y:20}
];
colorirOutlines[2]=[
  {x:85,y:10},{x:115,y:10},{x:115,y:80},{x:190,y:80},{x:190,y:115},
  {x:115,y:115},{x:115,y:190},{x:85,y:190},{x:85,y:115},{x:10,y:115},
  {x:10,y:80},{x:85,y:80},{x:85,y:10}
];
colorirOutlines[3]=[
  {x:30,y:20},{x:95,y:20},{x:95,y:180},{x:30,y:180},{x:30,y:20},
  {x:105,y:20},{x:170,y:20},{x:170,y:180},{x:105,y:180},{x:105,y:20}
];
colorirOutlines[4]=[
  {x:100,y:15},{x:175,y:60},{x:175,y:140},{x:100,y:185},{x:25,y:140},{x:25,y:60},{x:100,y:15}
];
colorirOutlines[5]=[
  {x:100,y:170},{x:170,y:100},{x:170,y:55},{x:135,y:20},{x:100,y:40},
  {x:65,y:20},{x:30,y:55},{x:30,y:100},{x:100,y:170}
];
colorirOutlines[6]=[
  {x:40,y:30},{x:75,y:30},{x:75,y:100},{x:40,y:100},{x:40,y:30},
  {x:125,y:30},{x:160,y:30},{x:160,y:100},{x:125,y:100},{x:125,y:30},
  {x:100,y:100},{x:100,y:170},{x:40,y:170},{x:40,y:100},{x:125,y:100},
  {x:160,y:100},{x:160,y:170},{x:100,y:170}
];
colorirOutlines[7]=[
  {x:100,y:15},{x:40,y:95},{x:60,y:95},{x:60,y:170},{x:140,y:170},{x:140,y:95},{x:160,y:95},{x:100,y:15}
];
colorirOutlines[8]=[
  {x:100,y:25},{x:70,y:50},{x:70,y:85},{x:40,y:85},{x:40,y:120},{x:70,y:120},
  {x:70,y:155},{x:45,y:180},{x:155,y:180},{x:130,y:155},{x:130,y:120},{x:160,y:120},
  {x:160,y:85},{x:130,y:85},{x:130,y:50},{x:100,y:25}
];
colorirOutlines[9]=[
  {x:100,y:10},{x:60,y:80},{x:60,y:120},{x:80,y:150},{x:80,y:180},{x:120,y:180},
  {x:120,y:150},{x:140,y:120},{x:140,y:80},{x:100,y:10}
];
colorirOutlines[10]=[
  {x:50,y:20},{x:150,y:20},{x:150,y:180},{x:50,y:180},{x:50,y:20},
  {x:100,y:20},{x:100,y:180}
];
colorirOutlines[11]=[
  {x:40,y:20},{x:160,y:20},{x:160,y:160},{x:40,y:160},{x:40,y:20},
  {x:120,y:20},{x:120,y:160},{x:130,y:80},{x:170,y:50},{x:170,y:180},{x:80,y:180}
];
colorirOutlines[12]=[
  {x:100,y:10},{x:50,y:100},{x:150,y:100},{x:100,y:10},
  {x:100,y:100},{x:100,y:185},{x:95,y:185},{x:95,y:100}
];
colorirOutlines[13]=[
  {x:100,y:170},{x:170,y:100},{x:170,y:55},{x:135,y:20},{x:100,y:40},
  {x:65,y:20},{x:30,y:55},{x:30,y:100},{x:100,y:170},
  {x:40,y:170},{x:40,y:130},{x:160,y:130},{x:160,y:170}
];
colorirOutlines[14]=[
  {x:100,y:10},{x:10,y:80},{x:190,y:80},{x:100,y:10},
  {x:30,y:80},{x:30,y:190},{x:170,y:190},{x:170,y:80},{x:30,y:80},
  {x:80,y:190},{x:80,y:120},{x:120,y:120},{x:120,y:190}
];

var colorirCores=[
  '#FF0000','#FF6B00','#FFD700','#00CC00','#0099FF','#0033CC',
  '#9933FF','#FF3399','#CC6633','#FFFFFF','#999999','#000000'
];
var colorirPincel=['Pequeno','Médio','Grande'];
var colorirTamanhos=[3,6,12];
var colorirAtivo=false,colorirCanvas=null,colorirCtx=null;
var colorirCorAtual='#FF0000',colorirPincelIdx=1,colorirEraser=false;
var colorirDesenhando=false,colorirUltimoX=0,colorirUltimoY=0;

function startColorir(){
  var el=document.getElementById('tela-colorir');
  if(!el)return;
  colorirAtivo=true;
  el.innerHTML=
    '<div style="text-align:center;margin:4px 0">'+
    '<button class="btn btn-p btn-sm" onclick="colorirLimpar()">🗑️ Limpar</button> '+
    '<button class="btn btn-s btn-sm" onclick="colorirSalvar()">💾 Salvar PNG</button>'+
    '</div>'+
    '<div id="colorir-canvas" style="position:relative;width:100%;max-width:380px;margin:4px auto;background:rgba(255,255,255,.03);border-radius:14px;border:2px solid rgba(255,255,255,.05);overflow:hidden">'+
    '<canvas id="colorir-area" style="display:block;width:100%;height:auto;touch-action:none;cursor:crosshair"></canvas>'+
    '</div>'+
    '<div id="colorir-palette" style="display:flex;gap:3px;flex-wrap:wrap;justify-content:center;margin:4px 0;padding:4px;background:rgba(255,255,255,.02);border-radius:10px"></div>'+
    '<div id="colorir-brush" style="display:flex;gap:4px;justify-content:center;margin:4px 0"></div>'+
    '<div id="colorir-tools" style="display:flex;gap:6px;justify-content:center;margin:4px 0"></div>';
  renderColorirPalette();
  renderColorirBrush();
  renderColorirFerramentas();
  initColorir();
}

function initColorir(){
  var c=document.getElementById('colorir-area');
  if(!c)return;
  colorirCanvas=c;
  colorirCtx=c.getContext('2d');
  c.width=300;c.height=240;
  colorirDesenharOutlined();
  c.onmousedown=function(e){colorirIniciarDesenho(e);};
  c.onmousemove=function(e){colorirDesenhar(e);};
  c.onmouseup=function(){colorirPararDesenho();};
  c.onmouseleave=function(){colorirPararDesenho();};
  c.ontouchstart=function(e){e.preventDefault();var t=e.touches[0];var r=c.getBoundingClientRect();colorirIniciarDesenho({clientX:t.clientX,clientY:t.clientY});};
  c.ontouchmove=function(e){e.preventDefault();var t=e.touches[0];var r=c.getBoundingClientRect();colorirDesenhar({clientX:t.clientX,clientY:t.clientY});};
  c.ontouchend=function(e){e.preventDefault();colorirPararDesenho();};
}

function colorirDesenharOutlined(){
  var ctx=colorirCtx;
  ctx.fillStyle='#ffffff';
  ctx.fillRect(0,0,300,240);
  var pts=colorirOutlines[temaAtual]||colorirOutlines[0];
  ctx.beginPath();
  ctx.moveTo(pts[0].x/200*300,pts[0].y/200*240);
  for(var i=1;i<pts.length;i++){
    ctx.lineTo(pts[i].x/200*300,pts[i].y/200*240);
  }
  ctx.closePath();
  ctx.strokeStyle='#333333';
  ctx.lineWidth=3;
  ctx.stroke();
}

function renderColorirPalette(){
  var p=document.getElementById('colorir-palette');
  p.innerHTML='';
  for(var i=0;i<colorirCores.length;i++){
    (function(idx){
      var d=document.createElement('div');
      d.style.cssText='width:28px;height:28px;border-radius:50%;background:'+colorirCores[idx]+';cursor:pointer;border:3px solid '+(idx===0?'#ffd700':'transparent')+';transition:all .15s';
      d.onclick=function(){colorirCorAtual=colorirCores[idx];colorirEraser=false;document.querySelectorAll('#colorir-palette > div').forEach(function(x){x.style.borderColor='transparent';});d.style.borderColor='#ffd700';};
      d.onmouseover=function(){d.style.transform='scale(1.15)';};
      d.onmouseout=function(){d.style.transform='scale(1)';};
      p.appendChild(d);
    })(i);
  }
}

function renderColorirBrush(){
  var b=document.getElementById('colorir-brush');
  b.innerHTML='';
  for(var i=0;i<colorirPincel.length;i++){
    (function(idx){
      var btn=document.createElement('button');
      btn.className='dif-btn'+(idx===colorirPincelIdx?' ativo':'');
      btn.textContent='✏️ '+colorirPincel[idx];
      btn.onclick=function(){colorirPincelIdx=idx;colorirEraser=false;document.querySelectorAll('#colorir-brush .dif-btn').forEach(function(x){x.classList.remove('ativo');});btn.classList.add('ativo');};
      b.appendChild(btn);
    })(i);
  }
}

function renderColorirFerramentas(){
  var t=document.getElementById('colorir-tools');
  t.innerHTML=
    '<button class="btn btn-sm '+(!colorirEraser?'btn-p':'btn-o')+'" id="colorir-btn-pincel" onclick="colorirEraser=false;document.getElementById(\'colorir-btn-pincel\').className=\'btn btn-sm btn-p\';document.getElementById(\'colorir-btn-eraser\').className=\'btn btn-sm btn-o\'">✏️ Pincel</button>'+
    '<button class="btn btn-sm '+(colorirEraser?'btn-p':'btn-o')+'" id="colorir-btn-eraser" onclick="colorirEraser=true;document.getElementById(\'colorir-btn-pincel\').className=\'btn btn-sm btn-o\';document.getElementById(\'colorir-btn-eraser\').className=\'btn btn-sm btn-p\'">🧹 Borracha</button>';
}

function colorirIniciarDesenho(e){
  var r=colorirCanvas.getBoundingClientRect();
  colorirDesenhando=true;
  colorirUltimoX=(e.clientX-r.left)*(colorirCanvas.width/r.width);
  colorirUltimoY=(e.clientY-r.top)*(colorirCanvas.height/r.height);
}

function colorirDesenhar(e){
  if(!colorirDesenhando)return;
  var r=colorirCanvas.getBoundingClientRect();
  var x=(e.clientX-r.left)*(colorirCanvas.width/r.width);
  var y=(e.clientY-r.top)*(colorirCanvas.height/r.height);
  var ctx=colorirCtx;
  ctx.beginPath();
  ctx.moveTo(colorirUltimoX,colorirUltimoY);
  ctx.lineTo(x,y);
  var tam=colorirTamanhos[colorirPincelIdx];
  if(colorirEraser){
    ctx.strokeStyle='#ffffff';
    ctx.lineWidth=tam*3;
  }else{
    ctx.strokeStyle=colorirCorAtual;
    ctx.lineWidth=tam;
  }
  ctx.lineCap='round';
  ctx.lineJoin='round';
  ctx.stroke();
  colorirUltimoX=x;colorirUltimoY=y;
}

function colorirPararDesenho(){
  colorirDesenhando=false;
}

function colorirLimpar(){
  if(!colorirCtx)return;
  colorirCtx.fillStyle='#ffffff';
  colorirCtx.fillRect(0,0,300,240);
  var pts=colorirOutlines[temaAtual]||colorirOutlines[0];
  colorirCtx.beginPath();
  colorirCtx.moveTo(pts[0].x/200*300,pts[0].y/200*240);
  for(var i=1;i<pts.length;i++){
    colorirCtx.lineTo(pts[i].x/200*300,pts[i].y/200*240);
  }
  colorirCtx.closePath();
  colorirCtx.strokeStyle='#333333';
  colorirCtx.lineWidth=3;
  colorirCtx.stroke();
}

function colorirSalvar(){
  if(!colorirCanvas)return;
  var link=document.createElement('a');
  link.download='colorir_'+temaAtual+'_'+Date.now()+'.png';
  link.href=colorirCanvas.toDataURL('image/png');
  link.click();
  colorirCelebrar();
}

function colorirCelebrar(){
  var c=document.getElementById('colorir-canvas');
  if(!c)return;
  for(var i=0;i<30;i++){
    (function(){
      var el=document.createElement('div');
      el.style.cssText='position:absolute;pointer-events:none;font-size:'+(10+Math.random()*20)+'px;left:'+(Math.random()*100)+'%;top:-10px;z-index:10;animation:colorirQueda '+(1+Math.random())+'s ease-out forwards';
      el.textContent=['⭐','🌟','✨','❤️','🎉','🎊','💫','🕊️'][Math.floor(Math.random()*8)];
      el.style.animation='none';
      el.style.top=(Math.random()*100)+'%';
      el.style.left=(Math.random()*100)+'%';
      el.style.opacity='0';
      el.style.transition='all '+(0.5+Math.random())+'s ease-out';
      c.appendChild(el);
      setTimeout(function(){
        el.style.opacity='1';
        el.style.transform='translateY('+(-20-Math.random()*40)+'px) scale('+(1.5+Math.random())+')';
        setTimeout(function(){el.style.opacity='0';setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},500);},500);
      },50);
    })();
  }
}

// ================================================================
// GAME 2: QUEBRA-CABEÇA (Puzzle)
// ================================================================
var quebraCores=[];

quebraCores[0]=['#FFD700','#FF6B00','#FF3399','#9933FF','#0099FF','#FFD700','#00CC00','#FF0000','#9933FF','#FFD700','#0099FF','#FF3399','#FFD700','#00CC00','#FF6B00','#FF0000','#9933FF','#0099FF','#FF6B00','#FF3399','#00CC00','#FFD700','#FF0000','#9933FF','#0099FF'];
quebraCores[1]=['#8B4513','#A0522D','#CD853F','#D2691E','#F4A460','#8B4513','#A0522D','#CD853F','#D2691E','#F4A460','#8B4513','#A0522D','#CD853F','#D2691E','#F4A460','#8B4513','#A0522D','#CD853F','#D2691E','#F4A460','#8B4513','#A0522D','#CD853F','#D2691E','#F4A460'];
quebraCores[2]=['#87CEEB','#98FB98','#FFD700','#FFA07A','#DDA0DD','#87CEEB','#98FB98','#FFD700','#FFA07A','#DDA0DD','#87CEEB','#98FB98','#FFD700','#FFA07A','#DDA0DD','#87CEEB','#98FB98','#FFD700','#FFA07A','#DDA0DD','#87CEEB','#98FB98','#FFD700','#FFA07A','#DDA0DD'];
quebraCores[3]=['#4169E1','#6495ED','#7B68EE','#6A5ACD','#9370DB','#4169E1','#6495ED','#7B68EE','#6A5ACD','#9370DB','#4169E1','#6495ED','#7B68EE','#6A5ACD','#9370DB','#4169E1','#6495ED','#7B68EE','#6A5ACD','#9370DB','#4169E1','#6495ED','#7B68EE','#6A5ACD','#9370DB'];
quebraCores[4]=['#FF69B4','#FF1493','#DB7093','#FFB6C1','#FFC0CB','#FF69B4','#FF1493','#DB7093','#FFB6C1','#FFC0CB','#FF69B4','#FF1493','#DB7093','#FFB6C1','#FFC0CB','#FF69B4','#FF1493','#DB7093','#FFB6C1','#FFC0CB','#FF69B4','#FF1493','#DB7093','#FFB6C1','#FFC0CB'];
quebraCores[5]=['#FF6347','#FF4500','#DC143C','#B22222','#CD5C5C','#FF6347','#FF4500','#DC143C','#B22222','#CD5C5C','#FF6347','#FF4500','#DC143C','#B22222','#CD5C5C','#FF6347','#FF4500','#DC143C','#B22222','#CD5C5C','#FF6347','#FF4500','#DC143C','#B22222','#CD5C5C'];
quebraCores[6]=['#E6E6FA','#D8BFD8','#DDA0DD','#EE82EE','#DA70D6','#E6E6FA','#D8BFD8','#DDA0DD','#EE82EE','#DA70D6','#E6E6FA','#D8BFD8','#DDA0DD','#EE82EE','#DA70D6','#E6E6FA','#D8BFD8','#DDA0DD','#EE82EE','#DA70D6','#E6E6FA','#D8BFD8','#DDA0DD','#EE82EE','#DA70D6'];
quebraCores[7]=['#90EE90','#32CD32','#228B22','#006400','#7CFC00','#90EE90','#32CD32','#228B22','#006400','#7CFC00','#90EE90','#32CD32','#228B22','#006400','#7CFC00','#90EE90','#32CD32','#228B22','#006400','#7CFC00','#90EE90','#32CD32','#228B22','#006400','#7CFC00'];
quebraCores[8]=['#FFDAB9','#FFE4B5','#FFDEAD','#F5DEB3','#DEB887','#FFDAB9','#FFE4B5','#FFDEAD','#F5DEB3','#DEB887','#FFDAB9','#FFE4B5','#FFDEAD','#F5DEB3','#DEB887','#FFDAB9','#FFE4B5','#FFDEAD','#F5DEB3','#DEB887','#FFDAB9','#FFE4B5','#FFDEAD','#F5DEB3','#DEB887'];
quebraCores[9]=['#FF4500','#FF6347','#FF7F50','#FF8C00','#FFA500','#FF4500','#FF6347','#FF7F50','#FF8C00','#FFA500','#FF4500','#FF6347','#FF7F50','#FF8C00','#FFA500','#FF4500','#FF6347','#FF7F50','#FF8C00','#FFA500','#FF4500','#FF6347','#FF7F50','#FF8C00','#FFA500'];
quebraCores[10]=['#B0C4DE','#87CEEB','#4682B4','#5F9EA0','#6495ED','#B0C4DE','#87CEEB','#4682B4','#5F9EA0','#6495ED','#B0C4DE','#87CEEB','#4682B4','#5F9EA0','#6495ED','#B0C4DE','#87CEEB','#4682B4','#5F9EA0','#6495ED','#B0C4DE','#87CEEB','#4682B4','#5F9EA0','#6495ED'];
quebraCores[11]=['#F0E68C','#BDB76B','#DAA520','#B8860B','#8B6508','#F0E68C','#BDB76B','#DAA520','#B8860B','#8B6508','#F0E68C','#BDB76B','#DAA520','#B8860B','#8B6508','#F0E68C','#BDB76B','#DAA520','#B8860B','#8B6508','#F0E68C','#BDB76B','#DAA520','#B8860B','#8B6508'];
quebraCores[12]=['#C0C0C0','#A9A9A9','#808080','#696969','#D3D3D3','#C0C0C0','#A9A9A9','#808080','#696969','#D3D3D3','#C0C0C0','#A9A9A9','#808080','#696969','#D3D3D3','#C0C0C0','#A9A9A9','#808080','#696969','#D3D3D3','#C0C0C0','#A9A9A9','#808080','#696969','#D3D3D3'];
quebraCores[13]=['#FFB6C1','#FF69B4','#FF1493','#DB7093','#C71585','#FFB6C1','#FF69B4','#FF1493','#DB7093','#C71585','#FFB6C1','#FF69B4','#FF1493','#DB7093','#C71585','#FFB6C1','#FF69B4','#FF1493','#DB7093','#C71585','#FFB6C1','#FF69B4','#FF1493','#DB7093','#C71585'];
quebraCores[14]=['#98FB98','#7CFC00','#32CD32','#00FA9A','#00FF7F','#98FB98','#7CFC00','#32CD32','#00FA9A','#00FF7F','#98FB98','#7CFC00','#32CD32','#00FA9A','#00FF7F','#98FB98','#7CFC00','#32CD32','#00FA9A','#00FF7F','#98FB98','#7CFC00','#32CD32','#00FA9A','#00FF7F'];

var quebraTamanhos=[3,4,5];
var quebraDiff=0,quebraGrade=[],quebraTamanho=3,quebraSel=-1;
var quebraMovimentos=0,quebraTimer=null,quebraSegundos=0,quebraJogando=false;
var quebraCanvas=null,quebraCtx=null;

function initQuebra(){
  var el=document.getElementById('tela-quebra');
  if(!el)return;
  quebraTamanho=quebraTamanhos[quebraDiff];
  quebraSel=-1;quebraMovimentos=0;quebraSegundos=0;quebraJogando=true;
  if(quebraTimer){clearInterval(quebraTimer);quebraTimer=null;}
  quebraGrade=[];
  var n=quebraTamanho*quebraTamanho;
  var cores=quebraCores[temaAtual]||quebraCores[0];
  for(var i=0;i<n;i++){
    quebraGrade.push({id:i,cor:cores[i%cores.length],pos:i});
  }
  quebraEmbaralhar();
  el.innerHTML=
    '<div style="text-align:center;margin:4px 0">'+
    '<p style="color:#cdb8f0;font-weight:700;font-size:.8rem">🧩 Dificuldade:</p>'+
    '<div class="dificuldade" id="quebra-dif">'+
    '<button class="dif-btn'+(quebraDiff===0?' ativo':'')+'" onclick="quebraSetDiff(0)">🌟 3×3</button>'+
    '<button class="dif-btn'+(quebraDiff===1?' ativo':'')+'" onclick="quebraSetDiff(1)">🌟🌟 4×4</button>'+
    '<button class="dif-btn'+(quebraDiff===2?' ativo':'')+'" onclick="quebraSetDiff(2)">🌟🌟🌟 5×5</button>'+
    '</div>'+
    '<div style="display:flex;gap:10px;justify-content:center;margin:4px 0;font-size:.8rem;color:#cdb8f0;font-weight:600">'+
    '<span>🔄 <span id="quebra-mov">0</span> mov</span>'+
    '<span>⏱️ <span id="quebra-tempo">0s</span></span>'+
    '</div>'+
    '<button class="btn btn-p btn-sm" onclick="quebraNovoJogo()">🔄 Novo Jogo</button> '+
    '<button class="btn btn-w btn-sm" onclick="quebraEmbaralharPecas()">🔀 Embaralhar</button>'+
    '</div>'+
    '<div style="text-align:center"><div class="cp-grid" id="quebra-grid" style="display:inline-grid;gap:2px;margin:4px auto;user-select:none;background:rgba(255,255,255,.02);padding:4px;border-radius:10px;border:1px solid rgba(255,255,255,.04)"></div></div>'+
    '<div id="quebra-msg" style="text-align:center;font-size:.8rem;color:#ffd700;font-weight:700;min-height:24px;margin:4px 0"></div>';
  quebraTimer=setInterval(function(){quebraSegundos++;document.getElementById('quebra-tempo').textContent=quebraSegundos+'s';},1000);
  renderQuebra();
  var msg=document.getElementById('quebra-msg');
  if(msg)msg.innerHTML='🎯 Clique em um quadrado para selecionar, depois clique em outro para trocar de lugar. Ordene os números de 1 a '+n+'!';
}

function quebraSetDiff(d){
  quebraDiff=d;
  initQuebra();
}

function quebraEmbaralhar(){
  var n=quebraGrade.length;
  for(var p=0;p<3;p++){
    for(var i=n-1;i>0;i--){
      var j=Math.floor(Math.random()*(i+1));
      var temp=quebraGrade[i];quebraGrade[i]=quebraGrade[j];quebraGrade[j]=temp;
    }
  }
}

function quebraEmbaralharPecas(){
  quebraSel=-1;
  quebraMovimentos=0;
  quebraEmbaralhar();
  renderQuebra();
  var msg=document.getElementById('quebra-msg');
  if(msg)msg.innerHTML='🔀 Peças embaralhadas! Ordene os números de 1 a '+quebraGrade.length+'.';
}

function quebraContarInversoes(){
  var inv=0;
  for(var i=0;i<quebraGrade.length;i++){
    for(var j=i+1;j<quebraGrade.length;j++){
      if(quebraGrade[i].id>quebraGrade[j].id)inv++;
    }
  }
  return inv;
}

function renderQuebra(){
  var g=document.getElementById('quebra-grid');
  if(!g)return;
  g.innerHTML='';
  g.style.gridTemplateColumns='repeat('+quebraTamanho+',1fr)';
  var cellSize=Math.floor(260/quebraTamanho);
  for(var i=0;i<quebraGrade.length;i++){
    (function(idx){
      var sel=quebraSel===idx;
      var d=document.createElement('div');
      d.style.width=cellSize+'px';d.style.height=cellSize+'px';
      d.style.background=quebraGrade[idx].cor;
      d.style.borderRadius='4px';
      d.style.border=sel?'3px solid #ffd700':'2px solid rgba(255,255,255,.1)';
      d.style.boxShadow=sel?'0 0 12px rgba(255,215,0,.5)':'none';
      d.style.display='flex';
      d.style.alignItems='center';
      d.style.justifyContent='center';
      d.style.color=sel?'#fff':'rgba(0,0,0,.5)';
      d.style.fontWeight='800';
      d.style.fontSize='1rem';
      d.style.textShadow=sel?'0 0 6px rgba(255,215,0,.6)':'none';
      d.textContent=quebraGrade[idx].id+1;
      d.style.cursor='pointer';
      d.style.transition='all .15s';
      d.onclick=function(){quebraClick(idx);};
      g.appendChild(d);
    })(i);
  }
  var mov=document.getElementById('quebra-mov');
  if(mov)mov.textContent=quebraMovimentos;
  quebraCheckVitoria();
}

function quebraClick(idx){
  if(!quebraJogando)return;
  var msg=document.getElementById('quebra-msg');
  if(quebraSel===-1){
    quebraSel=idx;
    renderQuebra();
    if(msg)msg.innerHTML='✅ Quadrado '+(idx+1)+' selecionado! Agora clique em outro para trocar de lugar.';
    return;
  }
  if(quebraSel===idx){
    quebraSel=-1;
    renderQuebra();
    if(msg)msg.innerHTML='🔓 Seleção cancelada. Clique em um quadrado para selecionar.';
    return;
  }
  var temp=quebraGrade[quebraSel];
  quebraGrade[quebraSel]=quebraGrade[idx];
  quebraGrade[idx]=temp;
  quebraSel=-1;
  quebraMovimentos++;
  renderQuebra();
  if(msg)msg.innerHTML='🔄 Troca feita! Continue ordenando os números.';
  quebraCheckVitoria();
}

function quebraCheckVitoria(){
  var certo=true;
  for(var i=0;i<quebraGrade.length;i++){
    if(quebraGrade[i].id!==i){certo=false;break;}
  }
  if(certo&&quebraJogando){
    quebraJogando=false;
    if(quebraTimer){clearInterval(quebraTimer);quebraTimer=null;}
    var msg=document.getElementById('quebra-msg');
    if(msg)msg.innerHTML='🎉 Parabéns! Completou em '+quebraMovimentos+' movimentos e '+quebraSegundos+'s!';
  }
}

function quebraNovoJogo(){
  if(quebraTimer){clearInterval(quebraTimer);quebraTimer=null;}
  initQuebra();
}

// ================================================================
// GAME 3: MEMÓRIA COM IMAGENS (Enhanced Memory)
// ================================================================
var memImgCoresFundo=[
  '#4A0080','#8B4513','#006400','#1a1a5e','#FF1493','#B22222','#4B0082','#228B22',
  '#D2691E','#FF4500','#2F4F4F','#8B008B','#696969','#DC143C','#006400'
];

var memImgDiff=0,memImgCards=[],memImgAbertas=[],memImgPares=0;
var memImgTentativas=0,memImgBloq=false,memImgParesTotal=0;
var memImgTimer=null,memImgSegundos=0,memImgJogando=false;

function initMemImg(){
  var el=document.getElementById('tela-memimg');
  if(!el)return;
  el.innerHTML=
    '<div style="text-align:center;margin:4px 0">'+
    '<p style="color:#cdb8f0;font-weight:700;font-size:.8rem">🧠 Nível:</p>'+
    '<div class="dificuldade" id="memimg-dif">'+
    '<button class="dif-btn'+(memImgDiff===0?' ativo':'')+'" onclick="memImgSetDiff(0)">🌟 6 pares</button>'+
    '<button class="dif-btn'+(memImgDiff===1?' ativo':'')+'" onclick="memImgSetDiff(1)">🌟🌟 8 pares</button>'+
    '<button class="dif-btn'+(memImgDiff===2?' ativo':'')+'" onclick="memImgSetDiff(2)">🌟🌟🌟 12 pares</button>'+
    '</div>'+
    '<button class="btn btn-p" onclick="memImgNovoJogo()">🧠 Novo Jogo!</button>'+
    '</div>'+
    '<div class="mem-info" id="memimg-info">🔄 Clique em Começar!</div>'+
    '<div class="mem-grid" id="memimg-grid"></div>';
  memImgNovoJogo();
}

function memImgSetDiff(d){
  memImgDiff=d;
  initMemImg();
}

function memImgNovoJogo(){
  if(memImgTimer){clearInterval(memImgTimer);memImgTimer=null;}
  memImgAbertas=[];memImgPares=0;memImgTentativas=0;memImgBloq=false;memImgSegundos=0;memImgJogando=true;
  var base=memoriaTemas[temaAtual]||memoriaTemas[0];
  var n=[6,8,12][memImgDiff];
  if(n>base.length)n=base.length;
  var dados=[];
  var temp=[];
  for(var i=0;i<base.length;i++)temp.push(base[i]);
  temp.sort(function(){return Math.random()-0.5;});
  for(var i=0;i<n;i++)dados.push(temp[i]);
  var cartas=[];
  dados.forEach(function(d,i){
    cartas.push({id:i*2,par:i,emoji:d.e,texto:d.t,virada:false});
    cartas.push({id:i*2+1,par:i,emoji:d.e,texto:d.t,virada:false});
  });
  cartas.sort(function(){return Math.random()-0.5;});
  memImgCards=cartas;memImgParesTotal=dados.length;
  renderMemImg();
  var info=document.getElementById('memimg-info');
  if(info)info.textContent='🧠 Encontre os pares! Tentativas: 0 | Pares: 0/'+memImgParesTotal;
  memImgTimer=setInterval(function(){
    memImgSegundos++;
    var info2=document.getElementById('memimg-info');
    if(info2&&memImgJogando){
      info2.textContent='🧠 Tempo: '+memImgSegundos+'s | Tentativas: '+memImgTentativas+' | Pares: '+memImgPares+'/'+memImgParesTotal;
    }
  },1000);
}

function renderMemImg(){
  var g=document.getElementById('memimg-grid');
  if(!g)return;
  g.innerHTML='';
  var cols=[4,4,6][memImgDiff];
  g.style.gridTemplateColumns='repeat('+cols+',1fr)';
  var fundo=memImgCoresFundo[temaAtual]||memImgCoresFundo[0];
  for(var i=0;i<memImgCards.length;i++){
    (function(idx){
      var c=memImgCards[idx];
      var d=document.createElement('div');
      d.className='mem-card';
      d.id='memimg-'+idx;
      var grad='linear-gradient(135deg,'+fundo+','+memImgClarear(fundo,30)+')';
      d.innerHTML='<div class="mc-f" style="background:'+grad+'">❓</div><div class="mc-b">'+c.emoji+'<br><span style="font-size:.45rem;display:block">'+c.texto+'</span></div>';
      d.onclick=function(){virarMemImg(idx);};
      g.appendChild(d);
    })(i);
  }
}

function memImgClarear(cor,pct){
  var r=parseInt(cor.substring(1,3),16);
  var g=parseInt(cor.substring(3,5),16);
  var b=parseInt(cor.substring(5,7),16);
  r=Math.min(255,r+Math.round((255-r)*pct/100));
  g=Math.min(255,g+Math.round((255-g)*pct/100));
  b=Math.min(255,b+Math.round((255-b)*pct/100));
  return '#'+('0'+r.toString(16)).slice(-2)+('0'+g.toString(16)).slice(-2)+('0'+b.toString(16)).slice(-2);
}

function virarMemImg(i){
  if(memImgBloq||!memImgJogando)return;
  var c=memImgCards[i];
  if(c.virada||memImgAbertas.length>=2)return;
  c.virada=true;
  memImgAbertas.push(i);
  document.getElementById('memimg-'+i).classList.add('virada');
  if(memImgAbertas.length===2){
    memImgBloq=true;
    memImgTentativas++;
    var a=memImgCards[memImgAbertas[0]],b=memImgCards[memImgAbertas[1]];
    if(a.par===b.par&&memImgAbertas[0]!==memImgAbertas[1]){
      memImgPares++;
      document.getElementById('memimg-'+memImgAbertas[0]).classList.add('acertou');
      document.getElementById('memimg-'+memImgAbertas[1]).classList.add('acertou');
      memImgAbertas=[];
      memImgBloq=false;
      var info=document.getElementById('memimg-info');
      if(info){
        info.textContent='🧠 Tempo: '+memImgSegundos+'s | Tentativas: '+memImgTentativas+' | Pares: '+memImgPares+'/'+memImgParesTotal;
      }
      if(memImgPares>=memImgParesTotal){
        memImgJogando=false;
        if(memImgTimer){clearInterval(memImgTimer);memImgTimer=null;}
        if(info){
          info.textContent='🎉 Parabéns! '+memImgTentativas+' tentativas em '+memImgSegundos+'s!';
        }
      }
    }else{
      document.getElementById('memimg-'+memImgAbertas[0]).classList.add('errou');
      document.getElementById('memimg-'+memImgAbertas[1]).classList.add('errou');
      setTimeout(function(){
        if(!memImgCards)return;
        if(!memImgCards[memImgAbertas[0]]||!memImgCards[memImgAbertas[1]])return;
        memImgCards[memImgAbertas[0]].virada=false;
        memImgCards[memImgAbertas[1]].virada=false;
        document.getElementById('memimg-'+memImgAbertas[0]).classList.remove('virada','errou');
        document.getElementById('memimg-'+memImgAbertas[1]).classList.remove('virada','errou');
        memImgAbertas=[];
        memImgBloq=false;
      },800);
    }
  }
}

// ================================================================
// GAME 4: LABIRINTO (Maze)
// ================================================================
var labirintoCanvas=null,labirintoCtx=null;
var labirintoGrade=[],labirintoVisitados=[];
var labirintoCols=7,labirintoRows=7;
var labirintoPlayer={x:0,y:0};
var labirintoFim={x:0,y:0};
var labirintoJogando=false,labirintoMovimentos=0;
var labirintoSegundos=0,labirintoTimer=null;
var labirintoTamanhos=[7,11,15];
var labirintoDiff=0;
var labirintoW=300,labirintoH=300;

function initLabirinto(){
  var el=document.getElementById('tela-labirinto');
  if(!el)return;
  labirintoCols=labirintoTamanhos[labirintoDiff];
  labirintoRows=labirintoTamanhos[labirintoDiff];
  if(labirintoTimer){clearInterval(labirintoTimer);labirintoTimer=null;}
  labirintoMovimentos=0;labirintoSegundos=0;labirintoJogando=true;
  el.innerHTML=
    '<div style="text-align:center;margin:4px 0">'+
    '<p style="color:#cdb8f0;font-weight:700;font-size:.8rem">🌀 Dificuldade:</p>'+
    '<div class="dificuldade" id="labirinto-dif">'+
    '<button class="dif-btn'+(labirintoDiff===0?' ativo':'')+'" onclick="labirintoSetDiff(0)">🌟 7×7</button>'+
    '<button class="dif-btn'+(labirintoDiff===1?' ativo':'')+'" onclick="labirintoSetDiff(1)">🌟🌟 11×11</button>'+
    '<button class="dif-btn'+(labirintoDiff===2?' ativo':'')+'" onclick="labirintoSetDiff(2)">🌟🌟🌟 15×15</button>'+
    '</div>'+
    '<div style="display:flex;gap:10px;justify-content:center;margin:4px 0;font-size:.8rem;color:#cdb8f0;font-weight:600">'+
    '<span>🚶 <span id="labirinto-mov">0</span> passos</span>'+
    '<span>⏱️ <span id="labirinto-tempo">0s</span></span>'+
    '</div>'+
    '<button class="btn btn-p btn-sm" onclick="initLabirinto()">🔄 Novo Labirinto</button>'+
    '</div>'+
    '<div class="lp-canvas-wrap" style="max-width:320px"><canvas id="labirinto-area" style="display:block;width:100%;height:auto;touch-action:none"></canvas></div>'+
    '<div id="labirinto-msg" style="text-align:center;font-size:.85rem;color:#ffd700;font-weight:700;min-height:24px;margin:4px 0">🌀 Use as setas para mover!</div>';
  gerarLabirinto(labirintoCols,labirintoRows);
  renderLabirinto();
  labirintoTimer=setInterval(function(){
    if(!labirintoJogando)return;
    labirintoSegundos++;
    var e=document.getElementById('labirinto-tempo');
    if(e)e.textContent=labirintoSegundos+'s';
  },1000);
}

function labirintoSetDiff(d){
  labirintoDiff=d;
  initLabirinto();
}

function gerarLabirinto(cols,rows){
  labirintoGrade=[];
  for(var r=0;r<rows;r++){
    labirintoGrade[r]=[];
    for(var c=0;c<cols;c++){
      labirintoGrade[r][c]={n:true,s:true,e:true,w:true,visitado:false};
    }
  }
  labirintoVisitados=[];
  var pilha=[];
  var inicio={x:0,y:0};
  labirintoGrade[0][0].visitado=true;
  labirintoVisitados.push(inicio);
  pilha.push(inicio);

  while(pilha.length>0){
    var atual=pilha[pilha.length-1];
    var vizinhos=[];
    var dirs=[
      {dx:0,dy:-1,dir:'n',op:'s'},
      {dx:0,dy:1,dir:'s',op:'n'},
      {dx:-1,dy:0,dir:'w',op:'e'},
      {dx:1,dy:0,dir:'e',op:'w'}
    ];
    for(var i=0;i<dirs.length;i++){
      var nx=atual.x+dirs[i].dx;
      var ny=atual.y+dirs[i].dy;
      if(nx>=0&&nx<cols&&ny>=0&&ny<rows&&!labirintoGrade[ny][nx].visitado){
        vizinhos.push({x:nx,y:ny,dir:dirs[i].dir,op:dirs[i].op});
      }
    }
    if(vizinhos.length>0){
      var esc=vizinhos[Math.floor(Math.random()*vizinhos.length)];
      labirintoGrade[atual.y][atual.x][esc.dir]=false;
      labirintoGrade[esc.y][esc.x][esc.op]=false;
      labirintoGrade[esc.y][esc.x].visitado=true;
      labirintoVisitados.push(esc);
      pilha.push({x:esc.x,y:esc.y});
    }else{
      pilha.pop();
    }
  }
  labirintoPlayer={x:0,y:0};
  labirintoFim={x:cols-1,y:rows-1};
}

function renderLabirinto(){
  var c=document.getElementById('labirinto-area');
  if(!c)return;
  labirintoCanvas=c;
  labirintoCtx=c.getContext('2d');
  var size=Math.min(labirintoW,labirintoH);
  c.width=size;c.height=size;
  var ctx=labirintoCtx;
  var cols=labirintoCols,rows=labirintoRows;
  var cellW=size/cols,cellH=size/rows;

  ctx.fillStyle='rgba(15,12,41,1)';
  ctx.fillRect(0,0,size,size);

  ctx.strokeStyle='rgba(255,255,255,.8)';
  ctx.lineWidth=2;
  for(var r=0;r<rows;r++){
    for(var c2=0;c2<cols;c2++){
      var x=c2*cellW,y=r*cellH;
      var cell=labirintoGrade[r][c2];
      if(cell.n)ctx.strokeRect(x,y,cellW,1);
      if(cell.s)ctx.strokeRect(x,y+cellH-1,cellW,1);
      if(cell.w)ctx.strokeRect(x,y,1,cellH);
      if(cell.e)ctx.strokeRect(x+cellW-1,y,1,cellH);
    }
  }

  ctx.fillStyle='rgba(67,233,123,.6)';
  ctx.fillRect(2,2,cellW-4,cellH-4);
  ctx.fillStyle='#43e97b';
  ctx.font='bold '+(cellH/3)+'px sans-serif';
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('S',cellW/2,cellH/2);

  var fx=labirintoFim.x*cellW+cellW/2;
  var fy=labirintoFim.y*cellH+cellH/2;
  ctx.fillStyle='rgba(255,50,50,.6)';
  ctx.beginPath();
  ctx.arc(fx,fy,Math.min(cellW,cellH)/3,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle='#fff';
  ctx.font='bold '+(cellH/3)+'px sans-serif';
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('F',fx,fy);

  var px=labirintoPlayer.x*cellW+cellW/2;
  var py=labirintoPlayer.y*cellH+cellH/2;
  ctx.fillStyle='rgba(255,215,0,.9)';
  ctx.beginPath();
  ctx.arc(px,py,Math.min(cellW,cellH)/2.5,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle='#fff';
  ctx.font='bold '+(cellH/3)+'px sans-serif';
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('👤',px,py);

  var mov=document.getElementById('labirinto-mov');
  if(mov)mov.textContent=labirintoMovimentos;
}

function moverLabirinto(dx,dy){
  if(!labirintoJogando)return;
  var px=labirintoPlayer.x,py=labirintoPlayer.y;
  var cell=labirintoGrade[py][px];
  if(dx===-1&&cell.w)return;
  if(dx===1&&cell.e)return;
  if(dy===-1&&cell.n)return;
  if(dy===1&&cell.s)return;
  var nx=px+dx,ny=py+dy;
  if(nx<0||nx>=labirintoCols||ny<0||ny>=labirintoRows)return;
  labirintoPlayer.x=nx;labirintoPlayer.y=ny;
  labirintoMovimentos++;
  var movEl=document.getElementById('labirinto-mov');
  if(movEl)movEl.textContent=labirintoMovimentos;
  renderLabirinto();
  if(nx===labirintoFim.x&&ny===labirintoFim.y){
    labirintoJogando=false;
    if(labirintoTimer){clearInterval(labirintoTimer);labirintoTimer=null;}
    var msg=document.getElementById('labirinto-msg');
    if(msg)msg.innerHTML='🎉🏆 Parabéns! Completou em '+labirintoMovimentos+' passos e '+labirintoSegundos+'s!';
    labirintoCelebrar();
  }
}

function labirintoCelebrar(){
  var c=document.getElementById('labirinto-area');
  if(!c)return;
  for(var i=0;i<25;i++){
    (function(){
      var el=document.createElement('div');
      el.style.cssText='position:absolute;pointer-events:none;font-size:'+(12+Math.random()*16)+'px;left:'+(Math.random()*100)+'%;top:'+(Math.random()*100)+'%;z-index:10;opacity:0;transition:all '+(0.5+Math.random())+'s ease-out';
      el.textContent=['⭐','🌟','✨','🎉','🎊','💫','🏆','❤️'][Math.floor(Math.random()*8)];
      var p=document.getElementById('tela-labirinto');
      if(p){
        p.style.position='relative';
        p.appendChild(el);
        setTimeout(function(){
          el.style.opacity='1';
          el.style.transform='scale('+(1.5+Math.random())+')';
          setTimeout(function(){
            el.style.opacity='0';
            setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},500);
          },600);
        },50);
      }
    })();
  }
}

// Keyboard and touch controls for maze
document.addEventListener('keydown',function(e){
  if(!labirintoJogando)return;
  if(e.key==='ArrowUp'){e.preventDefault();moverLabirinto(0,-1);}
  else if(e.key==='ArrowDown'){e.preventDefault();moverLabirinto(0,1);}
  else if(e.key==='ArrowLeft'){e.preventDefault();moverLabirinto(-1,0);}
  else if(e.key==='ArrowRight'){e.preventDefault();moverLabirinto(1,0);}
});

// Touch swipe for maze
var labirintoTouchStartX=0,labirintoTouchStartY=0;
document.addEventListener('touchstart',function(e){
  var t=e.target;
  if(!t||!t.id||t.id!=='labirinto-area')return;
  if(!labirintoJogando)return;
  var touch=e.touches[0];
  labirintoTouchStartX=touch.clientX;
  labirintoTouchStartY=touch.clientY;
},{passive:true});

document.addEventListener('touchend',function(e){
  var t=e.target;
  if(!t||!t.id||t.id!=='labirinto-area')return;
  if(!labirintoJogando)return;
  var touch=e.changedTouches[0];
  var dx=touch.clientX-labirintoTouchStartX;
  var dy=touch.clientY-labirintoTouchStartY;
  if(Math.abs(dx)<10&&Math.abs(dy)<10)return;
  if(Math.abs(dx)>Math.abs(dy)){
    moverLabirinto(dx>0?1:-1,0);
  }else{
    moverLabirinto(0,dy>0?1:-1);
  }
},{passive:true});

// ================================================================
// GAME 5: PALAVRAS EMBARALHADAS (Scrambled Words)
// ================================================================
var palavrasAtual='',palavrasLetras=[],palavrasOrdem=[];
var palavrasSelecionadas=[],palavrasAcertos=0,palavrasErros=0;
var palavrasJogando=false,palavrasDicaUsada=false;
var palavrasUsadas=[];

function initPalavras(){
  var el=document.getElementById('tela-palavras');
  if(!el)return;
  palavrasAcertos=0;palavrasErros=0;palavrasUsadas=[];
  el.innerHTML=
    '<div style="text-align:center;margin:4px 0">'+
    '<p style="color:#cdb8f0;font-weight:700;font-size:.85rem">🔀 Palavras Embaralhadas</p>'+
    '<div style="display:flex;gap:10px;justify-content:center;margin:4px 0;font-size:.8rem;color:#cdb8f0;font-weight:600">'+
    '<span>✅ <span id="palavras-acertos">0</span></span>'+
    '<span>❌ <span id="palavras-erros">0</span></span>'+
    '</div>'+
    '</div>'+
    '<div style="text-align:center;margin:8px 0">'+
    '<div style="display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin:8px auto;max-width:360px;padding:10px;background:rgba(255,255,255,.03);border-radius:12px;border:1px solid rgba(255,255,255,.05);min-height:50px" id="palavras-tiles"></div>'+
    '<div style="display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin:8px auto;max-width:360px;padding:10px;background:rgba(255,255,255,.03);border-radius:12px;border:1px solid rgba(255,255,255,.05);min-height:40px" id="palavras-resposta"></div>'+
    '<div id="palavras-msg" style="font-size:.85rem;color:#d4c4f0;font-weight:700;min-height:28px;margin:6px 0;text-align:center"></div>'+
    '<div class="botoes-centro">'+
    '<button class="btn btn-sm btn-w" onclick="palavrasDica()">💡 Dica</button>'+
    '<button class="btn btn-sm btn-p" onclick="palavrasNova()">🔄 Nova Palavra</button>'+
    '<button class="btn btn-sm btn-o" onclick="palavrasLimpar()">🗑️ Limpar</button>'+
    '</div>'+
    '</div>';
  palavrasNova();
}

function palavrasNova(){
  var lista=cacaTemas[temaAtual]||cacaTemas[0];
  var disp=[];
  for(var i=0;i<lista.length;i++){
    if(palavrasUsadas.indexOf(lista[i])<0)disp.push(lista[i]);
  }
  if(disp.length===0){
    palavrasUsadas=[];
    for(var i=0;i<lista.length;i++)palavrasUsadas.push(lista[i]);
    var disp=[];
    for(var i=0;i<lista.length;i++){
      if(palavrasUsadas.indexOf(lista[i])<0)disp.push(lista[i]);
    }
  }
  if(disp.length===0)disp=lista;
  palavrasAtual=disp[Math.floor(Math.random()*disp.length)];
  palavrasUsadas.push(palavrasAtual);
  palavrasLetras=palavrasAtual.split('');
  if(palavrasLetras.length<2)palavrasLetras=['A','B'];
  palavrasOrdem=[];
  for(var i=0;i<palavrasLetras.length;i++)palavrasOrdem.push(i);
  palavrasOrdem.sort(function(){return Math.random()-0.5;});
  palavrasSelecionadas=[];
  palavrasDicaUsada=false;
  palavrasJogando=true;
  renderPalavras();
  document.getElementById('palavras-msg').textContent='🔀 Clique nas letras em ordem! ('+palavrasLetras.length+' letras)';
}

function renderPalavras(){
  var tiles=document.getElementById('palavras-tiles');
  var resp=document.getElementById('palavras-resposta');
  if(!tiles||!resp)return;
  tiles.innerHTML='';
  resp.innerHTML='';
  for(var i=0;i<palavrasOrdem.length;i++){
    (function(idx){
      var l=palavrasOrdem[idx];
      var letra=palavrasLetras[l];
      var sel=palavrasSelecionadas.indexOf(idx)>=0;
      var d=document.createElement('div');
      d.style.cssText='width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:800;color:'+(sel?'#6a5a8a':'#f5e6d3')+';background:'+(sel?'rgba(255,255,255,.02)':'rgba(124,92,191,.25)')+';border-radius:8px;cursor:'+(sel?'default':'pointer')+';border:2px solid '+(sel?'rgba(255,255,255,.03)':'rgba(124,92,191,.3)')+';transition:all .15s';
      d.textContent=letra;
      if(!sel){
        d.onclick=function(){palavrasClickLetra(idx);};
      }
      tiles.appendChild(d);
    })(i);
  }
  var selecionadas=palavrasSelecionadas.slice();
  for(var i=0;i<selecionadas.length;i++){
    (function(idx){
      var l=palavrasOrdem[selecionadas[i]];
      var letra=palavrasLetras[l];
      var d=document.createElement('div');
      d.style.cssText='width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:800;color:#43e97b;background:rgba(67,233,123,.12);border-radius:8px;border:2px solid rgba(67,233,123,.25);transition:all .15s';
      d.textContent=letra;
      d.onclick=function(){palavrasRemover(idx);};
      resp.appendChild(d);
    })(i);
  }
  var ac=document.getElementById('palavras-acertos');
  var er=document.getElementById('palavras-erros');
  if(ac)ac.textContent=palavrasAcertos;
  if(er)er.textContent=palavrasErros;
}

function palavrasClickLetra(idx){
  if(!palavrasJogando)return;
  if(palavrasSelecionadas.indexOf(idx)>=0)return;
  if(palavrasSelecionadas.length>=palavrasLetras.length)return;
  palavrasSelecionadas.push(idx);
  renderPalavras();
  if(palavrasSelecionadas.length===palavrasLetras.length){
    palavrasVerificar();
  }
}

function palavrasRemover(idx){
  if(!palavrasJogando)return;
  palavrasSelecionadas.splice(idx,1);
  renderPalavras();
}

function palavrasVerificar(){
  var tentativa='';
  for(var i=0;i<palavrasSelecionadas.length;i++){
    tentativa+=palavrasLetras[palavrasOrdem[palavrasSelecionadas[i]]];
  }
  if(tentativa===palavrasAtual){
    palavrasAcertos++;
    palavrasJogando=false;
    document.getElementById('palavras-msg').textContent='✅ Correto! A palavra é: '+palavrasAtual+' 🎉';
    document.getElementById('palavras-acertos').textContent=palavrasAcertos;
  }else{
    palavrasErros++;
    document.getElementById('palavras-erros').textContent=palavrasErros;
    document.getElementById('palavras-msg').textContent='❌ Não é "'+tentativa+'". Tente de novo!';
    palavrasSelecionadas=[];
    renderPalavras();
  }
}

function palavrasDica(){
  if(!palavrasJogando)return;
  if(palavrasDicaUsada){
    document.getElementById('palavras-msg').textContent='💡 Dica já usada! A primeira letra é: '+palavrasAtual[0];
    return;
  }
  palavrasDicaUsada=true;
  document.getElementById('palavras-msg').textContent='💡 Dica: A primeira letra é "'+palavrasAtual[0]+'"';
}

function palavrasLimpar(){
  if(!palavrasJogando)return;
  palavrasSelecionadas=[];
  renderPalavras();
  document.getElementById('palavras-msg').textContent='🗑️ Limpo! Tente novamente.';
}
