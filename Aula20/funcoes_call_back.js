function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log("f1");
        if (callback) callback();// se callback existe, executa ele
    }, rand())
}
function f2(callback) {
    setTimeout(function () {
        console.log("f2");
        if (callback) callback();
    }, rand())
}
function f3(callback) {
    setTimeout(function () {
        console.log("f3");
        if (callback) callback();
    }, rand())
};


f1(f1callback); // callback é usado para deixar as coisas em uma determinada ordem
// callback = "quando você terminar, executa isso aqui"

function f1callback(){
    f2(f2callback); // f2 recebe uma função chamada callback, no qual ativa o if 
}
function f2callback(){
    f3(f3callback)
}
function f3callback(){
    console.log("Ola mundo")
}


/* maneira um, menos correta pois vira uma arvore de natal
f1(function () { // usa uma função anonima para o chamar o f2 para poder ir na ordem desejada
    f2(function () { // f2 usa uma função anonima para chamar o f3 para executar
        f3(function () {
         console.log("ola mundo");
        })
    });
});

// mantendo a ordem certa 
 */