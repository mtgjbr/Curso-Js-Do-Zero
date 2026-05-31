function CriaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // adiciona 1 na hora zero
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'gmt' //considerando 01/01/1970 pegando a hora e minuto 0
    });
}

let segundos = 0; // o segundos se mantem mesmo com o clear interval, não se apaga com o pausa,muito mais pratico 
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = CriaHoraDosSegundos(segundos)
    }, 1000);
};


document.addEventListener('click', function (e) {
    const elementoclick = e.target;

    if (elementoclick.contains(zerar)) { // se o elemento clicado tiver a classe zerar então
        console.log("voce clicou em zerar");
        clearInterval(timer)
        segundos = 0
        relogio.innerHTML = "00:00:00"
    }
    if (elementoclick.contains(iniciar)) {
        console.log("voce clicou em iniciar");
        clearInterval(timer);
        iniciaRelogio();
        relogio.classList.remove('pausado');
    }
    if (elementoclick.contains(pausar)) {
        console.log("voce clicou em pausar");
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
})