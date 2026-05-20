const tresHoras = 60 *60 *3 *1000 // 3 horas
const umDia =60 *60 * 24 * 1000; // 60*60 seria uma hora**24 pra ser um dia e o *1000 pra converter em horas
const data =  new Date(0+tresHoras+umDia);// para usar a função construtora date é necessário usar o new
// data(0) = 01/01/1970 timestamp unix ou época unixx
console.log(data.toString());
// console.log(data(1779320724128))//vai dar a mesma coisa da hora atual
const dataDois = new Date(2019, 3, 20, 15, 14, 27,200); //na ordem:ano , mês, dia , hora, minuto, segund, milésimo de segundo, da pra se omitir até o dia, sem o mês o js encara que 2019 sao milésimos de segundo
//começa no mês zero sendo 0 janeiro
console.log(dataDois.toString());

// valor do tipo string que representa uma data
const dataString= new Date('2019-04-20 20:20:59');
console.log(dataString.toString());

console.log('Dia', dataString.getDate()); //pega o dia
console.log('Mês', dataString.getMonth()+1); //como os meses começasm do zero entao precisa do mais um
console.log('Ano', dataString.getFullYear());
console.log('Hora', dataString.getHours());
console.log('Min', dataString.getMinutes());
console.log('Seg', dataString.getSeconds());
console.log('MS', dataString.getMilliseconds());
console.log('dia semana', dataString.getDay()); //0 - domingo e 6 é sabado
console.log(Date.now()); //tempo do marco zero té agora em ms

function zeroAEsquerda (num){
    return num >=10 ? num : `0${num}` //se o numero for maior ou igual a dez devolve ele mesmo, se não adiciona um zero a sua esquerda
}

function formataData(dia){
 const diaS =zeroAEsquerda(dia.getDate());
 const mes =zeroAEsquerda(dia.getMonth()+1); // para pegar o mês certo e não começar no zero
 const ano =zeroAEsquerda(dia.getFullYear());
 const hora =zeroAEsquerda(dia.getHours());
 const minuto =zeroAEsquerda(dia.getMinutes());
 const segundo =zeroAEsquerda(dia.getSeconds());
 return `${diaS}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}
const dia = new Date();
const dataBrasil = formataData(dia);
console.log(dataBrasil)