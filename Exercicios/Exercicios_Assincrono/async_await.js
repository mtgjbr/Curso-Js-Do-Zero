/**
 * async — coloca na função pra dizer que ela vai usar await
 * await — espera a Promise resolver antes de continuar
 */

function verificaIdade(idade) {
    return new Promise((resolve, reject) => { // recebe uma função anonima que tem os parametros resolve e reject
        if (idade >= 18) {
            resolve("maior de idade") // passa o parametro pro re
        } else {
            reject("menor de idade") //passa parametro para o catch caso seja necessario
        }
    });
}



async function labubu() {
    try {// se usa try catch ao inves do then.catch, ficando muito mais facill o código e facilitando pra escrever varios
        const re1 = await verificaIdade(1);
        console.log(re1);
        const re2 = await verificaIdade(18);
        console.log(re2);
        const re3 = await verificaIdade(29);
        console.log(re3);
    } catch(e) {// pega o erro que vem do reject
        console.log(e)
    }
}

labubu()