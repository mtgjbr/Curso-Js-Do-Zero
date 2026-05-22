let resultado = document.querySelector("#dataText");
let data = new Date();

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}; // se num for maior ou igual a 10 voce devolve ele mesmo, se nao concatena com um 1


let dateSemana;

let dataAno = data.getFullYear();
let dataMes = data.getMonth() ;
let dataDia = data.getDate();
let dataSemana = data.getDay();
let Hora = zeroAEsquerda(data.getHours());
let minuto = zeroAEsquerda(data.getMinutes());
let segundos = zeroAEsquerda(data.getSeconds());

GetDiaSemana(dataSemana);


function GetDiaSemana(dataSemana) {
    switch (dataSemana) {
        case 0:
            dateSemana = "Domingo";
            break
        case 1:
            dateSemana = "Segunda-Feira";
            break
        case 2:
            dateSemana = "Terça-Feira";
            break
        case 3:
            dateSemana = "Quarta-Feira";
            break
        case 4:
            dateSemana = "Quinta-Feira";
            break
        case 5:
            dateSemana = "Sexta-feira";
            break
        case 6:
            dateSemana = "Sabado"
            break
    }
    return dateSemana
}
const meses = ["janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
const dateMes = meses[dataMes] // dessa maneira fica mais facil relacionar resultados do que usando switch que fica muito maior 



resultado.innerHTML = `<strong>${dateSemana}, ${dataDia} de ${dateMes} de ${dataAno}, ${Hora}:${minuto}:${segundos}</strong>`;