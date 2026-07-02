function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //chama o construtor
        // resolve: codigo rodado com sucesso então resolve ele // reject: erro no código
        if(typeof msg !== "string") reject(false)

        setTimeout(() => {
             resolve(msg.toUpperCase()+ "- Passei na promise"); // manda como parametro pro then
        }, tempo);
       
    });
}
//promise.all = passa um array com promessar e ele entrega apenas um array com todos os valores
// se uma der errado ele passa so o valor do error 
const promises = ["primeiro valor",
     esperaAi("promise 1", 3000),
    esperaAi("promise 2", 3000),
     esperaAi("promise 3", 3000), 
     "outro valor"

]
Promise.all(promises).then(function(valor){ // executa todos e passa como valor pro then
    console.log(valor)
}).catch(function(error){
    console.log(error)
})


//promise.race = passar todas as promessas e entrega a primeira que for executada
// mas ele ainda executa o resto das promessas , entrega o valor mesmo que tenha uma que der erro
Promise.race(promises).then(function(valor){
    console.log(valor)
}).catch(function(e){
    console.log(e)
})
//promise.resolve: retorna uma promessa resolvida
// o que seria uma promessa rejeitada ou resolvida?
function baixaPagina(){
     const emCache = true;
     if(emCache){
        return Promise.resolve("página em cache"); // retorna uma promessa resolvida
     } else {
        return (esperaAi("baixei a pagina", 3000))
     }

//promise.reject: retorna uma promessa rejeitada, fazendo cair no catch

}


baixaPagina().then(dadospag=>{
    console.log(dadospag)
}).catch(e=> console.log(e))
