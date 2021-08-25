// # Serratec - Parque Tecnológico Região Serrana
//  *  Lógica de Programação - Prof. Moises do Amaral Baddini
//  * Atividade: Elicitação de Requisitos
//  * Squad: GPS - Group of Programming Students
//  * Autor (Descrição): Daniel Cesar
//  * Arquivo: signoUsuario.js
//  * Elaboração do Requsito: 20/08/2021

// ## Descrição:

// Solicite o nome e a  data de nascimento do usuário. Com essas informações, será gerado o signo e uma descrição genérica e aleatória de sua personalidade.

const prompt = require('prompt-sync')();

var nascimento = prompt('Quando você nasceu? (em números: dd/mm/aa) '), 
    signo,
    dia = nascimento.split('/')[0], 
    mes = nascimento.split('/')[1], 
    ano = nascimento.split('/')[2],
    descricoes = [
        'Motiva as pessoas e é prestativo, além de perseverante e apaixonado.',
        'Se coloca em primeiro lugar, mas sem esquecer dos demais à sua volta!',
        'Tem a mente aberta e é muito esperto.',
        'Cuidadoso com tudo e com todos, é paciente e produtivo.',
        'Animado e comunicativo, tem a mente aberta e é muito esperto.',
        'Dedicado e gentil, sempre ouvindo ou cuidando de alguém por perceber suas emoções e problemas.',
        'Quando coloca algo na mente, vai até o fim para conquistar.',
        'Bastante atencioso e sincero com os demais e está sempre resolvendo um problema: seja seu ou dos outros.',
        'Signo mais equilibrado e indeciso do zodíaco.',
        'Sincero e busca ponderar sempre para chegar no melhor resultado.',
        'De uma auto-confiança invejável, tem muita intuição e um instinto protetor maravilhoso.',
        'Gosta de se divertir e tem bastante espontaneidade e vitalidade.',
        'Sua organização e ambição natas fazem com que seja muito eficiente e trabalhador.'
    ];

if((dia >= 21 && mes == 01) || (dia <= 18 && mes == 02)){
    signo = 'Aquário';
}
if((dia >= 19 && mes == 02) || (dia <= 20 && mes == 03)){
    signo = 'Peixes';
}
if((dia >= 21 && mes == 03) || (dia <= 20 && mes == 04)){
    signo = 'Áries';
}
if((dia >= 21 && mes == 04) || (dia <= 20 && mes == 05)){
    signo = 'Touro';
}
if((dia >= 21 && mes == 05) || (dia <= 20 && mes == 06)){
    signo = 'Gêmeos';
}
if((dia >= 21 && mes == 06) || (dia <= 22 && mes == 07)){
    signo = 'Câncer';
}
if((dia >= 23 && mes == 07) || (dia <= 22 && mes == 08)){
    signo = 'Leão';
}
if((dia >= 23 && mes == 08) || (dia <= 22 && mes == 09)){
    signo = 'Virgem';
}
if((dia >= 23 && mes == 09) || (dia <= 22 && mes == 10)){
    signo = 'Libra';
}
if((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)){
    signo = 'Escorpião';
}
if((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)){
    signo = 'Sagitário';
}
if((dia >= 22 && mes == 12) || (dia <= 20 && mes == 01)){
    signo = 'Capricórnio';
}
console.log('Você é de ' + signo + '.');
console.log(descricoes[Math.trunc(Math.random() * descricoes.length)]);
