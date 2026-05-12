const resultado = document.querySelector('.resultado')
const form = document.querySelector('.form');
let imc;


function recebeEventoForm(evento) {
    evento.preventDefault();
    const peso = form.querySelector('#peso'); // # para procurar por id
    const altura = form.querySelector('#altura'); //tanto document quanto form servem, so que o form é mais rapido
    calculoImc(peso.value, altura.value);
}

function calculoImc(peso, altura) {
    const imc = peso / (altura ** 2);
    if (typeof altura=== "string" ||typeof peso === "string") { // altura || peso === String errado pqString é função construtora e === sempre vai agir primeiro que o ||, desconsiderando altura

        resultado.innerHTML = "<strong> Somente números </strong>";
    } else if (altura < 1.0) {
        resultado.innerHTML = "<strong> Altura inválida </strong>";
    } else if (peso < 12) { // === para atribuição
        resultado.innerHTML = "<strong> Peso inválido </strong>";
    }
    EnquadramentoImc(imc);
    
}
function EnquadramentoImc(imc) {

    if (imc < 18.5) {
        resultado.innerHTML = "<strong> Abaixo do peso </strong>";
    } else if (imc > 18.5 && imc < 24.9) {
        resultado.innerHTML = "<strong> Peso normal </strong>";
    } else if (imc > 25 && imc < 29.9) {
        resultado.innerHTML = "<strong> Sobrepeso</strong>";
    } else if (imc > 30 && imc < 34) {
        resultado.innerHTML = "<strong> Obesidade grau 1 </strong>";
    } else if (imc > 35 && imc < 39.9) {
        resultado.innerHTML = "<strong> Obesidade grau 2 </strong>";

    } else if (imc > 40) {
        resultado.innerHTML = "<strong> Obesidade grau 3 </strong>";
    }
}

form.addEventListener('submit', recebeEventoForm); //por só chamar a função recebeEventoform quando o submit for escutado, evita da execução vier antes da hora e o código não funcionar