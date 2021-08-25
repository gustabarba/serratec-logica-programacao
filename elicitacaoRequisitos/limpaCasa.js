// # Serratec - Parque Tecnológico Região Serrana
// ● Lógica de Programação - Prof. Moises do Amaral Baddini
// ● Atividade: Elicitação de Requisitos
// ● Autor (Descrição): Rafael Alves.
// ● Squad de Origem (Requisito): “Dsd” dragon slayer developers (Squad 5)
// ● Data: 23/08/2021
// ## Descrição:
// Limpar a casa. Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o cômodo esta limpo ou não, exibindo uma mensagem no console para cada cômodo que for da sua escolha.

const prompt = require('prompt-sync')();

var isSujo = [
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random())
]

console.log('Escolha um cômodo:');
console.log('1: sala');
console.log('2: cozinha');
console.log('3: quarto');
console.log('4: banheiro');
console.log('5: varanda');

var escolhido = prompt();

var isLimpo = isSujo[escolhido - 1]? 'Precisa limpar.' : 'Não precisa limpar';
console.log(isLimpo);





