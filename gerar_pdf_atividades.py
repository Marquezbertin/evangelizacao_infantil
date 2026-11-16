# -*- coding: utf-8 -*-
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm, cm
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY
from reportlab.graphics.shapes import (
    Drawing, Rect, Circle, Line, String, Group, Polygon, PolyLine
)

def criar_desenho_colorir():
    w = 182 * mm
    h = 165 * mm
    d = Drawing(w, h)

    # Moldura externa para colorir
    d.add(Rect(0, 0, w, h, rx=8, ry=8, fillColor=colors.white, strokeColor=colors.HexColor("#553982"), strokeWidth=1.5))

    # Faixa superior com letras para colorir
    d.add(Rect(18*mm, h - 16*mm, 146*mm, 11*mm, rx=5, ry=5, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    d.add(String(w/2, h - 11.5*mm, "AQUI SO ENTRA AMOR E RESPEITO!", fontName="Helvetica-Bold", fontSize=11, textAnchor="middle", fillColor=colors.black))

    # Sol radiante no canto superior esquerdo
    sol_x, sol_y = 25*mm, h - 35*mm
    d.add(Circle(sol_x, sol_y, 11*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    # Olhos e sorriso do sol
    d.add(Circle(sol_x - 3.5*mm, sol_y + 2*mm, 1.2*mm, fillColor=colors.black, strokeColor=colors.black))
    d.add(Circle(sol_x + 3.5*mm, sol_y + 2*mm, 1.2*mm, fillColor=colors.black, strokeColor=colors.black))
    d.add(Line(sol_x - 4*mm, sol_y - 3*mm, sol_x + 4*mm, sol_y - 3*mm, strokeColor=colors.black, strokeWidth=1.2))
    # Raios do sol
    raios = [
        (sol_x, sol_y + 14*mm, sol_x, sol_y + 19*mm),
        (sol_x, sol_y - 14*mm, sol_x, sol_y - 19*mm),
        (sol_x - 14*mm, sol_y, sol_x - 19*mm, sol_y),
        (sol_x + 14*mm, sol_y, sol_x + 19*mm, sol_y),
        (sol_x - 10*mm, sol_y + 10*mm, sol_x - 14*mm, sol_y + 14*mm),
        (sol_x + 10*mm, sol_y + 10*mm, sol_x + 14*mm, sol_y + 14*mm),
        (sol_x - 10*mm, sol_y - 10*mm, sol_x - 14*mm, sol_y - 14*mm),
        (sol_x + 10*mm, sol_y - 10*mm, sol_x + 14*mm, sol_y - 14*mm),
    ]
    for x1, y1, x2, y2 in raios:
        d.add(Line(x1, y1, x2, y2, strokeColor=colors.black, strokeWidth=1.2))

    # Nuvem no canto superior direito
    nuvem_x, nuvem_y = w - 40*mm, h - 32*mm
    d.add(Circle(nuvem_x, nuvem_y, 9*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    d.add(Circle(nuvem_x + 10*mm, nuvem_y + 2*mm, 11*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    d.add(Circle(nuvem_x + 20*mm, nuvem_y, 9*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    d.add(Rect(nuvem_x - 4*mm, nuvem_y - 8*mm, 28*mm, 8*mm, fillColor=colors.white, strokeColor=colors.white))
    d.add(Line(nuvem_x - 4*mm, nuvem_y - 8*mm, nuvem_x + 24*mm, nuvem_y - 8*mm, strokeColor=colors.black, strokeWidth=1.2))

    # Pombinha da Paz no centro alto
    px, py = w/2, h - 35*mm
    d.add(Circle(px, py, 6*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    d.add(Circle(px + 1.8*mm, py + 1.5*mm, 1*mm, fillColor=colors.black, strokeColor=colors.black))
    d.add(Line(px + 6*mm, py, px + 9*mm, py + 1*mm, strokeColor=colors.black, strokeWidth=1.2)) # Bico
    d.add(Line(px + 6*mm, py, px + 9*mm, py - 1*mm, strokeColor=colors.black, strokeWidth=1.2))
    # Asas da pomba
    d.add(Polygon([px - 4*mm, py + 2*mm, px - 14*mm, py + 12*mm, px - 7*mm, py + 5*mm], fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    d.add(Polygon([px + 2*mm, py + 2*mm, px + 12*mm, py + 12*mm, px + 5*mm, py + 5*mm], fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    # Raminho no bico
    d.add(Line(px + 8.5*mm, py, px + 14*mm, py + 3*mm, strokeColor=colors.black, strokeWidth=1))
    d.add(Circle(px + 12*mm, py + 3.5*mm, 1.2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Circle(px + 14*mm, py + 2*mm, 1.2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))

    # Coração grande de proteção e amor atrás dos amigos
    coracao_pts = [
        w/2, 60*mm,
        w/2 - 28*mm, 85*mm,
        w/2 - 38*mm, 105*mm,
        w/2 - 20*mm, 120*mm,
        w/2, 108*mm,
        w/2 + 20*mm, 120*mm,
        w/2 + 38*mm, 105*mm,
        w/2 + 28*mm, 85*mm,
    ]
    d.add(Polygon(coracao_pts, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.4))

    # ==================== AMIGO 1: LUCAS (ESQUERDA) ====================
    lx = w/2 - 22*mm
    ly = 85*mm

    # Cabeça
    d.add(Circle(lx, ly, 11*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    # Cabelo
    d.add(Polygon([lx - 11*mm, ly + 4*mm, lx - 7*mm, ly + 11*mm, lx, ly + 12*mm, lx + 8*mm, ly + 10*mm, lx + 11*mm, ly + 3*mm, lx + 5*mm, ly + 7*mm, lx - 5*mm, ly + 7*mm],
                  fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    # Olhos e Sorriso
    d.add(Circle(lx - 4*mm, ly + 1*mm, 1.2*mm, fillColor=colors.black, strokeColor=colors.black))
    d.add(Circle(lx + 4*mm, ly + 1*mm, 1.2*mm, fillColor=colors.black, strokeColor=colors.black))
    d.add(Line(lx - 4*mm, ly - 4*mm, lx + 4*mm, ly - 4*mm, strokeColor=colors.black, strokeWidth=1.2))
    # Corpo / Camiseta
    d.add(Polygon([lx - 7*mm, ly - 11*mm, lx - 11*mm, ly - 36*mm, lx + 11*mm, ly - 36*mm, lx + 7*mm, ly - 11*mm],
                  fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    # Estrela na camiseta
    d.add(Polygon([lx, ly - 20*mm, lx + 2*mm, ly - 24*mm, lx + 6*mm, ly - 24*mm, lx + 3*mm, ly - 27*mm, lx + 4*mm, ly - 31*mm,
                   lx, ly - 28*mm, lx - 4*mm, ly - 31*mm, lx - 3*mm, ly - 27*mm, lx - 6*mm, ly - 24*mm, lx - 2*mm, ly - 24*mm],
                  fillColor=colors.white, strokeColor=colors.black, strokeWidth=1))
    # Braço acolhendo o amigo (abraço)
    d.add(Line(lx + 7*mm, ly - 16*mm, lx + 22*mm, ly - 18*mm, strokeColor=colors.black, strokeWidth=2))
    # Outro braço aberto
    d.add(Line(lx - 7*mm, ly - 16*mm, lx - 19*mm, ly - 8*mm, strokeColor=colors.black, strokeWidth=2))
    d.add(Circle(lx - 19*mm, ly - 8*mm, 2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    # Pernas e sapatos
    d.add(Rect(lx - 7*mm, ly - 56*mm, 6*mm, 20*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    d.add(Rect(lx + 1*mm, ly - 56*mm, 6*mm, 20*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    d.add(Rect(lx - 8*mm, ly - 60*mm, 8*mm, 5*mm, rx=2, ry=2, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    d.add(Rect(lx + 1*mm, ly - 60*mm, 8*mm, 5*mm, rx=2, ry=2, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))

    # ==================== AMIGO 2: LÉO (DIREITA) ====================
    rx = w/2 + 22*mm
    ry = 85*mm

    # Cabeça
    d.add(Circle(rx, ry, 11*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    # Cabelo cacheado
    d.add(Circle(rx - 8*mm, ry + 9*mm, 4*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1))
    d.add(Circle(rx, ry + 11*mm, 4.5*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1))
    d.add(Circle(rx + 8*mm, ry + 9*mm, 4*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1))
    # Óculos estilosos de Léo
    d.add(Circle(rx - 4.5*mm, ry + 1*mm, 3.8*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    d.add(Circle(rx + 4.5*mm, ry + 1*mm, 3.8*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    d.add(Line(rx - 0.7*mm, ry + 1*mm, rx + 0.7*mm, ry + 1*mm, strokeColor=colors.black, strokeWidth=1.5))
    d.add(Circle(rx - 4.5*mm, ry + 1*mm, 1.2*mm, fillColor=colors.black, strokeColor=colors.black))
    d.add(Circle(rx + 4.5*mm, ry + 1*mm, 1.2*mm, fillColor=colors.black, strokeColor=colors.black))
    # Sorriso feliz
    d.add(Line(rx - 4*mm, ry - 5*mm, rx + 4*mm, ry - 5*mm, strokeColor=colors.black, strokeWidth=1.2))
    # Corpo / Camiseta
    d.add(Polygon([rx - 7*mm, ry - 11*mm, rx - 11*mm, ry - 36*mm, rx + 11*mm, ry - 36*mm, rx + 7*mm, ry - 11*mm],
                  fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    # Foguetinho na camiseta
    d.add(Polygon([rx, ry - 20*mm, rx + 3*mm, ry - 28*mm, rx - 3*mm, ry - 28*mm], fillColor=colors.white, strokeColor=colors.black, strokeWidth=1))
    # Braço retribuindo o abraço
    d.add(Line(rx - 7*mm, ly - 16*mm, rx - 22*mm, ly - 18*mm, strokeColor=colors.black, strokeWidth=2))
    # Outro braço segurando bloco de desenho
    d.add(Line(rx + 7*mm, ry - 16*mm, rx + 18*mm, ry - 22*mm, strokeColor=colors.black, strokeWidth=2))
    d.add(Rect(rx + 15*mm, ry - 32*mm, 10*mm, 13*mm, rx=1, ry=1, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.2))
    d.add(Line(rx + 17*mm, ry - 24*mm, rx + 23*mm, ry - 24*mm, strokeColor=colors.black, strokeWidth=0.8))
    # Pernas e sapatos
    d.add(Rect(rx - 7*mm, ry - 56*mm, 6*mm, 20*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    d.add(Rect(rx + 1*mm, ry - 56*mm, 6*mm, 20*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    d.add(Rect(rx - 8*mm, ry - 60*mm, 8*mm, 5*mm, rx=2, ry=2, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))
    d.add(Rect(rx + 1*mm, ry - 60*mm, 8*mm, 5*mm, rx=2, ry=2, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1.5))

    # Chão de grama
    chao_y = 24*mm
    d.add(Line(10*mm, chao_y, w - 10*mm, chao_y, strokeColor=colors.black, strokeWidth=1.5))

    # Florzinha da esquerda
    d.add(Circle(22*mm, chao_y + 10*mm, 2.5*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1))
    d.add(Circle(22*mm, chao_y + 14*mm, 2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Circle(26*mm, chao_y + 10*mm, 2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Circle(22*mm, chao_y + 6*mm, 2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Circle(18*mm, chao_y + 10*mm, 2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Line(22*mm, chao_y, 22*mm, chao_y + 6*mm, strokeColor=colors.black, strokeWidth=1.2))

    # Florzinha da direita
    d.add(Circle(w - 22*mm, chao_y + 10*mm, 2.5*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=1))
    d.add(Circle(w - 22*mm, chao_y + 14*mm, 2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Circle(w - 18*mm, chao_y + 10*mm, 2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Circle(w - 22*mm, chao_y + 6*mm, 2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Circle(w - 26*mm, chao_y + 10*mm, 2*mm, fillColor=colors.white, strokeColor=colors.black, strokeWidth=0.8))
    d.add(Line(w - 22*mm, chao_y, w - 22*mm, chao_y + 6*mm, strokeColor=colors.black, strokeWidth=1.2))

    # Legenda carinhosa no rodapé do desenho
    d.add(String(w/2, 14*mm, '"Somos todos diferentes e especiais perante Deus. Viva a Amizade!"',
                 fontName="Helvetica-Bold", fontSize=8.5, textAnchor="middle", fillColor=colors.HexColor("#2a1f42")))
    d.add(String(w/2, 8*mm, "Desenho para colorir com lápis de cor, giz de cera ou canetinha",
                 fontName="Helvetica", fontSize=7.5, textAnchor="middle", fillColor=colors.HexColor("#6b5b8c")))

    return d


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

    cor_primaria = colors.HexColor("#553982")
    cor_secundaria = colors.HexColor("#7c5cbf")
    cor_fundo_suave = colors.HexColor("#f8f5ff")
    cor_borda = colors.HexColor("#c8b8e8")
    cor_texto = colors.HexColor("#2a1f42")
    cor_destaque = colors.HexColor("#b8860b")

    titulo_escola_style = ParagraphStyle(
        'TituloEscola',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=cor_primaria,
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
        fontSize=12.5,
        leading=16,
        textColor=cor_primaria,
        alignment=TA_CENTER
    )

    versiculo_style = ParagraphStyle(
        'VersiculoStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#3b2660"),
        alignment=TA_CENTER
    )

    secao_titulo_style = ParagraphStyle(
        'SecaoTitulo',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=cor_primaria,
        alignment=TA_LEFT
    )

    historia_style = ParagraphStyle(
        'HistoriaStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=11.8,
        textColor=cor_texto,
        alignment=TA_JUSTIFY
    )

    pergunta_enunciado_style = ParagraphStyle(
        'PerguntaEnunciado',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=11.2,
        textColor=cor_primaria
    )

    opcao_style = ParagraphStyle(
        'OpcaoStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
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
    story.append(Spacer(1, 2.5*mm))

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
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(aluno_table)
    story.append(Spacer(1, 2.5*mm))

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
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(banner_table)
    story.append(Spacer(1, 2.5*mm))

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
    story.append(Spacer(1, 2.5*mm))

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

    rodape_p1 = [
        [
            Paragraph("Escola de Evangelização Infantil Espírita — 'Amai-vos uns aos outros'", footer_style),
            Paragraph("Página 1 de 3", ParagraphStyle('FRight1', parent=footer_style, alignment=TA_RIGHT))
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
    story.append(Spacer(1, 2.5*mm))

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
    story.append(Spacer(1, 2.5*mm))

    grade_letras = [
        ['E', 'M', 'P', 'A', 'T', 'I', 'A', 'X', 'P', 'A', 'Z', 'W'],
        ['R', 'E', 'S', 'P', 'E', 'I', 'T', 'O', 'K', 'L', 'M', 'A'],
        ['A', 'M', 'I', 'Z', 'A', 'D', 'E', 'Y', 'A', 'M', 'O', 'R'],
        ['B', 'O', 'N', 'D', 'A', 'D', 'E', 'J', 'E', 'S', 'U', 'S'],
        ['P', 'E', 'R', 'D', 'A', 'O', 'Q', 'U', 'N', 'I', 'A', 'O'],
        ['C', 'A', 'R', 'I', 'D', 'A', 'D', 'E', 'T', 'U', 'D', 'O'],
        ['A', 'C', 'O', 'L', 'H', 'E', 'R', 'S', 'L', 'U', 'Z', 'F']
    ]
    caca_tabela = Table(grade_letras, colWidths=[8.5*mm]*12, rowHeights=[6.6*mm]*7)
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
    story.append(Spacer(1, 2.5*mm))

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

    rodape_p2 = [
        [
            Paragraph("Escola de Evangelização Infantil Espírita — 'Fora da caridade não há salvação.'", footer_style),
            Paragraph("Página 2 de 3", ParagraphStyle('FRight2', parent=footer_style, alignment=TA_RIGHT))
        ]
    ]
    t_rodape2 = Table(rodape_p2, colWidths=[140*mm, 42*mm])
    t_rodape2.setStyle(TableStyle([
        ('LINEABOVE', (0,0), (-1,-1), 0.5, cor_borda),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_rodape2)

    story.append(PageBreak())

    # ==================== PÁGINA 3: ESPAÇO DE PINTURA E COLORIR ====================
    header_data3 = [
        [
            Paragraph("<b>Espaço de Pintura & Arte da Fraternidade</b><br/><font color='#6b5b8c'>Colorindo o mundo com amor, respeito e alegria</font>", titulo_escola_style),
            Paragraph("<b>ATIVIDADE DE COLORIR</b><br/><font color='#6b5b8c'>Pequenos Artistas da Paz</font>", aula_info_style)
        ]
    ]
    header_table3 = Table(header_data3, colWidths=[120*mm, 62*mm])
    header_table3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LINEBELOW', (0,0), (-1,-1), 1.5, cor_secundaria),
    ]))
    story.append(header_table3)
    story.append(Spacer(1, 2*mm))

    banner_data3 = [
        [
            Paragraph("<b>🎨 Amigos da Luz: Onde Há Amor, o Bullying Não Entra!</b>", tema_titulo_style)
        ],
        [
            Paragraph('"Amados, amemo-nos uns aos outros, porque o amor procede de Deus." (1 João 4:7)', versiculo_style)
        ]
    ]
    banner_table3 = Table(banner_data3, colWidths=[182*mm])
    banner_table3.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f3edfc")),
        ('BOX', (0,0), (-1,-1), 1.5, cor_secundaria),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(banner_table3)
    story.append(Spacer(1, 2*mm))

    story.append(Paragraph("<b>6. Pinte bem bonito este momento de união e amizade cristã:</b>", secao_titulo_style))
    story.append(Spacer(1, 1.5*mm))

    # Adiciona o desenho vetorial de colorir
    desenho_colorir = criar_desenho_colorir()
    story.append(desenho_colorir)
    story.append(Spacer(1, 2*mm))

    rodape_p3 = [
        [
            Paragraph("Escola de Evangelização Infantil Espírita — Arte, Fé e Fraternidade", footer_style),
            Paragraph("Página 3 de 3", ParagraphStyle('FRight3', parent=footer_style, alignment=TA_RIGHT))
        ]
    ]
    t_rodape3 = Table(rodape_p3, colWidths=[140*mm, 42*mm])
    t_rodape3.setStyle(TableStyle([
        ('LINEABOVE', (0,0), (-1,-1), 0.5, cor_borda),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_rodape3)

    doc.build(story)
    print("PDF de atividades (3 páginas com colorir) gerado com sucesso em:", pdf_path)

if __name__ == "__main__":
    gerar_pdf()
