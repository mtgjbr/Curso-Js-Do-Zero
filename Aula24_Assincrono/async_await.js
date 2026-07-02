function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //chama o construtor
        // resolve: codigo rodado com sucesso então resolve ele // reject: erro no código
        if (typeof msg !== "string") reject(false)

        setTimeout(() => {
            resolve(msg.toUpperCase() + "- Passei na promise"); // manda como parametro pro then
        }, tempo);

    });
}
/**
esperaAi("fase 1", rand())
.then(fase => { // como usou o promisse ele vai passarno resolve pro then que vai ter q ter
    console.log(fase);
    return esperaAi("fase 2", rand())
.then(fase => {
    console.log(fase);
    return esperaAi("fase 3", rand())
.then(fase=>{
    console.log(fase);
})
    })
}).catch(e=>console.log(e))

 */
// maneira mais facil de fazer função ir em uma ordem especifica
async function executa() {
    try{
    const fase1 = await esperaAi("fase 1", rand());
    console.log(fase1);
    const fase2 = await esperaAi("fase 2", rand());
    console.log(fase2);
    const fase3 = await esperaAi("fase 3", rand());
    console.log(fase3);
    const fase4 = await esperaAi("terminamos na fase 3", rand());
    console.log(fase4);
} catch(e){
    console.log(e)
}

}
/**
 * promisse tem 3 estados:
 * pending-> ta sendo executada e ainda não retornou
 * fullfilled -> resolvida
 * rejected-> rejeitada
 */
executa()
