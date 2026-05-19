const resultado = document.querySelector('#resultado');

const botao = document.querySelectorAll('.botao') // pega todos os dados que tiverem esse nome ao inves de pegar so um
function recebeEventoForm(evento) {
    evento.preventDefault();
    const valor = evento.target.dataset.valor;  // recebe o bõtao que foi apertado e define o valor com base na propriadade do dataset-valor
    captanumero(valor)
}
let numeroAnterior = ''; // tem que ser definidida como vazio pq se nao o if vai acionar desde o inicio //tem que ser criada fora da função porque se for dentro a cada clique ele vai resetar os valores, vai zerar tudo
let numeroAtual = '';
let operacao = '';

function fazConta() {
    if (operacao === "soma") {
        numeroAtual = Number(numeroAnterior) + Number(numeroAtual);
        resultado.innerHTML = numeroAtual
    } else if (operacao === "subtracao") {
        numeroAtual = Number(numeroAnterior) - Number(numeroAtual);
        resultado.innerHTML = numeroAtual;
    } else if (operacao === "multiplicacao") {
        numeroAtual = Number(numeroAnterior) * Number(numeroAtual);
        resultado.innerHTML = numeroAtual;
    } else if (operacao === "divisao") {
        numeroAtual = Number(numeroAnterior) / Number(numeroAtual);
        resultado.innerHTML = numeroAtual;
    }

}
function captanumero(valor) {



    switch (valor) { //valor que vem do buttom sempre vem em string, por isso deve-se deixar o numero como string tbm
        case '+':
            if (numeroAnterior !== "") fazConta(); //  se o numeroAnterior não for vazio ele executa

            numeroAnterior = numeroAtual; // o numero atual vira o anterior e o atual é limpo
            resultado.innerHTML = "+";
            numeroAtual = "";
            operacao = "soma"; //limpar o numero atual para o proximo calculo ele entrar como um novo
            console.log(operacao);
            break
        case '-':
            if (numeroAnterior !== "") fazConta(); //  && operacao === "subtracao" essa parte não é mais necessária porque a função conta ja verifica onde colocar com base na operacao
            // // se isso ainda estivesse poderia ocorrer problemas, como por exmeplo em 10-5+3 em que o na hora que fosse apertado o + não iria ser chamada a função conta porque o valor da operacao é soma e nao subtração, perdendo o 10 e dando o resultado de 8
            numeroAnterior = numeroAtual;
            resultado.innerHTML = "-";
            numeroAtual = "";
            operacao = "subtracao";
            console.log(operacao);
            break
        case "multiplicacao":
            if (numeroAnterior !== "") fazConta(); //ifs com apenas uma linha não precisam de {}
            numeroAnterior = numeroAtual;
            resultado.innerHTML = "X";
            numeroAtual = "";
            operacao = "multiplicacao";
            console.log(operacao);
            break
        case "divisao":
            if (numeroAnterior !== "") fazConta();
            numeroAnterior = numeroAtual;
            resultado.innerHTML = "÷";
            numeroAtual = "";
            operacao = "divisao";
            console.log(operacao);
            break
        case '=':
            fazConta();
            console.log(numeroAtual);
            break
        case "limpar": 
            numeroAnterior = "";
            numeroAtual = "";
            operacao = "";
            break
        default:
            numeroAtual += valor; // a cada novo clique que adiciona um numero ele sempre vai entrando em numero atual
            resultado.innerHTML = numeroAtual; //faz sentido ele começar como string pq vai facilitar a concaternar até o momento que for somar
            console.log(valor);

    }

}


botao.forEach(botao => { botao.addEventListener('click', recebeEventoForm) }); //  pra cada botão, adiciona o eventlinester, arrow fucntion
// forEach é obrigatório junto com o querySelectorAll.

// botao.addEventListener('click',recebeEventoForm);  //O submit é um evento do form, então o evento.target aponta
// pro form inteiro, não pro botão que você clicou:
//por isso deixar click
// o querry selector só pega o primeiro que corresponde no que ele procura, no caso o 0, ja o query selectorall pega todos os dados, por isso tem que ser usado sempre junto com o for each, "pra cada"