// Serratec - Lógica de programação - 2021.2
// Professor: Moisés do Amaral Baddini.
// Atividade: Elicitação de requisitos.
// Squad: Esquadrão TICida.
// Componentes: Carolina Tardin, Carlos Alberto Rodrigues, Diego Faria, Gilnei Lima, Leandro Fita, Marcella Alzuguir
// Autor da proposta: Leandro Fita
// Data: 21/08/2021

// Máquina de Refrigerantes.
// Uma famosa empresa de refrigerantes precisa de um software para rodar no console das suas novas máquinas pela cidade. O cliente precisa que o console máquina de refrigerante exiba quatro opções de sabores diferentes, ficando a critério do(a) desenvolvedor(a) exibir os preços dos refrigerantes junto com o sabor ou exibir o preço do refrigerante escolhido em uma tela posterior. Caso opte por exibir o valor do produto escolhido em uma tela posterior, será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de sabores após verificar o preço do produto escolhido. Após a tela de escolha, o software deve exibir uma tela para pagamentos apresentando quatro opções de cédulas. Após o cliente escolher a opção de pagamento, o programa deve exibir uma mensagem com o troco a ser devolvido para o cliente. Porém, caso o valor da cédula escolhida seja inferior ao valor do refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o usuário novamente para a tela de escolha das cédulas até que uma opção de pagamento válida seja escolhida.
// Os refrigerantes possuem os seguintes preços:
// •    R$ 1,99
// •    R$ 3,50
// •    R$3,99
// •    R$6,00
// O cliente deseja opções de pagamentos com as seguintes cédulas:
// •    R$ 2,00
// •    R$5,00
// •    R$10,00
// •    R$20,00

const prompt = require('prompt-sync')();

console.log('\n\nMÁQUINA DE BRAHMA');
console.log('------------------------');
console.log('Em qual tamanho você quer?');
console.log('1) latinha 269ML - R$1,99');
console.log('2) lata 350ML - R$3,50');
console.log('3) latão 473ML - R$3,99');
console.log('4) super latão 700ML - R$6,00');

var bebida = prompt();
console.log('Insira uma das seguintes cédulas:');
console.log('1) R$2,00');
console.log('2) R$5,00');
console.log('3) R$10,00');
console.log('4) R$20,00');

var pagtoOK = 0;
while(!pagtoOK){
    var cedula = prompt();
    switch(cedula){
        case '1':
            switch(bebida){
                case '1':
                    pagtoOK++;
                    console.log('OK, troco zero.');
                    break;
                case '2':
                case '3':
                case '4':
                    console.log('Insira outra nota!');
                    break;
            }
            break;
        case '2':
            switch(bebida){
                case '1':
                    pagtoOK++;
                    console.log('Seu troco é R$3,01');
                    break;
                case '2':
                    pagtoOK++;
                    console.log('Seu troco é R$1,50');
                    break;
                case '3':
                case '4':
                    pagtoOK++;
                    console.log('Seu troco é R$1,01');
                    break;
            }
            break;
        case '3':
            pagtoOK++;
            switch(bebida){
                case '1':
                    console.log('Seu troco é R$8,01');
                    break;
                case '2':
                    console.log('Seu troco é R$6,50');
                    break;
                case '3':
                    console.log('Seu troco é R$6,01');
                    break;
                case '4':
                    console.log('Seu troco é R$4,00');
                    break;
            }
            break;
        case '4':
            pagtoOK++;
            switch(bebida){
                case '1':
                    console.log('Seu troco é R$18,01');
                    break;
                case '2':
                    console.log('Seu troco é R$16,50');
                    break;
                case '3':
                    console.log('Seu troco é R$16,01');
                    break;
                case '4':
                    console.log('Seu troco é R$14,00');
                    break;
            }
            break;
    }
};

// sim, esse monte de switch foi burrice, eu tava cansado. 



