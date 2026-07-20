class pessoa {
    constructor(nome){
        this.nome =nome;
    }
}

exports.pessoa = pessoa;



const nome = "Luiz";
const sobrenome = "miranda";

const falaNome =()=>{
    console.log(nome,sobrenome);
}
console.log(module)

module.exports.nome = nome ; //exporta a variavel nome com o valor nome


exports.sobrenome = sobrenome ; //mesma coisa do jeito de cima
this.qualquerCoisa = "o que eu quiser exportar" //this aponta pra ca


console.log(module.exports)
//**
// nome.exports ={ //sobre escreve o obj todo, logo as outras coisas exportaram sumiram ja que esse virou o novo obj
// nome,sobrenome,pessoa
//}; outra maneira de exportas varias coisas d uma vez
// 
//  */
