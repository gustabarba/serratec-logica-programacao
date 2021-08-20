var prompt = require("prompt-sync")();

var A = prompt("Possui habilitação A? S/N") == "S";
var B = prompt("Possui habilitação B? S/N") == "S";
var C = prompt("Possui habilitação C? S/N") == "S";

var temAsTres = A && B && C;
var resposta = "";
if (temAsTres) {
  resposta = "Você é motorista profissional.";
} else {
  resposta = "Você não é motorista profissional.";
}
console.log(resposta);
console.log(resposta);
