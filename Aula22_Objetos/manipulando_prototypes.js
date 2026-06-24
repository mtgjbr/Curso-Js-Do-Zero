// new object -> tem um Object.prototype
const objA = {
    chaveA: "A"
    // __proto__:Object.prototype
};

const objB = {
    chaveB: "B"
    // __proto__:ObjA // mais um encadeamento
};

const objC = {
    chaveC: "C" // 
    // __proto__:ObjC // ele pega no proto o objeto inteiro, mas por referencia, ele so busca no lugar na memoria
    // não é recomendavel usar o __proto__, é pra usar o objeto.getprototypeOF(objA)
};
Object.setPrototypeOf(objB, objA);  // configura para o prototype de b ser o mesmo do prototype A
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA)


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percent) {
    this.preco = this.preco - (this.preco * (percent / 100));

}

Produto.prototype.aumento = function (percent) {
    this.preco = this.preco + (this.preco * (percent / 100));
}

const p1 = new Produto("camiseta", 50);
const p2 = {
    nome: 'caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype); // peg o prototype do p1 e joga no p2, reaproveitando os metodos 
p2.aumento(10); // sendo exibido como se fosse cirado pela função construtora
console.log(p2)
p1.desconto(20);
console.log(p1);

const p3 = Object.create(Produto.prototype, { //define o prototype como o mesmo de produto
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42

    }
});
p3.aumento(10)
console.log(p3);