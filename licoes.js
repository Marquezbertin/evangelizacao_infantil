// ===== LICOES.JS — Módulo de Lições da Evangelização Infantil =====
// Segue o padrão do projeto (cards ricos, TTS "Ouvir", história/reflexão/atividade/versículo).
// Fontes: Bíblia do Caminho (bibliadocaminho.com), Seara do Mestre e "Quem Mexeu no Meu Queijo" (Spencer Johnson).

var licoes=[];

// ---------- 1. A Ovelha Perdida ----------
licoes.push({
  titulo:'A Ovelha Perdida',
  emoji:'🐑', emoji2:'🧑‍🌾',
  faixa:'5 a 12 anos', tema:'Parábolas de Jesus',
  ref:'Mateus 18,12-14 e João 10,11',
  historia:`<p>Um pastor tinha um grande rebanho de ovelhas — eram cem! Ele cuidava de cada uma com carinho: levava-as a bons pastos, a águas frescas e, toda tarde, as contava para ver se nenhuma faltava.</p>
  <p>Certa vez, uma ovelhinha curiosa afastou-se demais, distraída com as borboletas, e se perdeu. Ao contar o rebanho, o pastor notou: faltava uma! Sem hesitar, ele saiu a procurá-la por rochas, barrancos e caminhos. Encontrou-a ferida e assustada, embaixo de uma pedra. Pegou-a no colo, curou sua patinha com um pedaço de sua própria túnica e a levou de volta, feliz, para o rebanho.</p>
  <p>Jesus contou essa história para ensinar quem é o Bom Pastor: <strong>Ele mesmo</strong>. "Eu sou o bom pastor. O bom pastor dá a vida por suas ovelhas" (João 10,11). Cada criança é uma ovelhinha preciosa que Jesus conhece pelo nome.</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Assim como o pastor não desiste de nenhuma ovelha, Deus e Jesus jamais desistem de nós. Quando nos perdemos pelo caminho errado (mentira, birra, egoísmo), o Bom Pastor vai nos buscar. E nós também podemos ser "pastores" cuidando dos amiguinhos que se sentem sozinhos.</p>`,
  atividade:`<h3>🎯 Brincadeira: O Bom Pastor</h3>
  <p><strong>Idade:</strong> 5-10 anos • <strong>Material:</strong> uma ovelhinha de pelúcia.</p>
  <p>Esconda a ovelha na sala (ou na sala ao lado). As crianças são o "bom pastor" e devem procurá-la cantando: <em>"Achou a ovelhinha chorando / E no colo ele a colocou..."</em>. Quem encontra vira o próximo a esconder. Converse: como a ovelha se sentiu ao ser encontrada? E o pastor?</p>`,
  versiculo:`"Eu sou o bom pastor. O bom pastor dá a vida por suas ovelhas." — João 10,11`
});

// ---------- 2. O Bom Samaritano ----------
licoes.push({
  titulo:'O Bom Samaritano',
  emoji:'🚑', emoji2:'🤝',
  faixa:'6 a 12 anos', tema:'Caridade e Amor ao Próximo',
  ref:'Lucas 10,25-37',
  historia:`<p>Um homem descia de Jerusalém para Jericó quando foi assaltado e deixado meio morto à beira da estrada. Um sacerdote passou, viu e seguiu adiante. Um levita também passou e não ajudou. Mas um samaritano — alguém que os outros desprezavam — parou, encheu-se de compaixão, cuidou dos ferimentos com azeite e vinho, levou-o num animal para uma hospedaria e pagou pelo seu cuidado.</p>
  <p>Jesus perguntou: "Qual desses foi o próximo do homem?" E concluiu: <strong>"Vai e faz tu também o mesmo."</strong></p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> O próximo não é só quem mora perto ou pensa igual a nós. É <em>qualquer pessoa que precisa de nós</em>. Caridade, segundo O Evangelho Segundo o Espiritismo (cap. 15), é amor em ação: benevolência, indulgência e perdão. "Fora da caridade não há salvação."</p>`,
  atividade:`<h3>🎯 Brincadeira: Caixa da Caridade</h3>
  <p><strong>Idade:</strong> 5-12 anos • <strong>Material:</strong> caixa decorada e cartões com situações (ex.: "um colega caiu", "alguém está triste").</p>
  <p>Cada criança sorteia um cartão e mostra o que faria para ajudar. As demais comentam. Depois, dramatizem a parábola: um caído, dois que passam e um que ajuda.</p>`,
  versiculo:`"Amarás o teu próximo como a ti mesmo." — Lucas 10,27`
});

