// A “continha oposta” lê um número e mostra seu valor negativo.
const prompt = require('prompt-sync')();

var numero = parseInt(prompt('Número a ser convertido: '));
if(Math.sign(numero) != -1){
    console.log('-' + numero);
}else{
    console.log((numero * -1));
};
