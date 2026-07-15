import './assets/css/style.css'
// Cronômetro com "Voltas" (Laps): Expanda o cronômetro que você estudou
//Adicione um botão "Volta" que cria uma lista de marcadores de tempo no DOM, praticando a
//  criação dinâmica de elementos HTML
const relogio = document.querySelector(".relogio");
//let timer = "";
let segundos = 0;

function CriaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // adiciona 1 seg na hora zero a cada repetição do laço
    // como o date corrige automaticamente de 60 segs para 1 min, não há necessidade de nenhum tipo de correção manual

    return data.toLocaleTimeString('pt-BR', {
        hour12: false, // formato 00:00:00 até 24 hrs
        timeZone: 'gmt' //considerando 01/01/1970 pegando a hora e minuto 0
    });
}

let timer = setInterval(() => { // se eu passar direto o interval vai vir o id pra cancelar ele com timeout
    let horaFormatada = CriaHoraDosSegundos(segundos);
    segundos++
    relogio.innerHTML = horaFormatada;
}, 1000);



