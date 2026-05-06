const pessoa1 = {
    nome: "Luis",
    sobrenome: "Miranda",
    idade: 25
};
const pessoa2 = {
    nome: "Mateus",
    sobrenome: "Almeida",
    idade: 20
};
function criaPessoa(nome, sobrenome, idade) { // parametros 
    // função factory, cria objetos
    return {
        nome: nome, // nome,                       caso o nome seja o mesmo o melhor é deoxar somente deste modo
        sobrenome: sobrenome, //sobrenome,
        idade: idade //idade,
    };
}

// atributos são variaveis dentro de um objeto
console.log(pessoa1.idade, pessoa2.sobrenome);
const pessoa3 = (criaPessoa("Juninho", "alberto", 35)); //argumentos
console.log(pessoa3);


// quando uma função está dentro de um objeto ela é chamada de metodo

const pessoa4 = {
    nome: "luiza",
    sobrenome: "melo",
    idade: 23,
    Fala() {
        console.log(`${this.nome} ${this.sobrenome}, está falando oi...`); // this = neste
    },
    IncrementaIdade() {
        this.idade++;
        console.log(this.idade);
    }

};
pessoa4.Fala();
pessoa4.IncrementaIdade();