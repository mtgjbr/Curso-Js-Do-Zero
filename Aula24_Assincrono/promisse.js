// serve pra fazer que algo aconteça em uma determinada ordem
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //chama o construtor
        // resolve: codigo rodado com sucesso então resolve ele // reject: erro no código
        if(typeof msg !== "string") reject('BAD VALUE')
        setTimeout(() => {
             resolve(msg); // manda como parametro pro then
        }, tempo);
       
    });
}

// then sempre executado quando chama resolve
//catch sempre executado quando chama reject



esperaAi("Fase 1", rand(1, 3)).then(resposta=>{ // recebe uma função tbm
    console.log(resposta);
    return esperaAi(11111, rand(1,3));
}).then(resposta=>{
    console.log(resposta);
    return esperaAi("fase 3", rand(1,3))
}).then(resposta=>{
    console.log(resposta)
}).then(_=>console.log("eu serei o ultimo a ser exibido")) //_ é alternativa aos () na arrow function
.catch(e=>{
    console.log("error",e); // o e é o parametro passado
    // se der erro na função ele cai no catch
})