// Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.

const prompt = require('prompt-sync')();

var carrinho = prompt('Quantos produtos você vai comprar? ');
console.log('Parabéns por comprar ' + carrinho + ' produtos!');