const data = new Date(`1987-04-13 00:00:00`);
const diaSemana = data.getDay();

console.log( new Date())
console.log(diaSemana);
function getDiaSemanaTexto(diaSemana){
let diaSemanatexto; //aqui é let porque a variavel vai mudar dependendo do reusultado
    switch (diaSemana) {
    
    case 0:
        diaSemanatexto = "domingo"
         return diaSemanatexto; //tem que ter o break para sair do switch, o que o if ja faz por automatico
    case 1: //começa executando o que ele ancontrar como certo ele vai executando até achar um break
        diaSemanatexto = "segunda"
        return diaSemanatexto;
    case 2:
        diaSemanatexto = "terça"
        return diaSemanatexto;
    case 3:
        diaSemanatexto = "quarta"
        return diaSemanatexto;
    case 4:
        diaSemanatexto = "quinta"
        return diaSemanatexto;
    case 5:
        diaSemanatexto = "sexta"
        return diaSemanatexto;
    case 6:
        diaSemanatexto = "sabado"
        return diaSemanatexto;
    default:
        diaSemana =""; //caso nada aconteça ele executa esse
        break;
}
}
const diaSemanatexto = getDiaSemanaTexto(diaSemana); //usando const aqui porque a variavel nao vai ser mudada
console.log(diaSemana,diaSemanatexto)
