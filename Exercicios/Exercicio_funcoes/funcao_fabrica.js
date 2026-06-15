/**
Crie uma função fábrica criaProduto(nome, preco, quantidade) que retorna um objeto com:

get valorTotal() — retorna preco * quantidade sem precisar de ()
get descricao() — retorna "Camiseta - R$50 - 3 unidades"
set aplicarDesconto(porcentagem) — reduz o preço pela porcentagem informada */




function criaProduto(nome, preco, quantidade) {
    return {
        nome,
        preco,
        quantidade,
        get valorTotal(){
            return `${this.preco} Reais` // precisa do this pra se referir ao preco atualizado, e nao ao referido quando a função foi chamada pela primeira vez
        },
        get descricao(){
            return `${this.nome} - R$${this.preco} - ${this.quantidade} unidades`
        },
        set aplicarDesconto(desconto){
            
            const novovalor = this.preco*(1-desconto/100)
            console.log(novovalor)
            this.preco = novovalor; // this.preco = o preco desse objeto específico — sem this você estaria alterando o parâmetro da função, 
            // não o atributo do objeto que chamou o set. u


        }
        


    }
}

const p1 = criaProduto("camisa",12,1)
console.log(p1.valorTotal)
console.log(p1.descricao)
p1.aplicarDesconto = 100;
console.log(p1.valorTotal)