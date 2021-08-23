const prompt = require('prompt-sync')();

var modalidade = '';
var operando = 0;
var distanciaTotal = 0;
var tarifaBase;
var totalPassageiros = 0;
var totalDesembarques = 0;
var totalSaldo = 0;

//Aguardando iniciar operação. O cartão do motorista dá prosseguimento.
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
                    if(Math.sign(kmAtual) != -1 && saldoCartao >= tarifaIntegral * 0.4 && kmAtual < distanciaTotal){
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
                    var diferencaSaldo = tarifaIntegral - tarifaReal + saldoCartao;
                    if(Math.sign(kmAtual) != -1 && kmAtual <= distanciaTotal && Math.sign(saldoCartao + diferencaSaldo) != -1){
                        console.log('\nR$' + diferencaSaldo + ' foram devolvidos ao seu saldo.');
                        saldoCartao += diferencaSaldo;
                        console.log('Saldo atual: ' + saldoCartao);
                        console.log('Até a próxima!');
                        totalSaldo -= diferencaSaldo;
                        
                    }else{
                        console.log('\nR$' + diferencaSaldo + ' serão descontados da próxima recarga.');
                        console.log('Até a próxima!');
                        totalSaldo -= diferencaSaldo;
                    }
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

