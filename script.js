const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é a favor da COTA RACIAL?",
        alternativas: [
            "Sim, com certeza!",
            "Não, um vexame!"
        ]
    },
    {
        enunciado: "Você acredita que o sistema de cotas é justo?",
        alternativas: [
            "Sim, pois serve muito bem como uma inclusão e compensasão histórica.",
            "Não! A Cota Racial demonstra inferioridade a certas etnias/raças em inclusões sociais e profissionais, aonde pessoas ganham sem mérito próprio.",
        ]
    },
    {
        enunciado: "Para você, as Cotas para as universidade, irão ajudar a diminuir o racismo e dicriminação?",
        alternativas: [
            "Sim, pois com essas oportunidade poderão incluir outras pessoas  a grandes instituições de ensino a fim de terem uma boa educação e consequentemente diminuir a discriminação.",
            "Não. Mesmo tendo oportunidades para se adentrarem a grandes instituições de ensino, isso não diminuiria a dicriminação social, e também, de certo modo, poderia até aumentar a discriminação."
        ]
    },
    {
        enunciado: "Você utilizaria o sistema de Cotas Raciais?",
        alternativas: [
            "Sim, pois me beneficiaria bastante e justo.",
            "Não, pois não me beneficiaria e/ou não acho muito justo."
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();