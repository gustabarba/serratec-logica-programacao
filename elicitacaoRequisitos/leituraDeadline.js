// Calculadora de Páginas de leitura vs. Deadline (prazo final)
// O algoritmo proposto deve funcionar da seguinte maneira:
// Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está sendo saudado.
// Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem ser 1 ou maior.
// Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas decimais e arredondando para cima (ex: 2.4 = 3).
// Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está iniciando, em caso de:
// o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
// o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
// o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
// Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo usuário não pode ser o mesmo da recomendação.

const prompt = require('prompt-sync')();

var livro = prompt('Que livro você está lendo? '), 
    paginas = parseInt(prompt('Quantas páginas ele tem? ')), 
    prazo = parseInt(prompt('Em quantos dias você precisa terminar de ler? ')), 
    calculo = Math.round(paginas / prazo), 
    posicao = -1, texto, recomendados = [
        "Revolução Dos Bichos", 
        "O Alienista",
        "O Homem Invisível",
        "Eu, Robô",
        "Moby Dick", 
        "Duna"
    ];

if(prazo > 0){
    console.log('\nVocê precisa ler, pelo menos, ' + calculo + ' páginas por dia para terminar de ler no prazo.\n');
}
for(i = 0; i < recomendados.length; i++){
    if(livro.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() == recomendados[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()){
        posicao = i;
        break;
    }
}

if(paginas <= 100){
    texto = 'Leia também: ' + (posicao == 0 ? '' : '"' + recomendados[0] + '"') + (posicao == 0 || posicao == 1 ? '' : ', ') + (posicao == 1 ? '' : '"' + recomendados[1] + '"') + '.'; 
}else if(paginas <= 499){
    texto = 'Leia também: ' + (posicao == 2 ? '' : '"' + recomendados[2] + '"') + (posicao == 2 || posicao == 3 ? '' : ', ') + (posicao == 3 ? '' : '"' + recomendados[3] + '"') + '.';
}else{
    texto = 'Leia também: ' + (posicao == 4 ? '' : '"' + recomendados[4] + '"') + (posicao == 4 || posicao == 5 ? '' : ', ') + (posicao == 5 ? '' : '"' + recomendados[5] + '"') + '.';
}
console.log(texto);  
