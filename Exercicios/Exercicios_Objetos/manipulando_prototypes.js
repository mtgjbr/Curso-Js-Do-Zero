const veiculo = {
    mover() { console.log(`${this.nome} está se movendo`) },
    parar() { console.log(`${this.nome} parou`) }
}

const carro = {
    nome: "Fusca",
    buzinar() { console.log("Fom fom!") }
}
Object.setPrototypeOf(carro,veiculo); // o carro herda todos os metodos de veiculo
// maneira mais facil do que a anterior pois ele nao perde a propria referencia

const moto = Object.create(veiculo);
moto.empinar = function(){ 
// moto.prototype não existe — prototype é de funções construtoras. Em objetos literais você adiciona direto (criou um obj literal e nao uma funct)
    console.log(`${this.nome} faz randandan`)
}

carro.mover()    // "Fusca está se movendo"
carro.parar()    // "Fusca parou"
carro.buzinar()  // "Fom fom!"
moto.nome = "honda"
moto.empinar()