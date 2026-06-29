class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false; // ja começa desligado
    }

        ligar(){
            if(this.ligado){
                console.log(this.nome+` já ligado`);
                return
            }
            this.ligado = true
        }


        desligar(){
            if(!this.ligado){
                console.log(this.nome+` já desligado`);
                return
            }
            this.ligado = false
        }
}




const d1= new DispositivoEletronico ("smarthphone");
d1.ligar()
d1.ligar()
console.log(d1)

class smarthphone extends DispositivoEletronico{ // herda tudo que dispositvo eletronico tem
 constructor(nome,cor,modelo){ // porque ele nao pega do super o ligado tambem?
    super(nome); // pega o nome da classe pai
    this.cor = cor
    this.modelo = modelo
 }
}


class Tablet extends DispositivoEletronico{
    constructor(nome,temWifi){
        super(nome);
        this.temwifi = temWifi
    }
ligar(){
    console.log("Olha,voce alterou o metodo ligar")
}

}


const s1 = new smarthphone ("samsung", "preto","Galaxy s10");

console.log(s1)

const t1 = new Tablet ("ipad", true)
console.log(t1.ligar()) // vai procurando "subindo escada até achar"