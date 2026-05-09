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