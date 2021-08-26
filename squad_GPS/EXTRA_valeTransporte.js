/*
# Serratec - Parque Tecnológico Região Serrana
 *  Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: GPS - Group of Programming Students
 * Autor (Descrição): Gustavo Barbosa 
 * Arquivo: valeTransporte.js
 * Elaboração do Requsito: 22/08/2021
 
## Descrição:
Você foi contratado para desenvolver um sistema de vale transporte, que cobra tarifas diferentes de acordo com a a distância percorrida por cada passageiro. A empresa presta serviço em três modalidades: convencional, executivo e leito, e cobra por quilômetro rodado, respectivamente: R$0,24; R$0,30; R$0,40. 

O sistema aceita dois tipos de cartão: o dos motoristas, e o dos passageiros. 

No início da viagem, o motorista aproxima o cartão do validador, e informa duas coisas: a modalidade na qual vai trabalhar, e a distância total do trajeto, liberando o sistema para registrar cobranças. 

Para cobrar a tarifa, o sistema deve fazer dois tipos de leitura do cartão: de embarque, e desembarque. 

Na leitura de embarque, o sistema consulta a quilometragem na qual o veículo se encontra, e só deve admitir o passageiro caso ele possua saldo para cobrir, pelo menos, 40% do trajeto restante. Nesse momento, ele deve descontar a tarifa integral (como se o passageiro fosse até o último ponto).

Na leitura de desembarque, o sistema consulta novamente onde foi feito o embarque (não precisa guardar na memória interna, já fica gravado no cartão), subtrai da quilometragem atual, e calcula o valor a ser devolvido, ou debitado da próxima recarga, informando ao passageiro em ambas as situações.

Ao fim da viagem, o motorista aproxima novamente o seu cartão, para encerrar o turno. Nessa hora, caso ainda haja passageiros que não registraram o desembarque, o sistema deve informá-lo quantos são, e perguntar se ele deseja realmente proceder com o encerramento. Após encerrado o turno, o sistema deve mostrar um balanço da viagem, incluindo a quantidade total de pessoas transportadas, e o saldo total arrecadado.

Esse aqui é um extra que eu bolei e resolvi trocar pra não enrolar muito a galera.
Ainda têm alguns comportamentos indesejados, mas no geral funciona.

*/
const prompt = require('prompt-sync')();

var modalidade = '';
var operando = 0;
var distanciaTotal = 0;
var tarifaBase;
var totalPassageiros = 0;
var totalDesembarques = 0;
var totalSaldo = 0;

while(!operando){
    console.log('Cobrança inativa. Motorista, aproxime o cartão.');
    console.log('\nTipo de cartão:');
    console.log('"a" motorista');
    console.log('"b" passageiro');
    var dialogoTipoCartaoLogin = prompt('');
    switch(dialogoTipoCartaoLogin){
        case 'a':
            operando = 1;
            break;
        case 'b':
            console.log('\nDesculpe, a cobrança está fora de serviço. Espere o motorista iniciar o sistema.\n');
            break;
        default:
            console.log('\nDesculpe, tipo de cartão não reconhecido pelo sistema.\n');
    }
}

//Seleção de modalidade. Selecionar uma modalidade válida dá prosseguimento.
while(modalidade == ''){
    console.log('\nEscolha a modalidade da viagem:');
    console.log('"a" convencional');
    console.log('"b" executivo');
    console.log('"c" leito');
    var dialogoModalidade = prompt('');
    switch(dialogoModalidade){
        case 'a':
            modalidade = 'Convencional';
            tarifaBase = 0.24;
            break;
        case 'b':
            modalidade = 'Executivo';
            tarifaBase = 0.30;
            break;
        case 'c':
            modalidade = 'Leito';
            tarifaBase = 0.40;
            break;
        default:
            console.log('\nModalidade inválida! Digite "a" para convencional, "b" para executivo, ou "c" para leito.');
    }
}

//Definição de distância total. Inserir um valor inteiro ou decimal positivo dá prosseguimento.
while(distanciaTotal == 0){
    console.log('\nInsira a distância total da viagem.');
    distanciaTotal = parseFloat(prompt(''));
    if(Math.sign(distanciaTotal) != 1 || distanciaTotal == 0){
        console.log('\nDistância inválida! Insira um valor utilizando apenas dígitos positivos.');
        distanciaTotal = 0;
    }
}
//Bilhetagem iniciada. Esperando cobrança ou encerramento.
console.log('\nModalidade escolhida: ' + modalidade);
console.log('Distância total: ' + distanciaTotal + ' KM');
console.log('Bilhetagem iniciada com sucesso! Você já pode liberar o embarque de passageiros.');
console.log('Obs.: Motorista, para encerrar o turno, basta aproximar novamente o seu cartão.\n');

