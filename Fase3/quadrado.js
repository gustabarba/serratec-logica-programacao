// O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.

const prompt = require('prompt-sync')();

var nume = parseInt(prompt('A ser elevado ao quadrado: '));
console.log('O quadrado de ' + nume + ' é ' + (nume*nume) + '.');