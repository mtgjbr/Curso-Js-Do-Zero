const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let minutosDecorridos = 0;
let segundosDecorridos = 0;
let horasDecorridas = 0
let tempoPassado = 0;
let inicial = 0
function zeroAEsquerda(num) {
    if (num < 10) {
        return `0${num}`
    } else
        return num // como ela foi chamada ela precisa retornar alguma coisa
}
function adicionaMinuto() {
    inicial = Date.now(); // Date.now() é melhor pra zerar do que =0 pq 0 conta como numero e para fazer a operação vai dar mt grandes
    // reiniciar o inicial não o decorrido porque se não o  segundosdecorridos vai sempre atualizar com o inicial
    minutosDecorridos++;
    segundosDecorridos = 0;
}
function adicionaHora() {
    // Date.now() é melhor pra zerar do que =0 pq 0 conta como numero e para fazer a operação vai dar mt grandes
    // reiniciar o inicial não o decorrido porque se não o  segundosdecorridos vai sempre atualizar com o inicial
    minutosDecorridos = 0;
    horasDecorridas++;
}
iniciar.addEventListener('click', function (event) { // quando clicado, ele pega o clique e chama a função anonima 
    inicial = Date.now();

    cronometro = setInterval(function () { //declaração como global porque o pausar precisa ver ele
        let final = Date.now();
        segundosDecorridos = tempoPassado + (final - inicial);
        segundosDecorridos = Math.round(segundosDecorridos / 1000)

        relogio.innerHTML = `${zeroAEsquerda(horasDecorridas)}:${zeroAEsquerda(minutosDecorridos)}:${zeroAEsquerda(segundosDecorridos)}`
        if (segundosDecorridos === 60) adicionaMinuto();
        // com só um = vc está atribuindo o valor  
        if (minutosDecorridos === 60) adicionaHora();

    }, 1000);
})
pausar.addEventListener('click', function (event) {
    console.log('cliquei no pausar');
    setTimeout(function () {
        tempoPassado = Date.now() - inicial; // guardar quanto tempo ja passou
        console.log(segundosDecorridos)
        console.log(tempoPassado)
        clearInterval(cronometro)

    })
})
zerar.addEventListener('click', function (event) {
    console.log('cliquei no reinicar');
})

// ideias pra fazer o relogio, cada botão separadamente, pro iniciar  fazer um laço while infinito

//return data.toLocaleTimeString('pt-BR',{
//   hour: '2-digit',
//   minute:'2-digit',
//   second:'2-digit',
//   hour12:false