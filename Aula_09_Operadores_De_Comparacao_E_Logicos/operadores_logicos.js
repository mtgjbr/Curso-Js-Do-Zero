/**
 * Operadores Lógicos
 * && -> AND -> E  --> todas as expressões precisam ser verdadeira para retornar true 
 * || -> OR -> OU  --> apenas uma das duas expressões precisa retorna verdadeira, a expressão retorna true
 * !  -> NOT -> Não--> inverte o valor
 */
const expressoes = true && true && true && true 
console.log(expressoes);
const expressaoOr = true || false || true;
console.log(expressaoOr);

const usuario = "Luiz";
const senha = 123456
const vailogar = usuario === "Luiz" && senha === 123456; // se tanto a senha quanto o nome de usuario forem o certo, então ele vai logar
const vailogarr = usuario === "luizinho" && senha === 123456;
console.log(vailogar);
console.log(vailogarr) //nome diferente

console.log(!true); //inverte o valor


console.log( "luiz otavio" && 0 && "maria"); // retonra o considerado como falso 

/**
 *  Valores considerados como falso 
 * false
 * 0 
 * " "
 * null/ undefined
 * NAM
 */
console.log("luiz" && "maria")

function falaOi (){
    return "oi";

}

const vaiExecutar = false;
 
console.log(vaiExecutar && falaOi()); //como o valor é falso ele não continuou, o que fez a função não ser ativada
console.log(true && falaOi()); // como o primeiro valor foi true ele continuou a acompanhar o circuito até chegar na função


console.log( 0|| false || "Luiza mel" || true); //ele recebeu o primeiro true que ele pegou, no momento que ele pega o true ele para 

let CorUsuario =null;
let CorPadrao = CorUsuario||"preto";

console.log( CorPadrao)
 CorUsuario = "laranja" 
 CorPadrao = CorUsuario||"preto"; // se não houvesse essa linha ele iria retorna preto, pois ele tirou "Uma foto" da variavel la em cima,e não pegou a formula 
 console.log(CorPadrao)


