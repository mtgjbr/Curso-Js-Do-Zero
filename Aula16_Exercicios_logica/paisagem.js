// Escreva uma função chamada ePaisgem que recebe dois argumentos
// largura e altura de uma imagem(number)
// retorne true se a imagem estiver no modo paisagem


const altura= 12;
const largura = 15

function ePaisagem(altura,largura){
 return largura > altura ? "é paisagem" : "Não é paisagem"; // sem variavel criada, direto no return a resposta do console log vai ser ele
 
};
console.log(ePaisagem(altura,largura));

const ePaisagem2 = (altura,largura) => largura > altura ;  //versão professor
 // arrow function

console.log(ePaisagem2(altura,largura));