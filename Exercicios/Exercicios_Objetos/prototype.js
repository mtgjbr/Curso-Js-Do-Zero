/**
 * Exercício — Prototype
Crie uma função construtora Animal(nome, som) e adicione os métodos pelo prototype:

falar() — exibe "O gato faz miau"
descrever() — exibe "Eu sou o gato"
 */
function Animal (nome,som){
  this.nome = nome;
  this.som= som;

}

Animal.prototype.falar =function(){
 console.log(`o ${this.nome} faz ${this.som}`);
}
Animal.prototype.descrever = function(){
 console.log(`Eu sou o ${this.nome}`);
}

const gato = new Animal("gato", "miau")
const cachorro = new Animal("cachorro", "au")

gato.falar()      // "O gato faz miau"
cachorro.falar()  // "O cachorro faz au"
gato.descrever()  // "Eu sou o gato"