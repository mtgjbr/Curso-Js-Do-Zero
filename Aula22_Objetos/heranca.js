
// produto -> aumento de preco, desconto / sempre no prototype do produto
// camiseta = cor, caneca = material

function Produto(nome,preco){ //todos os produtos tem essas caracteristicas
 this.nome = nome;
 this.preco = preco;

}

Produto.prototype.aumento = function(quantia){
    this.preco +=quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
};


function Camiseta (nome,preco,cor){ // herda tudo de produto mas pode ter algumas coisas proprias
 Produto.call(this, nome, preco); // herda o nome e preco do produto
  this.cor = cor;
};
// camiseta.prototype.constructor = camiseta
Camiseta.prototype = Object.create(Produto.prototype); // cria um objeto vazio com o assunto do produto
Camiseta.prototype.constructor = Camiseta // devolve o código de origem camiseta pro constructor

Camiseta.prototype.aumento = function(percent){ // mudando o comportamento de aumento ,porque a engine vai procurar onde ta mais perto e deposi os encadeamentos mais longes
    this.preco = this.preco + (this.preco * (percent/100))
}
function  Caneca (nome,preco,material,estoque){
    Produto.call(this,nome,preco);
    this.material = material;
    
    Object.defineProperty(this,"estoque",{ //porque fazer eles aqui?
        enumerable:true,
        configurable:false,
        get:function(){ // mostra pra view
            return estoque
        },
        set:function(valor){ // define o valor
            if(typeof valor !== Number) return;
            estoque = valor // porque ele define aqui? e porque faz do jeito mais dificil
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype); 
Caneca.prototype.constructor = Caneca



const camiseta = new Camiseta ("regata", 50);
const caneca = new Caneca ("caneca", 13, "plastico", 5);



camiseta.aumento(50);
console.log(camiseta);
console.log(caneca)