// ---------- 3. O Amigo Inoportuno ----------
licoes.push({
  titulo:'O Amigo Inoportuno',
  emoji:'🔔', emoji2:'🍞',
  faixa:'6 a 12 anos', tema:'Oração e Perseverança',
  ref:'Lucas 11,5-13',
  historia:`<p>Conta Jesus: um amigo bate à porta do vizinho no meio da noite. "Empresta-me três pães, pois um amigo chegou e não tenho o que dar-lhe!" O vizinho, já deitado, resiste: "Não me incomodes!" Mas o amigo bate, insiste e torna a bater, confiando que será atendido. Por causa da sua <strong>persistência</strong>, o vizinho levanta-se e dá-lhe o que precisa.</p>
  <p>Jesus ensina: se até um amigo cansado atende por insistência, quanto mais nosso Pai do Céu dará o que é bom aos que O buscam!</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Orar não é pedir "por telefone" e desistir. É buscar a Deus com confiança e perseverança, como Isaías na história. A prece nos aproxima de Deus e nos enche de paz. Allan Kardec nos ensina que a prece atrai bons Espíritos e nos fortalece para o bem.</p>`,
  atividade:`<h3>🎯 Brincadeira: Batendo à Porta de Deus</h3>
  <p><strong>Idade:</strong> 5-10 anos • <strong>Material:</strong> uma portinha de papelão.</p>
  <p>Uma criança bate e pede; a outra abre e entrega um "pãozinho" (bolinha de papel). Incentive a bater várias vezes, insistindo — depois relate: o que pedimos a Deus com confiança? (ajuda, coragem, paz).</p>`,
  versiculo:`"Buscai, e achareis; batei, e abrir-se-vos-á." — Lucas 11,9`
});

// ---------- 4. O Semeador ----------
licoes.push({
  titulo:'O Semeador',
  emoji:'🌱', emoji2:'🌾',
  faixa:'7 a 13 anos', tema:'Parábolas de Jesus',
  ref:'Marcos 4,1-9 e 4,14-20',
  historia:`<p>Jesus contou: um semeador saiu a semear. Algumas sementes caíram à beira do caminho e os pássaros as comeram. Outras caíram em pedras, brotaram rápido, mas secaram. Outras caíram no meio dos espinhos e foram sufocadas. Mas as que caíram em <strong>boa terra</strong> deram fruto: trinta, sessenta, cem por um!</p>
  <p>A explicação de Jesus: a semente é a Palavra de Deus, e os tipos de terra somos nós. O coração aberto e bondoso é a "boa terra" onde a lição de Jesus cresce.</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Nosso coração é como a terra. Se está cheio de raiva ou distração (pedras e espinhos), a palavra de Deus não cresce. Se cultivamos paciência, atenção e amor, cada ensinamento vira fruto bom em nossas vidas. Reencarnamos para melhorar nossa "terra" a cada dia.</p>`,
  atividade:`<h3>🎯 Brincadeira: Plantando Palavras</h3>
  <p><strong>Idade:</strong> 6-12 anos • <strong>Material:</strong> copinhos, terra e sementes de feijão.</p>
  <p>Cada criança planta uma semente e a rega. Converse: "Que tipo de terra é o meu coração hoje?" Pode levar o copo para casa e observar o crescimento, lembrando de regar também o coração com orações e boas ações.</p>`,
  versiculo:`"Aquele que foi semeado em boa terra é o que ouve a palavra e a entende." — Mateus 13,23`
});

