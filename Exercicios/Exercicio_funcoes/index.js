//Exercício — Carrinho de compras
//Crie uma função criaCarrinho() que retorna um objeto com 3 métodos:

//adicionar(produto, preco) — adiciona o produto ao carrinho
//listar() — exibe no console todos os produtos e seus preços
//total() — retorna o valor total do carrinho


function criaCarrinho(produto, preco) {
    const produtos = []
    return   {
        adicionar: function (produto, preco) { produtos.push({ produto, preco }) },
        listar: function () { console.log(produtos) },
        total: function () {
            let total = 0 
            for (let item of produtos) {
                total += item.preco;
                
            }
            console.log(total)
                console.log(item.preco)
        }
    }

}
let teste = criaCarrinho();
teste.adicionar('goiaba',12)
teste.adicionar("uva",1)
teste.total()