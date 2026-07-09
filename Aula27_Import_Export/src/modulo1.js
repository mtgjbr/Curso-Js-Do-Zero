export const nome = "Luiz"; // ja cria a const e exporta direto, pode ser feito com tudo: function,class
const sobrenome ="Miranda";
const idade = 30;

function soma(x,y){
    return x+y
}
export class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}
// defaut pode ser qualquer coisa, desde que seja dito como defaut
export default function goiaba(){
    return "goiaba"
}

// troca o nome da variavel no export
// exporta nome COMO 
export {sobrenome as sobren,idade,soma} //exporta o nome