// ---------- 5. O Grão de Mostarda ----------
licoes.push({
  titulo:'O Grão de Mostarda',
  emoji:'🌿', emoji2:'🌳',
  faixa:'6 a 12 anos', tema:'Fé que Cresce',
  ref:'Marcos 4,30-32',
  historia:`<p>Jesus perguntou: "A que compararemos o Reino de Deus?" Ele é como um grão de mostarda — a menor de todas as sementes. Mas quando plantado, cresce e vira a maior das hortaliças, com galhos onde os passarinhos pousam.</p>
  <p>Assim acontece com a nossa fé: começamos pequenos, mas se a cuidarmos, ela cresce e abriga muita gente ao nosso redor!</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Não precisamos de uma fé gigante para começar. Uma pequenina oração diária, um pequeno gesto de bondade, já é uma semente que Deus faz crescer. A Lei de Causa e Efeito garante: o bem que plantamos sempre floresce.</p>`,
  atividade:`<h3>🎯 Brincadeira: Da Semente à Árvore</h3>
  <p><strong>Idade:</strong> 5-11 anos • <strong>Material:</strong> papel, lápis de cor.</p>
  <p>Cada um desenha uma árvore enorme e, nela, escreve/desenha atitudes boas que quer praticar (ajudar em casa, perdoar, partilhar). Pendure os desenhos na "floresta da turma".</p>`,
  versiculo:`"É como um grão de mostarda... que se faz árvore." — Marcos 4,31-32`
});

// ---------- 6. Jesus Abençoa as Crianças ----------
licoes.push({
  titulo:'Jesus Abençoa as Crianças',
  emoji:'👧', emoji2:'🤲',
  faixa:'4 a 10 anos', tema:'Valor da Criança',
  ref:'Marcos 10,13-16',
  historia:`<p>Alguns pais trouxeram crianças a Jesus para que Ele as abençoasse. Os discípulos tentaram afastá-los: "Deixai os pequeninos!" Mas Jesus ficou indignado e disse: <strong>"Deixai vir a mim as criancinhas; não as proibais, porque delas é o Reino de Deus."</strong> E abraçou-as, impôs as mãos sobre elas e as abençoou.</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Para Jesus, a criança é sagrada. Emmanuel diz que "a evangelização da infância é o processo da emancipação infantil para a compreensão da justiça e do bem". Cada criança é um espírito em aprendizado, merecedor de amor, respeito e cuidado. A Casa Bezerra de Menezes acolhe você com esse amor!</p>`,
  atividade:`<h3>🎯 Brincadeira: Abraço de Jesus</h3>
  <p><strong>Idade:</strong> 4-8 anos • <strong>Material:</strong> nenhum.</p>
  <p>Sentados em roda, passem um "abraço de Jesus" (abraçar o colega ao lado com carinho). Cada um diz uma qualidade de uma criança próxima. Termine com a prece: "Jesus, abençoa cada criancinha aqui."</p>`,
  versiculo:`"Deixai vir a mim as criancinhas, porque delas é o Reino de Deus." — Marcos 10,14`
});

// ---------- 7. A Tempestade Acalmada ----------
licoes.push({
  titulo:'A Tempestade Acalmada',
  emoji:'⛵', emoji2:'🌊',
  faixa:'6 a 12 anos', tema:'Fé nas Dificuldades',
  ref:'Marcos 4,35-41',
  historia:`<p>Jesus e os discípulos entraram num barco. Cansado, Jesus dormia na popa. De repente, levantou-se uma grande tempestade; as ondas batiam no barco e os discípulos, aterrorizados, acordaram-nO: "Mestre, não te importas que pereçamos?!" Jesus levantou-se, repreendeu o vento e disse ao mar: <strong>"Aquieta-te, cala-te!"</strong> E fez-se uma grande bonança.</p>
  <p>E perguntou-lhes: "Por que sois tão tímidos? Ainda não tendes fé?"</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> As "tempestades" são os medos e problemas da vida (uma briga, uma nota baixa, uma perda). Jesus dorme em nosso coração, mas acorda quando O chamamos em oração. Com fé e confiança em Deus, a tempestade acalma. Não estamos sozinhos: bons Espíritos nos rodeiam.</p>`,
  atividade:`<h3>🎯 Brincadeira: Barco na Tempestade</h3>
  <p><strong>Idade:</strong> 5-11 anos • <strong>Material:</strong> barquinho de papel, bacia com água.</p>
  <p>Soprem "ventos" forte na água e balancem o barco. Converse: o que nos assusta? Depois, façam "Aquieta-te!" e parem. Cada um pede a Jesus ajuda numa tempestade da sua vida.</p>`,
  versiculo:`"Por que sois tímidos? Ainda não tendes fé?" — Marcos 4,40`
});

