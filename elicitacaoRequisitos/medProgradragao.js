// # Serratec - Parque Tecnológico Região Serrana
//  *  Lógica de Programação - Prof. Moises do Amaral Baddini
//  * Atividade: Elicitação de Requisitos
//  * Squad: GPS - Group of Programming Students
//  * Autor (Descrição): Pedro Ricardo
//  * Arquivo: medProgradragao.js
//  * Elaboração do Requsito: 20/08/2021

// ## Descrição:

// Calcular a média final dos alunos do Serratec da Disciplina de Lógica de Programação usando média ponderada. 

// Você deverá receber pelo seu terminal 4 notas com valores entre 0 e 10 e depois deverá obter
// 4 pesos entre 1 e 5 para cada nota respectivamente. Após atribur cada valor para uma variável,
// você deverá calcular a média ponderada usando essas informações coletadas pelo seu programa.

// Se o resultado da sua média for menor que 5, deverá aparecer em seu terminal essa
// seguinte mensagem: Reprovado! Infelizmente, o Progradragão venceu dessa vez, porém, nunca desista!

// Se o resultado da sua média for maior que 5 e menor que 7, deverá aparecer em seu terminal essa
// seguinte mensagem: Recuperação! Estude bastante para vencer o Progradragão!

// Se o resultado da sua média for maior que 7 é porque você foi aprovado, e se isso ocorrer, seu
// sistema deverá exibir no terminal algumas informações.

// Linha 1: Resultado da média final
// Linha 2: Sua média final é maior que 7! Você foi aprovado!

// Em seguida, seu sistema deverá perguntar o nome do guerreiro que venceu o Progradragão e atribuir
// esse valor em uma variável. Depois disso, bastará exibir em seu terminal:

// Parabéns, NOME! O tio Zepá está muito feliz que você tanha vencido o Progradragão!
// OBS: No lugar de nome, deverá aparecer o nome armazenado em sua váriavel na etapa anterior.

const prompt = require('prompt-sync')();

var nota1 = parseInt(prompt('De 0 a 10, qual foi sua nota na primeira prova? '));
var nota2 = parseInt(prompt('De 0 a 10, qual foi sua nota na segunda prova? '));
var nota3 = parseInt(prompt('De 0 a 10, qual foi sua nota na terceira prova? '));
var nota4 = parseInt(prompt('De 0 a 10, qual foi sua nota na quarta prova? '));

var peso1 = parseInt(prompt('De 1 a 5, qual era o peso da prova 1? '));
var peso2 = parseInt(prompt('De 1 a 5, qual era o peso da prova 2? '));
var peso3 = parseInt(prompt('De 1 a 5, qual era o peso da prova 3? '));
var peso4 = parseInt(prompt('De 1 a 5, qual era o peso da prova 4? '));

var media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4)) / (peso1 + peso2 + peso3 + peso4);

if(media < 5){
    console.log('Reprovado! Infelizmente, o Progradragão venceu dessa vez, porém, nunca desista!');
}else if(media >= 5 && media < 7){
    console.log('Recuperação! Estude bastante para vencer o Progradragão!');
}else{
    var nome = prompt('Qual seu nome, guerreiro? ');
    console.log('Parabéns, ' + nome + '! O tio Zépa está muito feliz que você tanha vencido o Progradragão!');
}
console.log('Sua média final é: ' + media);



