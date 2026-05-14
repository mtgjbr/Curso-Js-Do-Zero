const resultado = document.querySelector('.resultado')
const form = document.querySelector('.form');


function recebeEventoForm(evento) {
    evento.preventDefault();
    const getPeso = form.querySelector('#peso'); // # para procurar por id
    const getAltura = form.querySelector('#altura'); //tanto document quanto form servem, so que o form é mais rapido
    const peso = Number(getPeso.value); //converter para numero porque se não ele sempre vem em string
    const altura = Number(getAltura.value)
    calculoImc(peso, altura);
}

function calculoImc(peso, altura) {
    const imc = peso / altura ** 2;
    if (!Number(altura) ||!Number(peso)) {  // se o numero for um não finito ou um não inteiro ele executa
        exibicao("<strong> Somente números </strong>",false); // altura || peso === String errado pqString é função construtora e === sempre vai agir primeiro que o ||, desconsiderando altura
    } else if (altura < 1.0) {
        exibicao("<strong> Altura inválida </strong>",false);
    } else if (peso < 12) { // === para atribuição
        exibicao("<strong> Peso inválido </strong>",false);
    }else
    EnquadramentoImc(imc); //se essa parte não fizesse parte do if principal e a altura  fosse vazio ele iria dividir altura/0, dando inifito e dando obesidade grau 3
    
}
function EnquadramentoImc(imc) {

    if (imc <= 18.5) {
        exibicao( "<strong> Abaixo do peso </strong>",true);
    } else if (imc > 18.5 && imc <= 24.9) {
        exibicao("<strong> Peso normal </strong>",true);
    } else if (imc >= 25 && imc <= 29.9) {
        exibicao ( "<strong> Sobrepeso</strong>",true);
    } else if (imc >= 30 && imc <= 34) {
        exibicao("<strong> Obesidade grau 1 </strong>",true);
    } else if (imc >= 35 && imc <= 39.9) {
        exibicao("<strong> Obesidade grau 2 </strong>",true);
    } else if (imc >= 40) {
        exibicao("<strong> Obesidade grau 3 </strong>",true);
    }
}
function criaP(){   
 const p =document.createElement('p');
 return p
}

function exibicao(msg,isValid){
  resultado.innerHTML = ""
  const p = criaP();
  if (isValid) {
        p.classList.add('paragrafo-resultado') //adiciona a lista de atributos do p 
    } else {
        p.classList.add('bad')
    }
  resultado.appendChild(p); //  adiciona o p como filho na div resultado
   p.innerHTML = msg
}
form.addEventListener('submit', recebeEventoForm); //por só chamar a função recebeEventoform quando o submit for escutado, evita da execução vier antes da hora e o código não funcionar