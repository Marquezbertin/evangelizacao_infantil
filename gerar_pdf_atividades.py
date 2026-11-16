# -*- coding: utf-8 -*-
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm, cm
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def gerar_pdf():
    pdf_path = r"C:\Users\Usuário\evangelizacao_infantil\pdfs\bullying-respeito-empatia.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=A4,
        rightMargin=14*mm,
        leftMargin=14*mm,
        topMargin=12*mm,
        bottomMargin=12*mm
    )

    styles = getSampleStyleSheet()

    # Cores
    cor_primaria = colors.HexColor("#553982")
    cor_secundaria = colors.HexColor("#7c5cbf")
    cor_fundo_suave = colors.HexColor("#f8f5ff")
    cor_borda = colors.HexColor("#c8b8e8")
    cor_texto = colors.HexColor("#2a1f42")
    cor_destaque = colors.HexColor("#b8860b")

    # Estilos customizados
    titulo_escola_style = ParagraphStyle(
        'TituloEscola',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=cor_primaria,
        alignment=TA_LEFT
    )

    sub_escola_style = ParagraphStyle(
        'SubEscola',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor("#6b5b8c"),
        alignment=TA_LEFT
    )

    aula_info_style = ParagraphStyle(
        'AulaInfo',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=cor_primaria,
        alignment=TA_RIGHT
    )

    tema_titulo_style = ParagraphStyle(
        'TemaTitulo',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=cor_primaria,
        alignment=TA_CENTER
    )

    versiculo_style = ParagraphStyle(
        'VersiculoStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor("#3b2660"),
        alignment=TA_CENTER
    )

    secao_titulo_style = ParagraphStyle(
        'SecaoTitulo',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=cor_primaria,
        alignment=TA_LEFT
    )

    historia_style = ParagraphStyle(
        'HistoriaStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.2,
        textColor=cor_texto,
        alignment=TA_JUSTIFY
    )

    pergunta_enunciado_style = ParagraphStyle(
        'PerguntaEnunciado',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=cor_primaria
    )

    opcao_style = ParagraphStyle(
        'OpcaoStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=cor_texto
    )

    footer_style = ParagraphStyle(
        'FooterStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9,
        textColor=colors.HexColor("#7b6a9a")
    )

    story = []

    # ==================== PÁGINA 1 ====================
    # Cabeçalho
    header_data = [
        [
            Paragraph("<b>Escola de Evangelização Espírita Infantil</b><br/><font color='#6b5b8c'>Moral Cristã · Doutrina Espírita · Amor ao Próximo</font>", titulo_escola_style),
            Paragraph("<b>AULA ESPECIAL</b><br/><font color='#6b5b8c'>Tema: Empatia & Paz</font>", aula_info_style)
        ]
    ]
    header_table = Table(header_data, colWidths=[120*mm, 62*mm])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LINEBELOW', (0,0), (-1,-1), 1.5, cor_secundaria),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 3*mm))

    # Campos do Aluno
    aluno_data = [
        [
            Paragraph("<b>Aluno(a):</b> ____________________________________", opcao_style),
            Paragraph("<b>Data:</b> ____/____/________", opcao_style),
            Paragraph("<b>Turma:</b> ________________", opcao_style)
        ]
    ]
    aluno_table = Table(aluno_data, colWidths=[92*mm, 45*mm, 45*mm])
    aluno_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), cor_fundo_suave),
        ('BOX', (0,0), (-1,-1), 1, cor_borda),
        ('INNERGRID', (0,0), (-1,-1), 0.5, cor_borda),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(aluno_table)
    story.append(Spacer(1, 3*mm))

    # Banner do Tema
    banner_data = [
        [
            Paragraph("<b>Corações Amigos: Empatia, Respeito e Não ao Bullying</b>", tema_titulo_style)
        ],
        [
            Paragraph('"Tudo quanto quereis que os homens vos façam, fazei-lho vós também a eles." — Jesus (Mateus 7:12)', versiculo_style)
        ]
    ]
    banner_table = Table(banner_data, colWidths=[182*mm])
    banner_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f3edfc")),
        ('BOX', (0,0), (-1,-1), 1.5, cor_secundaria),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(banner_table)
    story.append(Spacer(1, 3*mm))

    # Seção 1: A História
    historia_texto = (
        "Na escola de Lucas, chegou um coleguinha novo chamado <b>Léo</b>. Léo usava óculos grandões, era tímido e adorava desenhar estrelas e planetas coloridos. No primeiro dia de recreio, dois colegas começaram a rir de Léo, chamando-o de 'quatro-olhos' e não o deixaram brincar na roda. Léo sentou-se num cantinho, com o coraçãozinho apertado e os olhos cheios de lágrimas.<br/><br/>"
        "Lucas, que aprende na Evangelização Espírita que <b>somos todos espíritos irmãos, filhos muito amados de Deus</b>, lembrou-se do ensinamento de Jesus: tratar os outros com o mesmo amor que gostaríamos de receber. Ele não riu, nem fingiu que não viu. Foi até Léo, elogiou seus lindos desenhos e disse com um sorriso sincero: <i>'Seu foguete é incrível! Quer lanchar comigo e inventar uma viagem espacial?'</i><br/><br/>"
        "Ao verem o gesto de acolhimento de Lucas, os outros meninos perceberam que zombar não era legal e sentiram vergonha. Lucas explicou com calma e firmeza: <b>'Apelidos machucam por dentro. Se fosse com a gente, não íamos gostar. Que tal brincarmos todos juntos de astronautas?'</b> Todos se uniram e o recreio se transformou em uma tarde inesquecível de alegria e respeito!"
    )
    historia_box = [
        [Paragraph("<b>1. A Ponte de Luz e as Palavras que Curam</b>", secao_titulo_style)],
        [Paragraph(historia_texto, historia_style)]
    ]
    historia_table = Table(historia_box, colWidths=[182*mm])
    historia_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#ffffff")),
        ('BOX', (0,0), (-1,-1), 1, cor_borda),
        ('LINELEFT', (0,1), (0,1), 3.5, cor_secundaria),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(historia_table)
    story.append(Spacer(1, 3*mm))

    # Seção 2: Atividade Termômetro da Empatia
    perguntas_texto = [
        [Paragraph("<b>2. Termômetro da Empatia: O que Jesus e a Caridade Fariam?</b>", secao_titulo_style)],
        [Paragraph("<b>A) Quando você vê um amiguinho sendo deixado de lado ou alguém colocando apelido chato nele:</b>", pergunta_enunciado_style)],
        [Paragraph("( &nbsp; ) Dou risada junto com os outros para ninguém zombar de mim.<br/>"
                   "( &nbsp; ) <b>Acolho o amiguinho, convido-o para perto e aviso a professora ou o evangelizador.</b><br/>"
                   "( &nbsp; ) Finjo que não estou vendo nada e saio correndo.", opcao_style)],
        [Paragraph("<b>B) Por que para o Espiritismo e o Cristianismo ninguém é melhor do que ninguém?</b>", pergunta_enunciado_style)],
        [Paragraph("( &nbsp; ) <b>Porque todos somos espíritos criados por Deus, irmãos a caminho do bem e da evolução.</b><br/>"
                   "( &nbsp; ) Porque quem é mais forte ou mais rápido manda nos outros.", opcao_style)],
        [Paragraph("<b>C) Como devemos agir em relação ao colega que pratica o bullying (que agride ou ofende)?</b>", pergunta_enunciado_style)],
        [Paragraph("( &nbsp; ) Xingamos de volta e nos vingamos na mesma moeda.<br/>"
                   "( &nbsp; ) <b>Não aceitamos a ofensa, colocamos limites com calma, buscamos ajuda e oramos por ele.</b>", opcao_style)]
    ]
    perguntas_table = Table(perguntas_texto, colWidths=[182*mm])
    perguntas_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#faf8ff")),
        ('BOX', (0,0), (-1,-1), 1, cor_borda),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(perguntas_table)
    story.append(Spacer(1, 2*mm))

    # Rodapé da Página 1
    rodape_p1 = [
        [
            Paragraph("Escola de Evangelização Infantil Espírita — 'Amai-vos uns aos outros'", footer_style),
            Paragraph("Página 1 de 2", ParagraphStyle('FRight', parent=footer_style, alignment=TA_RIGHT))
        ]
    ]
    t_rodape1 = Table(rodape_p1, colWidths=[140*mm, 42*mm])
    t_rodape1.setStyle(TableStyle([
        ('LINEABOVE', (0,0), (-1,-1), 0.5, cor_borda),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_rodape1)

    story.append(PageBreak())

    # ==================== PÁGINA 2 ====================
    # Cabeçalho Página 2
    header_data2 = [
        [
            Paragraph("<b>Oficina das Virtudes & Atividades Práticas</b><br/><font color='#6b5b8c'>Plantando sementes de paz, respeito e fraternidade</font>", titulo_escola_style),
            Paragraph("<b>FOLHA DE ATIVIDADES</b><br/><font color='#6b5b8c'>Fixação e Criatividade</font>", aula_info_style)
        ]
    ]
    header_table2 = Table(header_data2, colWidths=[120*mm, 62*mm])
    header_table2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LINEBELOW', (0,0), (-1,-1), 1.5, cor_secundaria),
    ]))
    story.append(header_table2)
    story.append(Spacer(1, 3*mm))

    # Atividade 3: A Árvore das Boas Palavras
    arvore_instrucao = (
        "Jesus nos ensinou: <i>'Pelo fruto se conhece a árvore'</i> (Mateus 12:33). "
        "Nossas palavras têm grande poder: podem machucar ou podem consolar e iluminar! "
        "Escreva ou complete nos 6 frutos abaixo palavras e frases que curam o coração de um amigo:"
    )
    frutos_linhas = [
        [Paragraph("<b>3. A Árvore das Palavras que Iluminam</b>", secao_titulo_style)],
        [Paragraph(arvore_instrucao, historia_style)],
        [
            Table([
                [
                    Paragraph("Fruto 1: <b>'Obrigado!'</b>", opcao_style),
                    Paragraph("Fruto 2: <b>'Você é especial!'</b>", opcao_style),
                    Paragraph("Fruto 3: <b>'Me desculpe'</b>", opcao_style)
                ],
                [
                    Paragraph("Fruto 4: <b>'Vamos brincar?'</b>", opcao_style),
                    Paragraph("Fruto 5: <b>'Posso te ajudar?'</b>", opcao_style),
                    Paragraph("Fruto 6: <b>'Você é meu amigo!'</b>", opcao_style)
                ]
            ], colWidths=[58*mm, 58*mm, 58*mm],
            style=[
                ('BOX', (0,0), (-1,-1), 0.5, cor_borda),
                ('INNERGRID', (0,0), (-1,-1), 0.5, cor_borda),
                ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#fdfbff")),
                ('TOPPADDING', (0,0), (-1,-1), 4),
                ('BOTTOMPADDING', (0,0), (-1,-1), 4),
                ('LEFTPADDING', (0,0), (-1,-1), 5),
            ])
        ]
    ]
    t_arvore = Table(frutos_linhas, colWidths=[182*mm])
    t_arvore.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#ffffff")),
        ('BOX', (0,0), (-1,-1), 1, cor_borda),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(t_arvore)
    story.append(Spacer(1, 3*mm))

    # Atividade 4: Caça-Palavras
    grade_letras = [
        ['E', 'M', 'P', 'A', 'T', 'I', 'A', 'X', 'P', 'A', 'Z', 'W'],
        ['R', 'E', 'S', 'P', 'E', 'I', 'T', 'O', 'K', 'L', 'M', 'A'],
        ['A', 'M', 'I', 'Z', 'A', 'D', 'E', 'Y', 'A', 'M', 'O', 'R'],
        ['B', 'O', 'N', 'D', 'A', 'D', 'E', 'J', 'E', 'S', 'U', 'S'],
        ['P', 'E', 'R', 'D', 'A', 'O', 'Q', 'U', 'N', 'I', 'A', 'O'],
        ['C', 'A', 'R', 'I', 'D', 'A', 'D', 'E', 'T', 'U', 'D', 'O'],
        ['A', 'C', 'O', 'L', 'H', 'E', 'R', 'S', 'L', 'U', 'Z', 'F']
    ]
    caca_tabela = Table(grade_letras, colWidths=[8.5*mm]*12, rowHeights=[6.8*mm]*7)
    caca_tabela.setStyle(TableStyle([
        ('FONT', (0,0), (-1,-1), 'Helvetica-Bold', 9),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#fcfbff")),
        ('BOX', (0,0), (-1,-1), 1.2, cor_secundaria),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#dfd6f3")),
        ('TEXTCOLOR', (0,0), (-1,-1), cor_primaria),
    ]))

    lista_palavras_caca = (
        "<b>Encontre as 8 palavras da paz:</b><br/>"
        "• <b>EMPATIA</b> (colocar-se no lugar do irmão)<br/>"
        "• <b>RESPEITO</b> (admirar as diferenças)<br/>"
        "• <b>AMIZADE</b> (laço que une os corações)<br/>"
        "• <b>BONDADE</b> (fazer o bem sem olhar a quem)<br/>"
        "• <b>PERDÃO</b> (limpar o coração da mágoa)<br/>"
        "• <b>CARIDADE</b> (o amor em ação)<br/>"
        "• <b>ACOLHER</b> (abrir os braços para quem precisa)<br/>"
        "• <b>PAZ</b> (a bênção do Mestre Jesus)"
    )

    caca_box_data = [
        [Paragraph("<b>4. Caça-Palavras da Turma da Paz</b>", secao_titulo_style), ""],
        [caca_tabela, Paragraph(lista_palavras_caca, historia_style)]
    ]
    t_caca = Table(caca_box_data, colWidths=[108*mm, 74*mm])
    t_caca.setStyle(TableStyle([
        ('SPAN', (0,0), (1,0)),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#faf8ff")),
        ('BOX', (0,0), (-1,-1), 1, cor_borda),
        ('VALIGN', (0,1), (-1,1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_caca)
    story.append(Spacer(1, 3*mm))

    # Atividade 5: Compromisso e Oração da Paz
    compromisso_texto = (
        "<b>Prece da Criança Pacificadora:</b><br/>"
        "<i>'Querido Jesus e amigos espirituais, ajudai-me a ter um coração bondoso e compreensivo. "
        "Que eu saiba defender os que sofrem, acolher os que estão tristes e perdoar os que erram. "
        "Dai-me coragem para espalhar a paz e ser sempre um amigo de verdade. Que assim seja!'</i><br/><br/>"
        "<b>Meu Compromisso:</b> Prometo ser um guardião do respeito e do carinho com todos os meus colegas!<br/><br/>"
        "Assinatura do(a) Evangelizando(a): __________________________________________________"
    )
    compromisso_data = [
        [Paragraph("<b>5. Meu Compromisso de Guardião da Paz</b>", secao_titulo_style)],
        [Paragraph(compromisso_texto, historia_style)]
    ]
    t_compromisso = Table(compromisso_data, colWidths=[182*mm])
    t_compromisso.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#fffdf5")),
        ('BOX', (0,0), (-1,-1), 1.2, cor_destaque),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(t_compromisso)
    story.append(Spacer(1, 2*mm))

    # Rodapé da Página 2
    rodape_p2 = [
        [
            Paragraph("Escola de Evangelização Infantil Espírita — 'Fora da caridade não há salvação.'", footer_style),
            Paragraph("Página 2 de 2", ParagraphStyle('FRight', parent=footer_style, alignment=TA_RIGHT))
        ]
    ]
    t_rodape2 = Table(rodape_p2, colWidths=[140*mm, 42*mm])
    t_rodape2.setStyle(TableStyle([
        ('LINEABOVE', (0,0), (-1,-1), 0.5, cor_borda),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_rodape2)

    doc.build(story)
    print("PDF de atividades gerado com sucesso em:", pdf_path)

if __name__ == "__main__":
    gerar_pdf()