// ---------- 8. O Filho Pródigo ----------
licoes.push({
  titulo:'O Filho Pródigo',
  emoji:'🏠', emoji2:'🤗',
  faixa:'7 a 13 anos', tema:'Perdão e Amor do Pai',
  ref:'Lucas 15,11-32',
  historia:`<p>Um filho pediu sua parte da herança e foi para longe viver de modo errado, gastando tudo. Quando passou fome, percebeu: "Até os empregados de meu pai têm comida!" Decidiu voltar, arrependido, para pedir perdão. Mas, de longe, o pai o viu, correu ao seu encontro, abraçou-o e fez uma festa: "Este meu filho estava morto e reviveu!"</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Deus é este Pai amoroso. Quando erramos, não precisa ter medo Dele — basta arrepender-nos e tentar de novo. O arrependimento e a reparação apagam o erro. Cada volta para o bem é motivo de alegria no Céu. A reencarnação é essa chance de recomeçar.</p>`,
  atividade:`<h3>🎯 Brincadeira: O Abraço do Perdão</h3>
  <p><strong>Idade:</strong> 6-12 anos • <strong>Material:</strong> nenhum.</p>
  <p>Em duplas, uma criança faz o "filho que errou" (carinha triste) e a outra faz o "pai" que corre e abraça. Troquem os papéis. Conversem: como é pedir desculpas e como é perdoar?</p>`,
  versiculo:`"Este meu filho estava morto e reviveu; estava perdido e foi achado." — Lucas 15,24`
});

// ---------- 9. As Bem-aventuranças ----------
licoes.push({
  titulo:'As Bem-aventuranças',
  emoji:'🕊️', emoji2:'💛',
  faixa:'8 a 14 anos', tema:'Caminhos da Felicidade',
  ref:'Mateus 5,3-12',
  historia:`<p>No Sermão da Montanha, Jesus ensinou quem é verdadeiramente feliz:</p>
  <ul>
  <li>🕊️ <strong>Bem-aventurados os pobres de espírito</strong> (os humildes) — deles é o Reino.</li>
  <li>💧 <strong>Os mansos</strong> — possuirão a terra.</li>
  <li>😢 <strong>Os que choram</strong> — serão consolados.</li>
  <li>⚖️ <strong>Os que têm fome e sede de justiça</strong> — serão fartos.</li>
  <li>🤝 <strong>Os misericordiosos</strong> — alcançarão misericórdia.</li>
  <li>❤️ <strong>Os puros de coração</strong> — verão a Deus.</li>
  <li>🕊️ <strong>Os pacificadores</strong> — serão chamados filhos de Deus.</li>
  </ul>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Jesus mostra que a verdadeira felicidade não está em ter muitas coisas, mas em ser bom, manso, pacífico e puro de coração. Quem faz o bem e espalha paz já é "filho de Deus" aqui na Terra. A felicidade real vem de dentro!</p>`,
  atividade:`<h3>🎯 Brincadeira: Caça-Bem-aventurança</h3>
  <p><strong>Idade:</strong> 8-14 anos • <strong>Material:</strong> cartões com as 7 frases.</p>
  <p>Espalhe os cartões pela sala. Ao som de música, as crianças caminham; quando a música para, cada uma pega o cartão mais próximo e lê para o grupo. Converse: qual delas você quer praticar hoje?</p>`,
  versiculo:`"Bem-aventurados os pacificadores, porque serão chamados filhos de Deus." — Mateus 5,9`
});

