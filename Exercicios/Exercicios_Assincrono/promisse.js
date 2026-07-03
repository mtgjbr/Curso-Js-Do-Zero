// Assíncrono é quando o código não espera uma tarefa terminar pra continuar
// sincrono, ele força o código a agir em uma determinada ordem

/** 3 estados da promisse:
 *
pending — ainda executando
fulfilled — terminou com sucesso
rejected — deu erro


*/

//*
/**Exercício — Promise
Crie uma função verificaIdade(idade) que retorna uma Promise:

Se idade >= 18, resolve com "Maior de idade"
Se não, rejeita com "Menor de idade"

*/

function verificaIdade(idade) {
    return new Promise((resolve, reject) => { // recebe uma função anonima que tem os parametros resolve e reject
        if (idade >= 18) {
            resolve("maior de idade")
        } else {
            reject("menor de idade")
        }
    });
}

verificaIdade(11).then(msg => { // se ele cai no reject ele pula todos os then e vai direto pro catch
    console.log(msg)
    return verificaIdade(19);
}).then(msg => console.log(msg))
.catch(msg => console.log(msg)) // o resolve e o reject sempre passam um parametro,que ele tem pode pegar com uma função anonima

//só precisa de um catch no final, ele captura todos os erros