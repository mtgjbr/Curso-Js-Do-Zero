function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
     hour12: false
    })
}
function funcaoDointerval(){
console.log(mostraHora());
}
// setInterval(funcaoDointerval, 1000) // passar referencia = chamar a função sem executar, e depois passar o intervalo
// setInterval usada para realizarima tarefa continuamente em um intervalo de tempo
// jeito mais utilizado

const timer = setInterval(function (){ // chamando uma função anonima para realizar a tarefa de chamar
    console.log(mostraHora()); 
},1000)

setTimeout(function(){ // executa uma vez, usada para fazer algo depois de um tempo
    clearInterval(timer)
},5000)

setTimeout(function(){
    console.log("Olá mundo");
}, 10000)

