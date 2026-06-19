// getter e setter é uma maneira de proteger o obj
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque; // cria a variavel normal

    let estoquePriv = estoque // gaurda o valor numa variavel privada
    Object.defineProperty(this, "estoque", { 
        enumerable: true,   
        configurable: false ,
        get: function(){ //sempre chamado toda vez que o estoque é chamado
            return estoquePriv //obter o valor, se ele retornasse o estoque ele ia continuar chamando o get, gerando um loop
        },
        set:function(valor){ // o valor dele é o valor que vai ser enviado para estoque
            if (typeof valor !== "number"){
                throw new TypeError("bad value");
                // return  inutil ja q o trwon interrompe a execução
            }
            estoquePriv = valor; // protege a variavel caso o que seja enviado seja um nam
        }
    }); 
   
    
}

const p1 = new Produto("camiseta", 20, 3) 
p1.estoque =10
console.log(p1.estoque); // como o valor foi incorreto o valor usado continua sendo 3

function criaProduto(nome) {
  return {
    get nome() {            // o atributo nome então é definido pela combinção do get e do set
      return nome;        // quando lê o "nome" ele roda a função
    },
    set nome(valor) {
        valor = valor.replace('coisa', "")
        nome = valor;        // reescreve o "nome" do parâmetro da função quando cahama por p2.nome
    }
  };
}

const p2 = criaProduto("camisa");
p2.nome = "qualquer coisa"
console.log(p2.nome);

/**
 * A "caixinha" nome (o parâmetro da função) é o lugar onde o valor realmente mora. O get só olha pra caixinha, e o set só troca o que está dentro da caixinha.
 *  O objeto p2 em si não guarda nada — ele só tem essas duas funções que sabem onde fica a caixinha.
 */