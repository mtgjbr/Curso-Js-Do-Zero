function Calculadora() {
    const display = document.querySelector(".display"); // display está dentro d3 um atributo do obj, acessavel com this.dislpay

    this.inicia = () => {
        cliqueBotoes();  // ; para separar ao inves de ,
        PressionaEnter(); // se tivesse o this iria procurar no lugar errado
    };
    // this. busca no objeto da instância, const busca no escopo local da função. São dois "lugares" diferentes — 
    // chamar this.algo() quando foi declarado como const algo é procurar no lugar errado.
    const PressionaEnter = () => {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                realizaConta();
            }
        })
    };

    const realizaConta = () => {
        let conta = display.value //avalia como js e tenta executar, perigosissimo
        try {
            conta = eval(conta);
            if (conta === undefined) {
                alert("conta inválida");
                return
            }
            display.value = conta
        } catch (e) {
            alert("conta inválida");
            return;
        }

    };
    const clearDisplay = () => display.value = ""; // não precisa do this pq foi declarado no privado
    const apagaUm = () => display.value = display.value.slice(0, -1);
    // apaga o ultimo valor
    const cliqueBotoes = () => {
        document.addEventListener('click', function (e) { //pega o local que foi clicado pelo evento
            const el = e.target;
            // nesse caso o this é o document po conta do document.addevetlistener ali
            if (el.classList.contains('btn-num')) btnParadisplay(el.innerText);  //se o elemento clicado tiver a classlist de btn-num, então;
            //pega o conteudo do clique
            // com o this ele procura dentro do doc que não essa função, então ele da erro
            if (el.classList.contains('btn-clear')) clearDisplay();
            if (el.classList.contains("btn-del")) apagaUm();
            if (el.classList.contains("btn-eq")) realizaConta();


        }); // chamado fora da função de escutar o evento, onde ele ainda é o objeto calculadora
        // ele congela esse valor e força a função interna a usar ele

    };
    const btnParadisplay = (valor) => {
        display.value += valor; //muda o valor dele
        display.focus(); // bota o foco do displau pra corrgir o erro quando aperta enter
    }

}
const calculadoraB = new Calculadora()
calculadoraB.inicia()

//arrow function n muda a alteração do this