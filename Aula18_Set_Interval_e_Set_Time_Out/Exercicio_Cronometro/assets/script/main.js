const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let minutosDecorridos = 0;
let segundosDecorridos = 0;
let horasDecorridas = 0 
let tempoPassado = 0;
let inicial = 0;
let final = 0;

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
    relogio.classList.add('play')
    inicial = Date.now();

    cronometro = setInterval(function () { //declaração como global porque o pausar precisa ver ele
        final = Date.now();
        segundosDecorridos = tempoPassado + (final - inicial);
        segundosDecorridos = Math.round(segundosDecorridos / 1000)

        relogio.innerHTML = `${zeroAEsquerda(horasDecorridas)}:${zeroAEsquerda(minutosDecorridos)}:${(zeroAEsquerda(segundosDecorridos))}`
        if (segundosDecorridos === 60) adicionaMinuto();
        // com só um = vc está atribuindo o valor  
        if (minutosDecorridos === 60) adicionaHora();

    }, 500);

})
pausar.addEventListener('click', function (event) {
    if (tempoPassado !== 0) {
        tempoPassado = 0;


    }
     relogio.classList.remove('play');
     relogio.classList.add('pausado');
    tempoPassado = Date.now() - inicial; // guardar quanto tempo ja passou para depois adicionar na conta   
    let temp = tempoPassado / 1000;
    clearInterval(cronometro);


})


zerar.addEventListener('click', function (event) {

    clearInterval(cronometro);
    minutosDecorridos = (0);
    horasDecorridas = (0);
    inicial = '';
    final = '';
    // o problema que stava dando dos minutos ficarem com 0:0 é que foi deixado vazio as coisas, e ai sempre adiciona so 1 0 
    // caso o segundosCorridos fique com 0 ele vai ficar quebrado pq 
    relogio.innerHTML = '00:00:00';
})
