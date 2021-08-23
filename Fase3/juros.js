// Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.

var somaJogos = 345;
var valorVideogame = 1545;
var total = somaJogos + valorVideogame;
console.log('O valor de cada parcela em 3x sem juros é de R$'+ (total/3) + '.');
console.log('O valor de cada parcela em 5x sem juros é de R$'+ (total/5) + '.');
console.log('O valor de cada parcela em 10x com 1,5% de juros é de R$' + ((total/10)+(total/10*0.015) + '.'));


