/**Exercício — Herança
Crie uma função construtora Veiculo(marca, velocidadeMax) com os métodos no prototype:

acelerar(quantidade) — aumenta a velocidade atual
frear(quantidade) — diminui a velocidade atual
status() — exibe "Toyota a 60km/h"

Depois crie Moto(marca, velocidadeMax, cilindradas) que herda de Veiculo e adiciona:

empinar() — exibe "A Toyota empinou!"

 */

function Veiculo(marca,velocidadeMax){
    this.marca = marca;
    this.velocidadeMax = velocidadeMax;
    this.velocidadeAtual = 0;
}

Veiculo.prototype.acelerar = function(quantidade){
    return this.velocidadeAtual += quantidade;
}
Veiculo.prototype.frear = function(quantidade){
     this.velocidadeAtual = this.velocidadeAtual - quantidade;
     if (this.velocidadeAtual <0){ this.velocidadeAtual *=-1}
     return this.velocidadeAtual
}
Veiculo.prototype.status = function(quantidade){
    return `${this.marca} a ${this.velocidadeAtual}KM/hr`
}
function Moto(marca,velocidadeMax,cilindradas){
    Veiculo.call(this,marca,velocidadeMax);
}
Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto; // corrige a referência do construtor que foi perdida na linha acima

Moto.prototype.empinar = function(){
    return `a ${this.marca} empinou`
}



const motin = new Moto ("corola",123);
console.log(motin)
motin.acelerar(30);
motin.frear(15);
console.log(motin)
console.log(motin.status())
console.log(motin.empinar())