// ---------- 10. Davi e Golias ----------
licoes.push({
  titulo:'Davi e Golias',
  emoji:'🪨', emoji2:'⚔️',
  faixa:'6 a 12 anos', tema:'Coragem com Deus',
  ref:'1 Samuel 17',
  historia:`<p>O gigante Golias desafiava o exército de Israel. Todos tinham medo. Davi, um jovem pastor, disse: "Não temais! Virei lutar!" Com sua funda e cinco pedrinhas, e confiando em Deus, acertou Golias na testa. O gigante caiu. A coragem de um menino venceu o medo de um povo!</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Nossos "gigantes" são o bullying, a timidez, a tentação de mentir. Como Davi, não enfrentamos sozinhos: Deus nos dá força. A fé transforma medo em coragem. Cada criança pode ser um "Davi" que vence o mal com o bem.</p>`,
  atividade:`<h3>🎯 Brincadeira: Pedrinhas da Coragem</h3>
  <p><strong>Idade:</strong> 6-12 anos • <strong>Material:</strong> pedrinhas pintadas.</p>
  <p>Cada criança pinta uma pedrinha escrevendo um "gigante" que quer vencer (ex.: "medo de falar"). Guarde-a como lembrete de que Deus dá coragem. Depois, façam uma "funda" de elástico para brincar de mirar alvos.</p>`,
  versiculo:`"O Senhor livra dos leões e dos ursos; ele me livrará das mãos de Golias." — 1 Samuel 17,37`
});

// ---------- 11. Daniel na Cova dos Leões ----------
licoes.push({
  titulo:'Daniel na Cova dos Leões',
  emoji:'🦁', emoji2:'🙏',
  faixa:'6 a 12 anos', tema:'Fé e Confiança',
  ref:'Daniel 6',
  historia:`<p>Daniel orava a Deus três vezes ao dia, mesmo quando um decreto proibiu orar. Por isso, foi jogado na cova dos leões. Mas Deus enviou um anjo que fechou a boca dos leões, e Daniel amanheceu ileso! O rei, vendo o milagre, mandou que todos respeitassem o Deus de Daniel.</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Daniel manteve sua fé mesmo com perigo. Sua oração e sua consciência limpa o protegeram. Quando fazemos o bem e oramos com confiança, atraímos a proteção de bons Espíritos. Nada nos separa do amor de Deus.</p>`,
  atividade:`<h3>🎯 Brincadeira: Leão Manso</h3>
  <p><strong>Idade:</strong> 5-10 anos • <strong>Material:</strong> uma máscara de leão de papel.</p>
  <p>Uma criança é o "leão" que fica deitado; as outras passam cantando uma oração. O leão não pode "atacar" — ele está manso pelo poder da oração. Converse: em que momento você pediu proteção a Deus?</p>`,
  versiculo:`"O meu Deus enviou o seu anjo e fechou a boca dos leões." — Daniel 6,22`
});

// ---------- Lições do livro "Quem Mexeu no Meu Queijo" ----------
// Personagens: Hem e Haw (homens-rato) e Sniff e Scurry (camundongos) vivem num labirinto
// procurando "queijo" (o que nos faz felizes). Quando o queijo acaba, aprendem lições de mudança.

// ---------- 12. O Queijo Se Move (Aceitar Mudanças) ----------
licoes.push({
  titulo:'O Queijo Se Move',
  emoji:'🧀', emoji2:'🔄',
  faixa:'6 a 13 anos', tema:'Mudança e Adaptação',
  ref:'Baseado em "Quem Mexeu no Meu Queijo?" (Spencer Johnson)',
  historia:`<p>No labirinto, Hem, Haw, Sniff e Scurry tinham uma pilha de queijo que adoravam. Um dia, o queijo <strong>acabou</strong>. Sniff e Scurry, que já desconfiavam, saíram logo a procurar mais. Mas Hem e Haw ficaram bravos e assustados: "Quem mexeu no meu queijo?!" Recusavam-se a aceitar a mudança.</p>
  <p>Haw, depois de muito tempo parado, percebeu: <em>"Se você não muda, pode ficar obsoleto."</em> E deu o primeiro passo para encontrar novo queijo.</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> Na vida, muitas coisas mudam: uma mudança de casa, um amigo que se afasta, uma rotina nova. Resistir à mudança sofra; aceitá-la com fé abre portas. Deus renova sempre o mundo — "Eis que faço novas todas as coisas" (Apocalipse 21,5). Mudar faz parte de evoluir.</p>`,
  atividade:`<h3>🎯 Brincadeira: Caça ao Novo Queijo</h3>
  <p><strong>Idade:</strong> 6-12 anos • <strong>Material:</strong> esconde-esconde com um "queijo" (bolinha amarela).</p>
  <p>Esconda o queijo; as crianças, como Haw, saem do "cantinho velho" e exploram o labirinto (sala) até achá-lo. Converse: como foi sair da zona de conforto?</p>`,
  versiculo:`"Eis que faço novas todas as coisas." — Apocalipse 21,5`
});

