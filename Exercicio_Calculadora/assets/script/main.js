const resultado = document.querySelector('#resultado');

const botao = document.querySelectorAll('.botao') // pega todos os dados que tiverem esse nome ao inves de pegar so um
function recebeEventoForm(evento) {
    evento.preventDefault();
    const valor = evento.target.dataset.valor;  // recebe o bõtao que foi apertado e define o valor com base na propriadade do dataset-valor
    handleEvento(valor)
}
let numeroAnterior = ''; // tem que ser definidida como vazio pq se nao o if vai acionar desde o inicio //tem que ser criada fora da função porque se for dentro a cada clique ele vai resetar os valores, vai zerar tudo
let numeroAtual = '';
let operacao = '';
let ResultadoExibido = [];

function exibirResultado(expressao) {
    ResultadoExibido.push(expressao)
    resultado.innerHTML = ResultadoExibido.join(''); //se fosse com += ele iria ficar duplicando resultado
}
function atualizarVisor() {
    resultado.innerHTML = ResultadoExibido.join('') // O .join() pega todos os itens do array e junta numa string só
}

function fazConta() {
    if (operacao === "soma") {
        numeroAtual = Number(numeroAnterior) + Number(numeroAtual);
        numeroAtual = String(numeroAtual)
        exibirResultado(numeroAtual);
    } else if (operacao === "subtracao") {
        numeroAtual = Number(numeroAnterior) - Number(numeroAtual);
        numeroAtual = String(numeroAtual)
        exibirResultado(numeroAtual);
    } else if (operacao === "multiplicacao") {
        numeroAtual = Number(numeroAnterior) * Number(numeroAtual);
        numeroAtual = String(numeroAtual)
        exibirResultado(numeroAtual);
    } else if (operacao === "divisao") {
        numeroAtual = Number(numeroAnterior) / Number(numeroAtual);
        numeroAtual = String(numeroAtual)
        exibirResultado(numeroAtual);
    }

}
function handleEvento(valor) { // 

    switch (valor) { //valor que vem do buttom sempre vem em string, por isso deve-se deixar o numero como string tbm
        case '+':
            if (numeroAnterior !== "") {
                fazConta(); //  se o numeroAnterior não for vazio ele executa
                ResultadoExibido = [numeroAtual];
            } numeroAnterior = numeroAtual; // o numero atual vira o anterior e o atual é limpo
            exibirResultado("+");
            numeroAtual = "";
            operacao = "soma"; //limpar o numero atual para o proximo calculo ele entrar como um novo

            break
        case '-':
            if (numeroAnterior !== "") {
                console.log('anterior:', numeroAnterior)
                console.log('atual:', numeroAtual)
                fazConta(); //  && operacao === "subtracao" essa parte não é mais necessária porque a função conta ja verifica onde colocar com base na operacao
                console.log('anterior:', numeroAnterior)
                console.log('atual:', numeroAtual)
                ResultadoExibido = [numeroAtual]
            }     // // se isso ainda estivesse poderia ocorrer problemas, como por exmeplo em 10-5+3 em que o na hora que fosse apertado o + não iria ser chamada a função conta porque o valor da operacao é soma e nao subtração, perdendo o 10 e dando o resultado de 8
            numeroAnterior = numeroAtual;
            exibirResultado("-");
            numeroAtual = "";
            operacao = "subtracao";

            break
        case "multiplicacao":
            if (numeroAnterior !== "") {
                fazConta(); //ifs com apenas uma linha não precisam de {}
                ResultadoExibido = [numeroAtual]
            } numeroAnterior = numeroAtual;
            exibirResultado("X");
            numeroAtual = "";
            operacao = "multiplicacao";

            break
        case "divisao":
            if (numeroAnterior !== "") {

                fazConta();

                ResultadoExibido = [numeroAtual]
            } numeroAnterior = numeroAtual;
            exibirResultado("÷");
            numeroAtual = "";
            operacao = "divisao";

            break
        case '=':
            if (numeroAtual == "") { //ve se existe algum número atual, como todo numero clicado em pratica é atual então verifica se algum numero já foi clicado
                exibirResultado("Insira um número");
            } else {
                exibirResultado("=");
                fazConta();
                ResultadoExibido = [numeroAtual] // reseta o array pra limpar os números antigos que foram utilizados para o resultado
            }
            break
        case "limpar":
            numeroAnterior = "";
            numeroAtual = "";
            operacao = "";
            ResultadoExibido = [];
            resultado.innerHTML = ""
            break
        case "apagar_ultimo":
            numeroAtual = numeroAtual.slice(0, -1); //deve-se atribuir o numero atual a ele mesmo.slice, caso contrário então ele não vai ter esse valor 
            ResultadoExibido.pop();
            atualizarVisor();
            break
        default:
            numeroAtual += valor; // a cada novo clique que adiciona um numero ele sempre vai entrando em numero atual
            exibirResultado(valor); //faz sentido ele começar como string pq vai facilitar a concaternar até o momento que for somar
        //se pegasse o numeroatual ele iria  sempre chamar o click+ o que ja tava no numero atual

    }

}


botao.forEach(botao => { botao.addEventListener('click', recebeEventoForm) }); //  pra cada botão, adiciona o eventlinester, arrow fucntion
// forEach é obrigatório junto com o querySelectorAll.

// botao.addEventListener('click',recebeEventoForm);  //O submit é um evento do form, então o evento.target aponta
// pro form inteiro, não pro botão que você clicou:
//por isso deixar click
// o querry selector só pega o primeiro que corresponde no que ele procura, no caso o 0, ja o query selectorall pega todos os dados, por isso tem que ser usado sempre junto com o for each, "pra cada"


/*
Funções que fazem algo → verbo: calcular, exibir, limpar, processar
Funções que reagem a evento → handle + o que aconteceu: handleClick
Variáveis → substantivo do que guardam: visor, expressao
 */