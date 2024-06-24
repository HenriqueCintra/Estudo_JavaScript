Estudo de JavaScript

Este repositório foi criado com o intuito de armazenar todos os códigos desenvolvidos durante um curso de desenvolvimento front-end, com ênfase nas tecnologias JavaScript, HTML e CSS. A seguir, detalho os principais tópicos e conceitos estudados até o momento, organizados por categorias e subcategorias, incluindo exemplos práticos e explicações detalhadas.

Estrutura de Comando de Fluxo

Condicionais
if, else if, else

O uso de estruturas condicionais é fundamental para a tomada de decisões no código. Em JavaScript, as estruturas if, else if e else são amplamente utilizadas.

Exemplo:

javascript
Copiar código
let hora = 10;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
switch
A estrutura switch é uma alternativa ao uso de múltiplos if else, facilitando a leitura e manutenção do código quando há diversas condições.

Exemplo:

javascript
Copiar código
let dia = 3;
let diaDaSemana;

switch (dia) {
    case 1:
        diaDaSemana = "Domingo";
        break;
    case 2:
        diaDaSemana = "Segunda-feira";
        break;
    case 3:
        diaDaSemana = "Terça-feira";
        break;
    default:
        diaDaSemana = "Dia inválido";
}

console.log(diaDaSemana);
Estruturas de Repetição

for
A estrutura de repetição for é usada para executar um bloco de código um número específico de vezes.

Exemplo:

javascript
Copiar código
for (let i = 0; i < 5; i++) {
    console.log(`Iteração ${i}`);
}
while
O laço while continua a execução enquanto uma condição específica é verdadeira.

Exemplo:

javascript
Copiar código
let i = 0;

while (i < 5) {
    console.log(`Iteração ${i}`);
    i++;
}
do...while
Semelhante ao while, mas a condição é verificada após a execução do bloco de código, garantindo que o bloco seja executado pelo menos uma vez.

Exemplo:

javascript
Copiar código
let i = 0;

do {
    console.log(`Iteração ${i}`);
    i++;
} while (i < 5);
Funções

Declaração de Funções
As funções são blocos de código reutilizáveis que podem ser definidos uma vez e executados diversas vezes.

Exemplo:

javascript
Copiar código
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Maria"));
Funções Anônimas
Funções anônimas são funções sem nome que podem ser atribuídas a variáveis ou passadas como argumentos.

Exemplo:

javascript
Copiar código
const soma = function(a, b) {
    return a + b;
};

console.log(soma(5, 3));
Arrow Functions
Arrow functions são uma sintaxe mais concisa para escrever funções em JavaScript.

Exemplo:

javascript
Copiar código
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 7));
HTML e CSS

Integração com JavaScript
Além de JavaScript, também estudei a integração deste com HTML e CSS, possibilitando a criação de páginas web dinâmicas e estilizadas.

Manipulação do DOM

Exemplo:

javascript
Copiar código
document.getElementById("meuBotao").addEventListener("click", function() {
    document.getElementById("meuTexto").innerHTML = "Texto alterado!";
});
Estilização Dinâmica

Exemplo:

javascript
Copiar código
document.getElementById("meuBotao").addEventListener("click", function() {
    document.getElementById("meuTexto").style.color = "red";
});
Conclusão

Este repositório representa o progresso no estudo de JavaScript e tecnologias associadas. A cada novo tópico aprendido, novos exemplos e práticas são adicionados, facilitando a revisão e aplicação do conhecimento adquirido. O foco está em consolidar uma base sólida em desenvolvimento front-end, preparando para projetos mais complexos e desafiadores no futuro.
