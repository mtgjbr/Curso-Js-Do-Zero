/**
 * Exercício — Herança com classes
Crie uma classe Veiculo(marca, velocidade) com os métodos acelerar() e status().
Depois crie duas classes filhas:

Carro(marca, velocidade, portas) — herda tudo e adiciona abrirPortas()
Moto(marca, velocidade) — herda tudo mas o acelerar() soma 5 em vez de 
 */


class Veiculo{
    constructor(marca,velocidade){
        this.marca= marca; // ainda tem definir que a marca recebida vai ser guardada dentro do obj
        this.velocidade = velocidade;

    }
acelerar(){
    this.velocidade++
}
status(){
    console.log(`${this.marca} está a ${this.velocidade}KM/HR`)
}
}

class Moto extends Veiculo{
    constructor(marca,velocidade){
        super(marca,velocidade)
    }
acelerar(){
 this.velocidade+= 5
 
}
}

class Carro extends Veiculo{
    constructor(marca,velocidade,portas){ // instancia todas as variaveis
        super(marca,velocidade);
        this.portas = portas
    }
abrirPortas(){
console.log(`Abrindo ${this.portas} portas`)
}
}





const m1 = new Moto("yamaha",0);
const c1 = new Carro ("Toyota",0,4)
m1.acelerar();
m1.acelerar();
m1.status();
c1.abrirPortas();
