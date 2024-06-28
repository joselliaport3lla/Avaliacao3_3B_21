const caixaPrincipal = document.querySelector(‘.caixa-principal’);
const caixaPerguntas = document.querySelector(‘.caixa-perguntas’);
const caixaAlternativas = document.querySelector(‘.caixa-alternativas’);
const caixaResultado = document.querySelector(‘.caixa-resultado’);
const textoResultado = document.querySelector(‘.texto-resultado’);

const perguntas = [ //abre lista de perguntas
    { //abre objeto de pergunta
        enunciado: “Insira o enunciado da Pergunta 1”,
        alternativas: [“Alternativa 1”, “Alternativa 2”]
    }, //fecha objeto de pergunta

    { //abre objeto de pergunta
        enunciado: "Insira o enunciado da Pergunta 2",
        alternativas: ["Alternativa 1", "Alternativa 2"]
    } //fecha objeto de pergunta

    { //abre objeto de pergunta
        enunciado: "Insira o enunciado da Pergunta 3",
        alternativas: ["Alternativa 1", "Alternativa 2"]
    } //fecha objeto de pergunta
] //fecha lista de prguntas

let atual = 0;
let perguntaAtual;