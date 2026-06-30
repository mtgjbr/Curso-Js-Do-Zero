/**Exercício — Classes
Reescreva esse código de função construtora usando class: */


class Animal{
    constructor(nome,som){
        this.nome= nome;
        this.som = som;
    }

falar(){
    console.log(`${this.nome} faz ${this.som}`)  // não precisa de prototype pq aq serve c
}
descrever(){
    console.log(`Eu sou o ${this.nome}`)
}
}

const cachorro = new Animal ("cachorro","auaua");

cachorro.falar()
cachorro.descrever()