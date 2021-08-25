// # Serratec - Parque Tecnológico Região Serrana
// ● Lógica de Programação - Prof. Moises do Amaral Baddini
// ● Atividade: Elicitação de Requisitos
// ● Autor (Descrição): Marcos Moraes
// ● Squad de Origem (Requisito): Time NSMN (Squad 6)
// ● Arquivo: barraquinhaZepa.js
// ● Data: 22/08/2021
// ## Descrição:
// Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito,
// bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem
// paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso,
// avisando sobre Tudo que ele vende. Quando alguém escolhe um item que ele tem na
// barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou
// café, ele confessa seus vícios e pede desculpa pois devorou o estoque. E se o cliente pedir
// algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto
// válido.
// Dica: Use paçoca como "pacoca" e café como "cafe".

const prompt = require('prompt-sync')();

console.log('O que você quer comprar?');
var opcao = prompt('"a": bala, "b": pirulito, "c" bombom, "d": paçoca, ou "e": jujuba? ').toLocaleLowerCase();

switch(opcao){
    case 'a':
    case 'b':
    case 'c':
    case 'd':
    case 'e':
        console.log('Obrigado pela compra!');
        break;
    case 'pacoca':
    case 'cafe':
    case 'paçoca':
    case 'café':
        console.log('Desculpe, devorei o estoque.');
        break;
    default:
        console.log('Escolha um produto válido!');
}
