// objeto literal = feito com {}
const pessoa = {
// corpo do objeto
 // contendo os pares de chave nome com o valor mateus
 nome:"mateus",
 sobrenome:"almeida"
}; // tem que ter ; no final do obj
const chave = "sobrenome"
delete pessoa.nome 
console.log(pessoa.nome) // notação de ponto
console.log(pessoa[chave])// notação de colchetes, possibilidade de colocar um valor dinamico 

// construtor de objeto

const pessoa1 = new Object(); // criando um novo objeto vazio
pessoa1.nome = "mateus"; // adicionando chave e valor
pessoa1.sobrenome = "almeida";
pessoa1.idade = 21;
pessoa1.falar = function(){
    return (`${this.nome} está falando seu nome`)} ;
// uma das vantagens de criar metodos (funções) dentro de um objeto é que o this sempre vai se referir ao proprio objeto
pessoa1.getDataNascimento = function (){
    const dataAtual =new Date();
    return (dataAtual.getFullYear() - this.idade);
}

console.log(pessoa1);
//excluir o nome do pessoa1

console.log(pessoa1.falar());
console.log(pessoa1.idade)
console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1){
    console.log(chave[chave]) // ve os valores que estão dentro das chaves
}
