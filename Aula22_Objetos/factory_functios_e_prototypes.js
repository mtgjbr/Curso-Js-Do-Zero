const falar = {
     falar(){
        console.log(`${this.nome} está falando`)
     }
}   
const comer = {
     comer(){
        console.log(`${this.nome} está comendo`)
     }
} 
const beber = {
     beber(){
        console.log(`${this.nome} está bebendo`)
     }
}   
   
   const pessoaPrototype ={...falar,...comer,...beber} // composição/ mixing


function CriaPessoa(nome,sobrenome){

    return Object.create(pessoaPrototype, {
        nome:{value:nome},
        sobrenome:{value:sobrenome}
    });
}
const p1 = CriaPessoa("mateus","almeida");
const p2 = CriaPessoa ("Maria", "A")
console.log(p1)
console.log(p1.nome)
p1.beber()
console.log(p2)