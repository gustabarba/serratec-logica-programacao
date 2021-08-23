// Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.

const prompt = require('prompt-sync')();

var nume = parseInt(prompt('Numerador: '));
var deno = parseInt(prompt('Denominador: '));
console.log(nume + ' mais ' + deno + ' é igual a ' + (nume+deno) + '.');
console.log(nume + ' menos ' + deno + ' é igual a ' + (nume-deno) + '.');
console.log(nume + ' vezes ' + deno + ' é igual a ' + (nume*deno) + '.');
console.log(nume + ' dividido por ' + deno + ' é igual a ' + (nume/deno) + '.');