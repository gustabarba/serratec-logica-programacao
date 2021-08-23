// O programa "Ryuju Okada" escreve na tela o resultado das expressões abaixo:
// 2 + 3 - 5 * 8 - 4 + 354 - 521 + 7 * 66
// 2 + 7 * (14 - 21) + 28 * 3 * 42 + 740 - (156 + 4 + 40) * 9

var resultadoA = 2 + 3 - 5 * 8 - 4 + 354 - 521 + 7 * 66;
var resultadoB = 2 + 7 * (14 - 21) + 28 * 3 * 42 + 740 - (156 + 4 + 40) * 9;

// deixei as expressões literalmente como estavam, pois achei que essa era a proposta. 
// poderia ter reescrito elas usando precedência matemática nas multiplicações

console.log('O resultado da primeira expressão é: ' + resultadoA);
console.log('O resultado da segunda expressão é: ' + resultadoB);