// ---------- 13. Vença o Medo ----------
licoes.push({
  titulo:'Vencendo o Medo',
  emoji:'🐭', emoji2:'💪',
  faixa:'6 a 13 anos', tema:'Coragem e Fé',
  ref:'"Quem Mexeu no Meu Queijo?" — parede: "Quando você supera o medo, sente-se livre"',
  historia:`<p>Haw tinha medo de sair e não achar novo queijo. Mas escreveu na parede do labirinto: <strong>"Quando você supera o medo, sente-se livre."</strong> Ao dar o primeiro passo, sentiu o coração leve. Cada passo afastava o medo, e a cada descoberta ele se animava mais.</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> O medo é como uma sombra que some quando acendemos a luz da fé. O salmista diz: "O Senhor é o meu pastor, nada me faltará" (Salmo 23). Com Deus, não precisamos ter medo do desconhecido — Ele guia nossos passos.</p>`,
  atividade:`<h3>🎯 Brincadeira: Passo da Coragem</h3>
  <p><strong>Idade:</strong> 5-12 anos • <strong>Material:</strong> nenhum.</p>
  <p>Em roda, cada um dá um "passo da coragem" para frente e diz algo que teme e em que pede a ajuda de Jesus. Ao dizer, todos aplaudem: "Com Deus, você consegue!"</p>`,
  versiculo:`"Não temas, porque eu sou contigo." — Isaías 41,10`
});

// ---------- 14. Mova-se em Nova Direção ----------
licoes.push({
  titulo:'Mova-se em Nova Direção',
  emoji:'🏃', emoji2:'🧭',
  faixa:'6 a 13 anos', tema:'Ação e Trabalho',
  ref:'"Quem Mexeu no Meu Queijo?" — parede: "Mova-se em uma nova direção e encontre novo queijo"',
  historia:`<p>Haw entendeu que ficar parado não traz o queijo de volta. Escreveu: <strong>"Mova-se em uma nova direção e encontre novo queijo."</strong> Ele explorou novos corredores do labirinto, aprendeu com os erros e, pouco a pouco, foi se aproximando do novo queijo.</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> O Espiritismo ensina que o trabalho e a ação mudam nossa vida (O Evangelho Segundo o Espiritismo, cap. sobre trabalho). Quem apenas reclama fica parado; quem age, progride. Cada pequena atitude boa é um passo em nova direção.</p>`,
  atividade:`<h3>🎯 Brincadeira: Labirinto da Ação</h3>
  <p><strong>Idade:</strong> 6-12 anos • <strong>Material:</strong> labirinto desenhado no chão com giz.</p>
  <p>As crianças percorrem o labirinto até o "queijo" no centro. No caminho, param em "estações" onde dizem uma ação boa (estudar, ajudar, perdoar). Quem chega ao centro cometeu 3 boas ações!</p>`,
  versiculo:`"Confia no Senhor de todo o teu coração e Ele endireitará as tuas veredas." — Provérbios 3,5-6`
});

