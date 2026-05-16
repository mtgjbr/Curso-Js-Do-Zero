const resultado = document.querySelector('#resultado');

const botao = document.querySelectorAll('.botao') // pega todos os dados que tiverem esse nome ao inves de pegar so um
function recebeEventoForm(evento) {
    evento.preventDefault();
    const valor = evento.target.dataset.valor;
    console.log(valor)
    captanumero(valor)
}
let numeroAnterior = ''; // tem que ser definidida como vazio pq se nao o if vai acionar desde o inicio //tem que ser criada fora da função porque se for dentro a cada clique ele vai resetar os valores, vai zerar tudo
let numeroAtual = '';
let operador = '';
let operação;
function captanumero(valor) {



    switch (valor) { //valor que vem do buttom sempre vem em string, por isso deve-se deixar o numero como string tbm
        case '+':
            if (numeroAnterior !== "") { //  se o numeroAnterior for vazio ele executa
                console.log('anterior:', numeroAnterior)
                console.log('atual:', numeroAtual)

                numeroAtual = Number(numeroAnterior) + Number(numeroAtual);
            }
            numeroAnterior = numeroAtual
            resultado.innerHTML = "+";
            numeroAtual = " ";
            operação = "soma" //limpar o numero atual para o proximo calculo ele entrar como um novo

            break
        case '=':
            if (operação = "soma") {
                numeroAtual = Number(numeroAnterior) + Number(numeroAtual);
                resultado.innerHTML = numeroAtual
            }


            break
        default:
            numeroAtual += valor; // a cada novo clique que adiciona um numero ele sempre vai entrando em numero atual
            resultado.innerHTML = numeroAtual
    }

}
botao.forEach(botao => { botao.addEventListener('click', recebeEventoForm) }); //  pra cada botão, adiciona o eventlinester, arrow fucntion
// forEach é obrigatório junto com o querySelectorAll.

// botao.addEventListener('click',recebeEventoForm);  //O submit é um evento do form, então o evento.target aponta
// pro form inteiro, não pro botão que você clicou:
//por isso deixar click
// o querry selector só pega o primeiro que corresponde no que ele procura, no caso o 0, ja o query selectorall pega todos os dados, por isso tem que ser usado sempre junto com o for each, "pra cada"