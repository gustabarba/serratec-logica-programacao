// Qual frase da sensitiva Marcia Fernendes você seria. Solicitando dia que você nasceu, mês de nascimento e cor da camiseta.

// As frases são:
// "Tem fantasma que não quer nem ficar perto de nós, porque ele acha que a gente tá pior que ele!"
// “para de ser doida!”
// "Um morto-vivo não dá um bom dia alegre pra ninguém! E eu tô falando com você mesmo!"
// "Uma pessoa que só reclama... Ela tem encosto!"
// "Eles ficam no esgoto... Eles quem? Os dragões!"
// "O café é forte! Ele afronta almas das trevas!"
// "A inveja gruda nos azulejos!"
// “Uma mulher inteligente não perde a doçura por maior que seja a burrice do homem.”
// “Quer ser feliz ou ter razão?”
// “Não me julgue nem me subestime, posso fazer você acreditar no seu julgamento.”
// “Aceite e assuma sua realidade, esqueça o passado, a vida é aqui e agora! O ontem já passou e o amanhã talvez nem venha. 
// Viva o presente.”
// “Nem rato aguenta ficar num ambiente onde tem gente sugando a energia dos outros”

const prompt = require('prompt-sync')();

var diaNasc = parseInt(prompt('Informe o dia em que você nasceu (em números de 1 a 31): '));
var mesNasc = parseInt(prompt('Informe o mês em que você nasceu (em números de 1 a 12): '));
var anoNasc = parseInt(prompt('Informe o ano em que você nasceu (em números de 4 casas): '));

var frases = [
    "Tem fantasma que não quer nem ficar perto de nós, porque ele acha que a gente tá pior que ele!",
    "Para de ser doida!",
    "Um morto-vivo não dá um bom dia alegre pra ninguém! E eu tô falando com você mesmo!",
    "Uma pessoa que só reclama... Ela tem encosto!",
    "Eles ficam no esgoto... Eles quem? Os dragões!",
    "O café é forte! Ele afronta almas das trevas!",
    "A inveja gruda nos azulejos!",
    "Uma mulher inteligente não perde a doçura por maior que seja a burrice do homem.",
    "Quer ser feliz ou ter razão?",
    "Não me julgue nem me subestime, posso fazer você acreditar no seu julgamento.",
    "Aceite e assuma sua realidade, esqueça o passado, a vida é aqui e agora! O ontem já passou e o amanhã talvez nem venha.",
    "Viva o presente.",
    "Nem rato aguenta ficar num ambiente onde tem gente sugando a energia dos outros."
]
var numeroDoido = diaNasc + mesNasc + anoNasc;
var escolhida;

while(numeroDoido > 0){
    for(i = 0; i < frases.length && numeroDoido > 0; i++){
        numeroDoido--;
        escolhida = i;
    }
};
console.log(frases[escolhida]);






