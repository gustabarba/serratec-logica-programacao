// O programa “Tempo de vida” irá imprimir a soma das idades de todos os colegas do seu squad. Pergunte a cada um a idade e não esqueça a sua! Depois faça a atribuição da expressão que você montou em uma variável inteira.
var idades = [
    16, 21, 20, 47, 21, 20
]
var soma = 0;
for(i = 0; i < idades.length; i++){
    soma += idades[i];
}
console.log('Somadas todas as idades do pessoal do meu squad (GPS), obtém-se ' + soma + ' anos.');
