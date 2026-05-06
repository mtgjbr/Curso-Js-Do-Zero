// bloco de código que executa uma ação, normalmente pegando um valor e devolvendo outro
function saudação(nome) { //cria um paramentro
  return `Bom dia ${nome}!` //return encerra a função
 //variaveis de dentro são locais da função, não podendo ser acessadas de fora
} //corpo da função

const variavel =saudação("junin"); //insere o argumento para o parametro
saudação("maria") // não aparece nada na tela mas ele executou
console.log(variavel); //qualquer função retorna por padrão undefined
 

function soma ( x=1,y=1){ //caso não seja enviado nenhum outro valor ele assume esses
    const resultado = x + y;
    return resultado;
}
console.log(soma(2,2));


// função anonima
const raiz = function (n){ // a variavel raiz recebe a função
 return n ** 0.5
}; 
console.log(raiz(9));
//arroy function
const subtracao  = (x,y) => x - y;

console.log(subtracao(5,3))