// ---------- 15. Compartilhe o Queijo ----------
licoes.push({
  titulo:'Compartilhe o Queijo',
  emoji:'🧀', emoji2:'🤝',
  faixa:'6 a 13 anos', tema:'Caridade e Fraternidade',
  ref:'"Quem Mexeu no Meu Queijo?" — parede: "Compartilhe o seu queijo e ajude aos outros a encontrarem o dele"',
  historia:`<p>Quando Haw finalmente achou um queijo novo e delicioso, sua primeira ideia foi: <strong>"Vou voltar e contar a Hem e a todos onde está o novo queijo!"</strong> Ele quis ajudar os amigos a não passarem fome nem sozinhos no escuro do labirinto.</p>`,
  reflexao:`<p>💭 <strong>Reflexão Espírita:</strong> A felicidade multiplica quando é dividida. Quem encontra um conhecimento bom, uma amizade ou uma bênção deve ajudar o próximo a encontrar também. "Amar ao próximo como a si mesmo" (Lucas 10,27) é compartilhar o melhor que temos.</p>`,
  atividade:`<h3>🎯 Brincadeira: Queijo Compartilhado</h3>
  <p><strong>Idade:</strong> 5-12 anos • <strong>Material:</strong> pedaços de queijo (ou biscoito) para repartir.</p>
  <p>Dê apenas 1 pedaço a cada um, mas diga que só podem comer depois de oferecer um pedaço a um colega. Vivencie: a alegria de dar é maior que a de receber.</p>`,
  versiculo:`"Amados, amemos uns aos outros, porque o amor é de Deus." — 1 João 4,7`
});

// ======================= RENDERIZAÇÃO =======================
var licaoAtual=-1;
function renderLicoes(){
  licaoAtual=-1;
  var el=document.getElementById('tela-licoes');
  if(!el)return;
  if(window.speechSynthesis)window.speechSynthesis.cancel();
  var h='<h2 style="font-family:\'Fredoka One\',cursive;color:#ffd700;text-align:center;font-size:1.2rem;margin-bottom:4px">📖 Lições para Evangelização</h2>';
  h+='<p style="color:#d4c4f0;text-align:center;font-size:.8rem;font-weight:600;margin-bottom:8px">Parábolas, histórias da Bíblia e ensinamentos do livro "Quem Mexeu no Meu Queijo" 🕊️</p>';
  h+='<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">';
  for(var i=0;i<licoes.length;i++){
    h+='<div class="card-jogo" style="flex:1;min-width:140px;max-width:200px;cursor:pointer" onclick="abrirLicao('+i+')">'
      +'<div class="ci">'+licoes[i].emoji+' '+licoes[i].emoji2+'</div>'
      +'<div class="ct">'+licoes[i].titulo+'</div>'
      +'<div class="cd">'+licoes[i].faixa+' • '+licoes[i].tema+'</div></div>';
  }
  h+='</div>';
  el.innerHTML=h;
  el.scrollTop=0;
}
function abrirLicao(i){
  licaoAtual=i;
  var L=licoes[i];
  var el=document.getElementById('tela-licoes');
  if(!el)return;
  if(window.speechSynthesis)window.speechSynthesis.cancel();
  var h='';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px">'
    +'<h2 style="font-family:\'Fredoka One\',cursive;color:#ffd700;font-size:1.15rem">'+L.emoji+' '+L.titulo+'</h2>'
    +'<button class="btn btn-o btn-sm" onclick="renderLicoes()">← Voltar</button></div>';
  h+='<p class="ref">'+L.ref+' • Faixa: '+L.faixa+' • Tema: '+L.tema+'</p>';
  h+='<div class="eb" style="text-align:center;font-size:2.2rem">'+L.emoji+' '+L.emoji2+'</div>';
  h+='<button class="tts-btn-ouvir" onclick="ttsLer(\'licoes\',this)" style="display:inline-block;margin:6px 0 4px">🔊 Ouvir lição</button>';
  h+='<div id="licao-texto">';
  h+='<h3 style="color:#d4c4f0;font-weight:800;margin:8px 0 4px">📖 História</h3>'+L.historia;
  h+='<h3 style="color:#d4c4f0;font-weight:800;margin:10px 0 4px">💭 Reflexão</h3>'+L.reflexao;
  h+='<h3 style="color:#d4c4f0;font-weight:800;margin:10px 0 4px">🎯 Atividade / Brincadeira</h3>'+L.atividade;
  h+='<h3 style="color:#d4c4f0;font-weight:800;margin:10px 0 4px">📜 Versículo / Mensagem</h3><div class="vers">'+L.versiculo+'</div>';
  h+='</div>';
  h+='<div class="botoes-centro"><button class="btn btn-o btn-sm" onclick="renderLicoes()">← Voltar às Lições</button></div>';
  el.innerHTML=h;
  el.scrollTop=0;
}
