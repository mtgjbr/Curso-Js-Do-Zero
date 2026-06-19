// funções do JavaScrpit

//  defineProperty = usado para uma chave 
//  defineProperties = usado para varias chave

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
        enumerable: true,   // mostra a chave estoque?
        value: estoque,   // valor
        writable: false,   // pode editar o valor?
        configurable: false // pode apagar a chave ou reconfigurar?
    }); // modifica as propriedades desse objeto
    // pode definir mais de uma ver
    Object.defineProperties(this, {
        nome: {
            enumerable: true,  
            value: estoque,   
            writable: false,  
            configurable: false
        },
        preco:{
              enumerable: true,   
            value: estoque,   
            writable: false,   
            configurable: false
        }
    });
}

const p1 = new Produto("camiseta", 20, 3)
console.log(p1);

console.log(Object.keys(p1)); // array com as chaves que estão enumerable