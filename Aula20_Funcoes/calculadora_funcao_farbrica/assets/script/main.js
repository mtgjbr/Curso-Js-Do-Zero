function Calculadora() {

    return {
        display: document.querySelector(".display"), // display está dentro d3 um atributo do obj, acessavel com this.dislpay
        btnClear: document.querySelector('.btn-clear'),
        inicia() {
            this.cliqueBotoes(); //precisa do this para referencias outra chave do obj de dentro do proprio obj
            this.pressionaEnter();
        },
        pressionaEnter() {
            document.addEventListener('keydown', e => {
                if (e.keyCode === 13) {
                     e.preventDefault();
                    this.realizaConta();
                }
            })
        },

        realizaConta() {
            let conta = this.display.value //avalia como js e tenta executar, perigosissimo
            try {
                conta = eval(conta);
                if (conta === undefined) {
                    alert("conta inválida");
                    return
                }
                this.display.value = conta
            } catch (e) {
                alert("conta inválida");
                return;
            }

        },

        clearDisplay() {
            this.display.value = "";
        },


        apagaUm() {
            this.display.value = this.display.value.slice(0, -1) // apaga o ultimo valor
        },

        cliqueBotoes() {
            document.addEventListener('click', function (e) { //pega o local que foi clicado pelo evento
                const el = e.target;
                // nesse caso o this é o document po conta do document.addevetlistener ali
                if (el.classList.contains('btn-num')) { //se o elemento clicado tiver a classlist de btn-num, então;
                    this.btnParadisplay(el.innerText); //pega o conteudo do clique
                } // com o this ele procura dentro do doc que não essa função, então ele da erro

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains("btn-del")) {
                    this.apagaUm();
                }
                if (el.classList.contains("btn-eq")) {
                    this.realizaConta();
                }

            }.bind(this)); // chamado fora da função de escutar o evento, onde ele ainda é o objeto calculadora
            // ele congela esse valor e força a função interna a usar ele

        },

        btnParadisplay(valor) {
            this.display.value += valor; //muda o valor dele
        },


    };


}

const calculadora = Calculadora()
calculadora.inicia()

//arrow function n muda a alteração do this