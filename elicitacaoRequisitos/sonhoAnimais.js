// # Serratec - Lógica de Programação
// Lógica de Programação - Prof. Moises do Amaral Baddini
// Atividade: Elicitação de Requisitos
// Squad de Origem (Requisito): Rock n' Beer (Squad 4)
// Autor (Descrição): Gustavo J. Barros
// Arquivo: sonhoAnimais.js
// Elaboração do Requisito: 22/08/2021
// ## Descrição:
// Sempre tem aquela pessoa que sonha com algum animal e alguém fala para você jogar.
// Como a IA costuma ter a cabeça nas nuvens, ela pode sonhar também com vários animais
// e diversas vezes. Será que o Animal que você sonhou é o mesmo da nossa IA?


// ## Dicas:
// Crie uma função para gerar os números aleatórios.
// Diga sempre qual é o animal sorteado
// Diga se ele acertou ou não
// Dê uma nova chance até ele acertar.

const prompt = require('prompt-sync')();

var idxBichoUsuario, 
    idxBichoPc, 
    acertou = false,
    bichos = [
        'cavalo',
        'boi',
        'porco',
        'cachorro',
        'gato',
        'passarinho',
        'peixe'
    ];

while(!acertou){
    console.log('\nCom qual bicho você sonhou? (Insira apenas números)');
    console.log('-----------------------------------------------------');

    for(i = 0; i < bichos.length; i++){
        var opcao = (i + 1) + ') ' + bichos[i];
        console.log(opcao);
    }
    console.log();
    idxBichoUsuario = parseInt(prompt()) - 1;
    idxBichoPc = Math.trunc(Math.random() * bichos.length);
    acertou = idxBichoUsuario == idxBichoPc
    if(idxBichoUsuario > -1 && (idxBichoUsuario + 1) < 8){
        if(acertou){
            console.log('\nEu também sonhei com ' + bichos[idxBichoPc] + '!');
        }else{
            console.log('\nVocê sonhou com ' + bichos[idxBichoUsuario] + ', e eu sonhei com ' + bichos[idxBichoPc] + '.');
        }
    }else{
        console.log('\nEscolha um bicho válido!');
    }
}

