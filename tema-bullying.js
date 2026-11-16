// ===== TEMA 110: EMPATIA, RESPEITO E NÃO AO BULLYING =====
// Visão Cristã (O Evangelho de Jesus) e Espírita (Allan Kardec)
// Conteúdo leve, acolhedor, lúdico e formativo para Evangelização Infantil.

(function injectTemaBullying() {
  if (typeof temaContent === 'undefined' || typeof temaNome === 'undefined') return;

  var idx = 110;
  temaNome[idx] = '🕊️ Empatia, Respeito e Não ao Bullying';

  var histHtml = '<h2>🕊️ Empatia, Respeito e Não ao Bullying <button class="tts-btn-ouvir" onclick="ttsLer(\'historia\',this)">🔊 Ouvir</button></h2>'
    + '<p class="ref">Baseado nos ensinamentos de Jesus (Mateus 7:12; 22:39) e na Doutrina Espírita (O Evangelho Segundo o Espiritismo, Cap. 10 e 17)</p>'
    + '<div class="eb">🕊️❤️🤝🛡️🌟🌸</div>'
    + '<h3>A Ponte de Luz e as Palavras que Curam</h3>'
    + '<p>Na escola onde Lucas estudava, o recreio era quase sempre uma festa de risadas, correria e lanches partilhados. Mas em uma linda terça-feira de sol, um coleguinha novo chegou à turma: seu nome era <strong>Léo</strong>. Léo era um menino calmo, usava óculos redondos e gostava muito de sentar na sombra para desenhar cometas, estrelas e foguetes cheios de cores.</p>'
    + '<p>Dois colegas maiores se aproximaram, olharam os óculos de Léo e começaram a rir alto: <em>"Olha lá o quatro-olhos desenhista! Vamos esconder os lápis dele!"</em>. Eles não deixaram Léo entrar na brincadeira da bola e continuaram jogando apelidos ruins toda vez que ele passava. Léo sentou-se num banquinho afastado, apertou seu estojo contra o peito e duas lágrimas desceram silenciosas pelo seu rostinho. O coraçãozinho dele doía como se tivesse levado um arranhão por dentro.</p>'
    + '<p>Lucas, que participava da <strong>Evangelização Espírita Infantil</strong> todos os sábados, viu tudo aquilo. Ele se lembrou da <strong>Regra de Ouro</strong> que Jesus ensinou com tanto carinho: <em>"Tudo o que quereis que os homens vos façam, fazei-o vós também a eles"</em> (Mateus 7:12). Ele também lembrou que o tio da evangelização havia explicado que <strong>somos todos espíritos irmãos, filhos amados de Deus</strong>, cada um com seu jeitinho único, seus talentos e seu tempo de aprender.</p>'
    + '<p>Lucas não deu risada. Também não fingiu que não era com ele. Respirou fundo, fez uma prece rápida no coração pedindo luz ao seu Anjinho da Guarda e caminhou até o banco de Léo. Sentou-se ao lado dele, olhou os desenhos e exclamou com os olhos brilhando: <strong>"Nossa, Léo! Esse foguete espacial é sensacional! Você desenha muito bem! Quer lanchar comigo e me ensinar a desenhar um planeta com anéis?"</strong></p>'
    + '<p>Naquele instante, o rosto de Léo se iluminou. A tristeza começou a ir embora, como uma nuvem cinza levada pelo vento da primavera. Quando os outros meninos voltaram para continuar a zombaria, Lucas não gritou nem revidou com raiva. Olhou para eles com serenidade e disse: <strong>"Amigos, apelidos magoam o coração de quem ouve. Se fosse com qualquer um de nós, ninguém iria gostar. O Léo desenha estrelas incríveis! Por que em vez de zombar a gente não brinca todos juntos de tripulação espacial?"</strong></p>'
    + '<p>Aquela palavra dita com calma e verdade tocou fundo o coração dos meninos. O Evangelho nos ensina que <em>uma palavra branda desvia a tempestade</em>. Eles sentiram vergonha, pediram desculpas a Léo e, em poucos minutos, estavam todos correndo pelo pátio fingindo viajar até Marte e Júpiter! O recreio virou pura amizade.</p>'
    + '<div class="vers">"Tudo quanto quereis que os homens vos façam, fazei-lho vós também." (Mateus 7:12)</div>'
    + '<div class="reflexao">💭 <strong>Reflexão Espírita:</strong> O que é o bullying? É quando alguém ofende, agride, coloca apelidos ou exclui repetidamente um coleguinha. Brincadeira de verdade só é boa quando <strong>TODO MUNDO se diverte</strong>! Se alguém está triste, com medo ou chorando, não é brincadeira. Segundo a Doutrina Espírita, ninguém é melhor que ninguém: Deus criou todos os espíritos simples e ignorantes, destinados à felicidade e ao amor. O coleguinha que faz bullying muitas vezes tem o coração machucado e precisa de ajuda e oração para aprender o caminho do bem. E nós, quando vemos alguém sozinho ou sendo magoado, podemos ser o <strong>escudo de luz de Jesus</strong>, estendendo a mão e praticando a caridade da fraternidade! 🕊️✨</div>';

  var aulaHtml = '<h2>👩‍🏫 Plano de Aula: Empatia, Respeito e Não ao Bullying <button class="tts-btn-ouvir" onclick="ttsLer(\'aula\',this)">🔊 Ouvir</button></h2>'
    + '<p style="color:#6b5b8c;font-size:.78rem;margin-bottom:6px"><strong>Faixa etária:</strong> 6 a 12 anos | <strong>Duração:</strong> 50 min | <strong>Tema:</strong> Acolhimento, Empatia e Convivência Cristã</p>'
    + '<div style="background:rgba(124,92,191,.12);border-radius:12px;padding:8px 12px;margin:8px 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;border:1px solid rgba(124,92,191,.25)">'
    + '  <div><strong>📄 Material de Atividades para Imprimir:</strong> Folha A4 com caça-palavras, história e árvore das virtudes.</div>'
    + '  <div><a href="atividades-bullying.html" target="_blank" class="btn btn-sm btn-p" style="text-decoration:none">🖨️ Abrir / Imprimir Atividades</a> '
    + '  <a href="pdfs/bullying-respeito-empatia.pdf" download class="btn btn-sm btn-s" style="text-decoration:none">📥 Baixar PDF</a></div>'
    + '</div>'
    + '<h3>🎯 Objetivos Pedagógicos e Doutrinários</h3>'
    + '<p>• Compreender que todos os seres humanos são espíritos criados por Deus com igual valor e dignidade.<br>'
    + '• Diferenciar claramente uma brincadeira sadia (onde todos se divertem) de uma atitude de bullying e desrespeito.<br>'
    + '• Desenvolver a empatia através da <strong>Regra de Ouro</strong> de Jesus (Mateus 7:12).<br>'
    + '• Saber como agir diante de situações de desrespeito: não se calar, não pagar o mal com o mal, proteger o amigo e dialogar com os adultos de confiança.</p>'
    + '<h3>🕊️ 1. Acolhida e Prece Inicial (5 min)</h3>'
    + '<p>Receber as crianças com alegria e afeto. Fazer uma prece suave agradecendo a Deus pelos amigos e pedindo aos bons espíritos que inspirem corações cheios de paz e harmonia.</p>'
    + '<h3>🍎 2. Sensibilização: A Dinâmica do Coração de Papel (5 min)</h3>'
    + '<p>Mostre um coração bonito de papel vermelho. Peça às crianças que falem palavras duras ou apelidos ruins que já ouviram. A cada palavra dita, amasse um pedacinho do coração. Ao final, desamasse o papel e peça para olharem as marcas. Explique: <em>"Mesmo desamassando, ficam marcas. As palavras têm força! Mas o amor, o perdão e o carinho colocam remédio no coração."</em></p>'
    + '<h3>📖 3. Contação da História Interativa (15 min)</h3>'
    + '<p>Contar a história de Lucas e Léo ("A Ponte de Luz e as Palavras que Curam"). Use os emojis como apoio visual: 🕊️ paz, 👓 óculos/respeito, 🎨 talentos, 😢 tristeza do bullying, 🤝 mão estendida da amizade.</p>'
    + '<h3>💬 4. Roda de Conversa: Na Luz do Evangelho (10 min)</h3>'
    + '<p>Perguntas para meditar em grupo:<br>'
    + '• O que você sentiria se fosse o Léo no recreio?<br>'
    + '• Por que a atitude de Lucas foi corajosa e cristã?<br>'
    + '• Por que colocar apelidos e excluir não é brincadeira?<br>'
    + '• Como Allan Kardec explica que somos todos irmãos perante Deus?</p>'
    + '<h3>🎨 5. Atividade Prática / Folha de Impressão (10 min)</h3>'
    + '<p>Distribuir a Folha de Atividades (ou realizar o Caça-Palavras e a Árvore das Boas Palavras na sala). Cada criança escolhe uma palavra bondosa para dizer a um colega.</p>'
    + '<h3>🌟 6. Fixação: O Lema dos Amigos da Paz (3 min)</h3>'
    + '<p>Repetir juntos: <em>"Nossas palavras curam! Nossas mãos ajudam! Onde houver tristeza, nós levaremos o amor de Jesus!"</em></p>'
    + '<h3>🙏 7. Encerramento e Prece Final (2 min)</h3>'
    + '<p>Oração de agradecimento e compromisso de paz para a semana na escola e em casa.</p>'
    + '<div class="dica">💡 Dica ao evangelizador: Incentive as crianças a serem "Embaixadores da Amizade" no recreio da escola, sempre convidando quem estiver sozinho para brincar.</div>';

  var brincHtml = '<h2>🎪 Brincadeiras e Dinâmicas: Respeito e Empatia <button class="tts-btn-ouvir" onclick="ttsLer(\'brincadeiras\',this)">🔊 Ouvir</button></h2>'
    + '<h3>1️⃣ A Teia da Amizade e dos Elogios (💡 6-12 anos, 15 min)</h3>'
    + '<p><strong>🎯 Aprende:</strong> Reconhecer as qualidades dos amigos e valorizar a união fraternal.</p>'
    + '<p><strong>📦 Material:</strong> Um novelo de lã ou barbante colorido.</p>'
    + '<p><strong>🎮 Como brincar:</strong> Em círculo, o evangelizador segura a ponta do novelo e joga o rolo para uma criança, dizendo um elogio sincero sobre ela (ex.: "Eu admiro a sua alegria!"). A criança segura um pedaço do fio e joga para outro colega com outro elogio. No final, uma linda teia colorida une todos. Mostre: "Se alguém se soltar, a teia cai. Quando todos nos apoiamos, ninguém fica sozinho!"</p>'
    + '<h3>2️⃣ O Semáforo da Empatia (💡 5-11 anos, 15 min)</h3>'
    + '<p><strong>🎯 Aprende:</strong> Identificar atitudes amigas (Verde), situações de atenção (Amarelo) e desrespeito/bullying (Vermelho).</p>'
    + '<p><strong>📦 Material:</strong> Círculos de papel verde, amarelo e vermelho (ou cartões coloridos).</p>'
    + '<p><strong>🎮 Como brincar:</strong> O facilitador lê situações cotidianas: "Convidar quem está sozinho para o lanche", "Rir quando alguém cai e se machuca", "Fazer apelido maldoso", "Emprestar o lápis com carinho". As crianças levantam o cartão correspondente e explicam o porquê com base no amor cristão.</p>'
    + '<h3>3️⃣ O Escudo Invisível de Luz (💡 6-12 anos, 10 min)</h3>'
    + '<p><strong>🎯 Aprende:</strong> Não absorver ofensas, manter a serenidade e buscar ajuda de adultos de confiança.</p>'
    + '<p><strong>📦 Material:</strong> Nenhum.</p>'
    + '<p><strong>🎮 Como brincar:</strong> Ensinar uma técnica prática: quando alguém disser algo feio, a criança respira fundo três vezes, coloca a mão no coração imaginando um escudo dourado de luz de Jesus que não deixa a ofensa entrar na sua alma, responde com calma e procura a professora ou o evangelizador. O valor de cada um vem de Deus, nunca de palavras alheias!</p>'
    + '<h3>4️⃣ A Oficina do Abraço e das Boas Palavras (💡 4-10 anos, 15 min)</h3>'
    + '<p><strong>🎯 Aprende:</strong> Praticar a gentileza e o acolhimento fraterno no dia a dia.</p>'
    + '<p><strong>📦 Material:</strong> Cartões com mensagens curtas desenhadas.</p>'
    + '<p><strong>🎮 Como brincar:</strong> Cada criança sorteia uma missão de amor para praticar: dar um abraço amigo, dizer um obrigado caloroso, ajudar a guardar os materiais ou elogiar um desenho do colega.</p>';

  var revHtml = '<h2>📚 Revisão Doutrinária: Bullying, Respeito e Empatia <button class="tts-btn-ouvir" onclick="ttsLer(\'revisao\',this)">🔊 Ouvir</button></h2>'
    + '<h3>❓ O que é Bullying?</h3>'
    + '<p>Bullying é a prática repetida de ofensas, zombarias, apelidos maldosos, exclusão ou agressões contra alguém. <strong>Não é brincadeira!</strong> Brincadeira só é boa quando todos riem e se sentem felizes. Quando alguém chora, se isola ou sofre, é falta de amor e precisa parar imediatamente.</p>'
    + '<h3>🌟 A Regra de Ouro de Jesus</h3>'
    + '<p>Jesus nos deu a fórmula perfeita de convivência no Sermão da Montanha: <em>"Tudo o que quereis que os homens vos façam, fazei-o vós também a eles"</em> (Mateus 7:12). Antes de falar ou agir, basta nos perguntarmos: <strong>"Eu gostaria que fizessem isso comigo?"</strong> Se a resposta for não, não fazemos com o outro.</p>'
    + '<h3>🕊️ A Visão da Doutrina Espírita</h3>'
    + '<p>• <strong>Somos todos espíritos imortais:</strong> Criados por Deus com o mesmo destino de evolução e felicidade. Nenhum espírito é superior a outro em sua origem.<br>'
    + '• <strong>A beleza das diferenças:</strong> Cada um traz experiências de vidas passadas, habilidades diversas e desafios próprios. As diferenças existem para aprendermos a nos ajudar mutuamente.<br>'
    + '• <strong>Lei de Causa e Efeito:</strong> Tudo o que pensamos, falamos e fazemos emite energias espirituais. Quem semeia ofensas colhe inquietação; quem semeia paz colhe luz.<br>'
    + '• <strong>Caridade moral:</strong> Allan Kardec ensina no Evangelho que a verdadeira caridade consiste em ser benevolente para com todos, indulgente com as fraquezas alheias e perdoar as ofensas.</p>'
    + '<h3>🛡️ O que fazer se você sofrer ou presenciar bullying?</h3>'
    + '<p>1. <strong>Não acredite nas ofensas:</strong> Você é uma centelha divina, preciosa e cheia de luz.<br>'
    + '2. <strong>Não responda com violência:</strong> A violência só aumenta a discórdia. Seja firme, sereno e pacífico.<br>'
    + '3. <strong>Avise imediatamente os adultos:</strong> Conte para seus pais, professores e evangelizadores. Pedir ajuda é um ato de coragem e sabedoria!<br>'
    + '4. <strong>Seja o amigo que protege:</strong> Nunca ria de ofensas. Se vir alguém isolado, seja sua ponte de carinho!</p>';

  var recList = [
    { t: '📄 Folha de Atividades para Imprimir — Empatia e Não ao Bullying (A4)', u: 'atividades-bullying.html', d: 'Página formatada para impressão com história, caça-palavras, termômetro da empatia e árvore das virtudes.' },
    { t: '📥 Baixar PDF Direto — Atividades de Empatia e Respeito', u: 'pdfs/bullying-respeito-empatia.pdf', d: 'Arquivo PDF oficial pronto para baixar e imprimir para a turminha.' },
    { t: 'Vídeo Infantil: O Poder da Empatia e da Amizade', u: 'https://www.youtube.com/results?search_query=empatia+infantil+desenho+animado', d: 'Animações pedagógicas infantis sobre respeito às diferenças e amizade.' },
    { t: 'Canal Passatempo Espírita — Aulas de Fraternidade', u: 'https://www.passatempoespirita.com.br/aulas/', d: 'Subsídios pedagógicos para evangelizadores e pais espíritas.' },
    { t: 'Canal Seara do Mestre — Valores e Convivência', u: 'https://www.searadomestre.com.br/evangelizacao/', d: 'Aulas e dinâmicas ricas para a infância e juventude.' }
  ];

  temaContent[idx] = {
    eb: '🕊️❤️🤝🛡️🌟🌸',
    hist: histHtml,
    aula: aulaHtml,
    brinc: brincHtml,
    rev: revHtml,
    rec: recList
  };

  velhaTemas[idx] = { x: 'Amor ❤️', o: 'Paz 🕊️', xt: '❤️', ot: '🕊️' };

  forcaTemas[idx] = [
    { p: 'EMPATIA', d: 'Colocar-se no lugar do amigo' },
    { p: 'RESPEITO', d: 'Valorizar cada pessoa com carinho' },
    { p: 'AMIZADE', d: 'Laço puro que une os corações' },
    { p: 'ACOLHER', d: 'Abrir os braços para quem precisa' },
    { p: 'BONDADE', d: 'Fazer o bem sem esperar nada em troca' },
    { p: 'PERDAO', d: 'Limpar a mágoa do coração' },
    { p: 'JESUS', d: 'O Mestre do amor e da paz' },
    { p: 'PAZ', d: 'Tranquilidade e harmonia' },
    { p: 'UNIAO', d: 'Caminharmos juntos fraternalmente' },
    { p: 'CARIDADE', d: 'O amor colocado em prática' },
    { p: 'CORAGEM', d: 'Defender o bem e a verdade' },
    { p: 'ESCUTA', d: 'Ouvir o colega com atenção e carinho' }
  ];

  memoriaTemas[idx] = [
    { e: '🕊️', t: 'Paz' },
    { e: '🤝', t: 'Amizade' },
    { e: '❤️', t: 'Amor' },
    { e: '🛡️', t: 'Proteção' },
    { e: '🌟', t: 'Luz' },
    { e: '🌸', t: 'Gentileza' },
    { e: '👂', t: 'Escuta' },
    { e: '🤗', t: 'Abraço' },
    { e: '🌈', t: 'Esperança' },
    { e: '🙏', t: 'Prece' },
    { e: '🌳', t: 'Bons Frutos' },
    { e: '✨', t: 'Harmonia' }
  ];

  cacaTemas[idx] = [
    'EMPATIA', 'RESPEITO', 'AMIZADE', 'ACOLHER',
    'BONDADE', 'PERDAO', 'AMOR', 'PAZ',
    'UNIAO', 'JESUS', 'ESCUTA', 'CARINHO'
  ];

  qdTitulos[idx] = 'Amigos da Paz e do Respeito';
  qdConteudo[idx] = [
    { e: ['🧒', '😢', '💔'], f: 'Estou tao sozinho...', l: 'Léo triste no recreio com apelidos' },
    { e: ['👦', '👀', '💭'], f: 'O que Jesus faria?', l: 'Lucas lembra da evangelização' },
    { e: ['👦', '🤝', '😊'], f: 'Vem lanchar comigo!', l: 'Lucas acolhe Léo com carinho' },
    { e: ['👦', '🕊️', '🛡️'], f: 'Apelido machuca!', l: 'Lucas defende com calma e respeito' },
    { e: ['👥', '🤝', '🌟'], f: 'Desculpe, vamos brincar!', l: 'Os colegas reconhecem o erro' },
    { e: ['👫', '🚀', '💖'], f: 'Somos todos amigos!', l: 'Todos brincam juntos em harmonia' }
  ];

  lpTemas[idx] = [];

  var quizBullying = [
    {
      q: 'O que é a Regra de Ouro ensinada por Jesus?',
      o: [
        'Fazer aos outros o que gostaríamos que fizessem a nós',
        'Zombar de quem é diferente',
        'Ficar quieto quando alguém é injustiçado',
        'Pagar o mal com o mal'
      ],
      r: 0,
      e: 'Jesus nos ensinou: "Tudo quanto quereis que os homens vos façam, fazei-lho vós também" (Mateus 7:12).'
    },
    {
      q: 'Qual é a diferença entre uma brincadeira sadia e o bullying?',
      o: [
        'Não há diferença, tudo é brincadeira',
        'Brincadeira sadia só é boa quando todos se divertem; se machuca ou entristece, não é brincadeira',
        'Bullying é apenas quando há brigas físicas',
        'Brincadeira só vale para quem é mais forte'
      ],
      r: 1,
      e: 'Uma brincadeira de verdade traz risos e alegria para todos. Quando humilha ou isola alguém, é desrespeito e deve cessar.'
    },
    {
      q: 'Segundo a Doutrina Espírita, como Deus nos criou?',
      o: [
        'Criou alguns espíritos para mandar e outros para sofrer',
        'Criou todos simples e ignorantes, como irmãos a caminho da evolução e do amor',
        'Criou apenas algumas pessoas para serem especiais',
        'Criou as pessoas para disputarem entre si'
      ],
      r: 1,
      e: 'Para o Espiritismo, somos todos filhos do mesmo Pai Divino, espíritos imortais que aprendem e evoluem juntos.'
    },
    {
      q: 'O que você deve fazer ao ver um coleguinha sofrendo bullying ou isolado?',
      o: [
        'Rir junto com os zombadores',
        'Fingir que não viu e sair correndo',
        'Acolher o amigo, convidá-lo para brincar e avisar um adulto de confiança',
        'Bater em quem está zombando'
      ],
      r: 2,
      e: 'A caridade cristã nos pede para estender a mão a quem sofre e buscar a orientação de professores, pais ou evangelizadores.'
    },
    {
      q: 'Como devemos agir com a pessoa que pratica o bullying?',
      o: [
        'Vingar-se fazendo o mesmo com ela',
        'Colocar limites com firmeza e respeito, buscar ajuda e orar por ela com amor',
        'Desprezá-la para sempre',
        'Incentivar os outros a brigarem com ela'
      ],
      r: 1,
      e: 'Jesus ensinou a orar por quem erra. Quem agride costuma carregar dor e carência interior, precisando de limites justos e bons exemplos.'
    }
  ];

  if (typeof quizPerguntasTema !== 'undefined') {
    var temaQuizTopic = (window.__temaQuizTopic = window.__temaQuizTopic || {});
    var topico = quizPerguntasTema.length;
    quizPerguntasTema.push(quizBullying);
    temaQuizTopic[idx] = topico;

    var picker = document.getElementById('quiz-tema');
    if (picker) {
      var mistoBtn = picker.querySelector('.dif-btn[data-t="99"]');
      var btn = '<button class="dif-btn" data-t="' + topico + '" onclick="setQuizTema(' + topico + ')">🕊️ Não ao Bullying</button>';
      if (mistoBtn) mistoBtn.insertAdjacentHTML('beforebegin', btn);
      else picker.insertAdjacentHTML('beforeend', btn);
    }
  }
})();
