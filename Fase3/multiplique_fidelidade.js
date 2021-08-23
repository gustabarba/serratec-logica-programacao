// O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.
// Digite seus cupons: 12
// Seus cupons agora valem 36 pontos!

const prompt = require('prompt-sync')();

var cupons = prompt('Digite seus cupons: ');
console.log('Seus cupons agora valem ' + (cupons*3) + ' pontos!');