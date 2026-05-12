const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); // mostra o elemento que ta recebendo o evento
    const inputAltura = e.target.querySelector('#altura'); //no caso o form
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value) //joga pra number, se não for possivel retorna um nam , considerado como false pelo if
    if (!peso) { //se o peso for falso, executa , um nam
        setResultado('peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `seu imc é ${imc} (${nivelImc})`;
    setResultado(msg, true)
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if (imc >= 39.9) return nivel[5] //inverter a lógica porque assim no primeiro que ela encontra ela já retorna sem ver as outras
    if (imc >= 34.9) return nivel[4]
    if (imc > 29.9)  return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc <= 18.5) return nivel[0]

}
function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}

function criaP(className) { // objetivo da função é somente criar um paragrafo
    const p = document.createElement('p'); //cria um paragrafo
    return p

}



function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ` `;


    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }


    p.innerHTML = msg;
    resultado.appendChild(p); // insere P no resultado

}