// O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.
const prompt = require('prompt-sync')();

var temperaturaCelcius = prompt('Temperatura em celcius: ');
console.log('A temperatura em Fahrenheit é ' + (temperaturaCelcius * 1.8) + '°F.');