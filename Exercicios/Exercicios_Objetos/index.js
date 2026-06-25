/**Exercício — Métodos de objeto
Dado esse objeto, use Object.keys, Object.values e Object.entries pra exibir as informações, 
e depois use Object.assign pra criar uma cópia com um atributo extra ativo: true: */


const produto = {
    nome: "Camiseta",
    preco: 50,
    estoque: 3
}

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

const copia = Object.assign({} , produto,{ativo:true}) // as chaves vazias sao importante para criar um novo objeto vazio
console.log(copia)

/*Crie uma função construtora Carro(marca, modelo, ano) onde:

marca e modelo são públicos e editáveis normalmente
ano é somente leitura — não pode ser alterado depois de criado
id é um número aleatório que não aparece no Object.keys (enumerable fals*/

function Carro (marca,modelo,ano){
    this.marca = marca;
    this.modelo = modelo;
    Object.defineProperty(this,"ano",{
          enumerable: true,   
            value:ano,
            writable: false,   
            configurable: false
    }),
    Object.defineProperty(this,"id",{
        enumerable:false,
        value:Math.floor(Math.random() * (1 - 1000 + 1)) + 1,
        
    })
/**
 * O this.ano só existiria se você tivesse feito this.ano = ano antes 
 * mas como você tá usando o defineProperty justamente pra criar essa propriedade, 
 * ela ainda não existe quando você tá configurando.
 */
}

const c2 = new Carro ("Toyota", "Corolla", 2020);
console.log(c2.ano)
console.log(Object.keys(c2))  // id não deve aparecer
c2.ano = 2025
console.log(c2.ano)  // deve continuar 2020
console.log(c2.id)   // número aleatório