const _velocidade = Symbol("_velocidade"); // chave única, ninguém acessa sem essa variável, precisa dos [] pro js saber que a variavle está sendo utilizada como uma cahve e nao como um nome literal

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0; // armazenado com chave Symbol — "privado"
    }
    set velocidade(valor){
        console.log("Setter")
        if(typeof valor !== "number") return
        if(valor >=100 || valor <= 0)return
        this[_velocidade]= valor // só salva se passar as validações
    }
    get velocidade(){
        console.log("GETTER")
        return this[_velocidade]  // expõe o valor de forma controlada
    }
    acelerar(){
        if(this[_velocidade] >=100) return
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <=0) return
        this[_velocidade]--;
    }
}

const c1 = new Carro("fusca")

c1.velocidade=99 // vai no metodo publico que muda o valor privado
console.log(c1.velocidade)