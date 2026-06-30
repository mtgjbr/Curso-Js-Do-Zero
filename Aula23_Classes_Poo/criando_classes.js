// mesma coisa da função construtora, so que com um modo diferente de escrever

class Pessoa {
constructor(nome,sobrenome){ // usado para passar parametros para a classe 
 this.nome = nome;
 this.sobrenome = sobrenome
}
falar(){
 console.log(`${this.nome} está falando`) //nao precisa do prototype pois ele ja vai automaticamente no prototype da classe
}
comer(){
console.log(`${this.nome} está falando`)
}
beber(){
console.log(`${this.nome} está falando`)
}
}



const p1 = new Pessoa("mateus", "almeida");
console.log(p1)
p1.falar()