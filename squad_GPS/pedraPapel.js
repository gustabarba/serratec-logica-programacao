/*
# Serratec - Parque Tecnológico Região Serrana
 *  Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: GPS - Group of Programming Students
 * Autor (Descrição): Gustavo Barbosa 
 * Arquivo: pedraPapel.js
 * Elaboração do Requsito: 22/08/2021
 
## Descrição:
Escreva uma "inteligência artificial" que jogue pedra-papel-tesoura contra o usuário, mostre o placar e descreva o que aconteceu a cada rodada (ex.: tesoura corta papel, ponto para você!), e mostre quem venceu após 7 rodadas válidas (empates não contam).  
*/
const prompt = require('prompt-sync')();

var rodada = 1;
var placarComputador = 0;
var placarUsuario = 0;

while(rodada <= 7){
    console.log('Essa é a rodada ' + rodada);
    console.log('Escolha "1" para pedra, "2" para papel, ou "3" para tesoura');
    escolhaUsuario = prompt('');
    escolhaComputador = Math.trunc(Math.random() * 3) + 1;
    if(escolhaUsuario == escolhaComputador){
        console.log('\nPlacar:\nVocê: ' + placarUsuario + '\nComputador: ' + placarComputador + '\n');
        console.log('\nFoi um empate, repita a rodada\n'); 
    }else{
        var valida = 0;
        switch(escolhaUsuario){
            case '1':
                if(escolhaComputador == 3){
                    placarUsuario++;
                    console.log('\nPedra quebra tesoura, ponto para você!');
                }else{
                    placarComputador++;
                    console.log('\nPapel enrola pedra, ponto para o computador!');
                }
                valida++;
                break
            case '2':
                if(escolhaComputador == 1){
                    placarUsuario++;
                    console.log('\nPapel enrola pedra, ponto para você!');
                }else{
                    placarComputador++;
                    console.log('\nTesoura corta papel, ponto para o computador!');
                }
                valida++;
                break
            case '3':
                if(escolhaComputador == 2){
                    placarUsuario++;
                    console.log('\nTesoura corta papel, ponto para você!');
                }else{
                    placarComputador++;
                    console.log('\nPedra quebra tesoura, ponto para o computador!');
                }
                valida++;
                break 
            default:
                console.log('\nEscolha um número válido!\n');
        }
        if(valida == 1){
            console.log('\nPlacar:\nVocê: ' + placarUsuario + '\nComputador: ' + placarComputador + '\n');
            rodada++;
        }
    }
}
if(placarUsuario > placarComputador){
    console.log('Parabéns, você ganhou!');
}else{
    console.log('Que pena, você perdeu. Mais sorte na próxima!');
}

console.log('\nPlacar final:\nVocê: ' + placarUsuario + '\nComputador: ' + placarComputador + '\n');