while(operando){
    console.log('\nAproxime o cartão');
    console.log('\nTipo de cartão:');
    console.log('"a" motorista');
    console.log('"b" passageiro');   
    var dialogoTipoCartaoOperacao = prompt('');
    switch(dialogoTipoCartaoOperacao){
        case 'a':
            //motorista tentando encerrar o turno
            var naoDesembarcados = totalPassageiros - totalDesembarques;
            if(naoDesembarcados > 0){
                console.log('\nAinda há ' + naoDesembarcados + ' passageiros que não registraram o desembarque.');
                console.log('Deseja proceder com o encerramento do turno?');
                console.log('"n" não');
                console.log('"s" sim');  
                if(prompt('') == 's'){
                    operando = 0;
                }
            }else{   
                console.log('\nO turno vai ser encerrado. Deseja confirmar?');
                console.log('"n" não');
                console.log('"s" sim');  
                if(prompt('') == 's'){
                    operando = 0;
                }
            }
            break;
        case 'b':
            console.log('\nEmbarque ou desembarque?\n');
            console.log('"a" embarque');
            console.log('"b" desembarque');
            var tipoEvento = prompt('');
            switch(tipoEvento){
                case 'a':
                    console.log('\nQuilometro do trajeto:\n');
                    var kmAtual = parseFloat(prompt(''));
                    console.log('\nSaldo do cartão:\n');
                    var saldoCartao = parseFloat(prompt(''));
                    var tarifaIntegral = (distanciaTotal - kmAtual) * tarifaBase;
                    // console.log(saldoCartao, 'saldo');
                    // console.log(tarifaIntegral, 'tarifa integral');
                    // console.log(tarifaIntegral * 0.4, '40%');
                    // console.log(Math.sign(saldoCartao) != -1, 'saldo positivo?');
                    // console.log(Math.sign(kmAtual) != -1, 'km positivo?', kmAtual);
                    // console.log(kmAtual < distanciaTotal, 'km menor que fim?');
                    // console.log(saldoCartao >= tarifaIntegral * 0.4, 'suficiente p/ 40?');
                    if(Math.sign(kmAtual) != -1 && saldoCartao >= (tarifaIntegral * .5) && kmAtual < distanciaTotal){
                        console.log('\nFoi descontado do seu saldo o valor da tarifa integral (R$' + tarifaIntegral + ').');
                        console.log('Não se esqueça de validar o cartão na saída.');
                        console.log('\nBoa viagem!');
                        totalSaldo += tarifaIntegral;
                        totalPassageiros++;
                    }else{
                        console.log('\nDesculpe, saldo insuficiente para realizar a viagem.');
                        console.log('Vá até um de nossos pontos de recarga, ou utilize nosso App.');
                    }
                    break;
                case 'b':
                    console.log('\nQuilômetro onde foi feito o embarque:\n');
                    var kmEmbarque = parseFloat(prompt(''));
                    console.log('\nQuilometro do desembarque:\n');
                    var kmAtual = parseFloat(prompt(''));
                    console.log('\nSaldo do cartão:\n');
                    var saldoCartao = parseFloat(prompt(''));
                    var tarifaIntegral = (distanciaTotal - kmEmbarque) * tarifaBase;
                    var tarifaReal = (kmAtual - kmEmbarque) * tarifaBase;
                    var diferencaSaldo = tarifaIntegral - tarifaReal;
                    var saldoCorrigido = saldoCartao + diferencaSaldo;
                    if(Math.sign(kmAtual) != -1 && kmAtual <= distanciaTotal && Math.sign(saldoCorrigido) != -1){
                        if(saldoCorrigido > 0) {
                            console.log('\nR$' + diferencaSaldo + ' foram devolvidos ao seu saldo.');
                        }else{
                            console.log('\nTudo OK! Nenhum valor a ser devolvido.');
                        }
                        saldoCartao += diferencaSaldo;
                        console.log('Saldo atual: ' + saldoCartao);
                        totalSaldo -= diferencaSaldo;
                        
                    }else{
                        console.log('\nR$' + (diferencaSaldo * -1) + ' serão descontados da próxima recarga.');
                        totalSaldo -= saldoCorrigido;
                    }
                    console.log('Até a próxima!');
                    totalDesembarques++;
                    break;
                default:
                    console.log('\nEvento desconhecido.\n');
            }

            break;
        default:
            //cartão inválido
            console.log('Cartão inválido');
            break;
    }
}
console.log('\nTurno encerrado com sucesso.\n');
console.log('\nBalanço da viagem');
console.log('Passageiros transportados: ' + totalPassageiros);
console.log('Total arrecadado: ' + totalSaldo);

