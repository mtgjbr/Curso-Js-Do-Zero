
const relogio = document.querySelector(".relogio");
const voltas = document.querySelector(".voltas")

export default class Cronômetro {
    constructor() {
        this.segundos = 0; // se colocasse o data aquiCalculou a hora uma única vez quando o objeto foi criado e guardou o texto "00:00:00" dentro de this.data
        //Se você colocasse o valor 1000 diretamente no new Date(1000),
        // o JavaScript criaria um objeto de data representando exatamente 1 segundo após o marco zero da época Unix (01/01/1970)
        this.horaFormatada = 0
        this.contador = null // todo setinterval ganha um id, ele verifica ele já tem esse id no if
        this.posicao = 1
    }
    criali(){
     const li =document.createElement("li");
     return li
    }
    atualizarTela(hora) {
        relogio.innerHTML = hora;
    }

    criaRelogio() {
        const data = new Date();
    }

    pausar() {
        clearInterval(this.contador)
        this.contador = null;
    }

    marcarVolta() {
        if(this.segundos===0){
            alert("comece para adicionar voltas");
        }
        else{

            const li = this.criali();
            li.textContent = `${this.posicao}º: ${this.horaFormatada}`;
            voltas.appendChild(li);
            console.log(this.horaFormatada);
            this.posicao++

        }

    }
    comecar() {
        if (this.contador) { alert("voce já começou a fazer isso") }
        else {
            this.contador = setInterval(() => {
                let data = new Date(this.segundos * 1000);
                data = data.toLocaleTimeString('pt-Br', {
                    hour12: false,
                    timeZone: "utc"
                })
                this.horaFormatada = data
                this.atualizarTela(this.horaFormatada)
                // console.log(data)
                this.segundos++
            }, 1000);

        }
    }

    reinicar(){
        this.segundos = 0;
        this.pausar()
        this.atualizarTela("00:00:00");
        voltas.replaceChildren();
        this.posicao =1

        
       
       
       
    }
}

