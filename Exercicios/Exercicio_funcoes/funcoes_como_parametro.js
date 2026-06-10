/**
 * 
Exercício — Executor de tarefas

Crie 3 funções simples:

acenderLuz() — exibe "Luz acesa"
abrirPorta() — exibe "Porta aberta"
tocarAlarme() — exibe "Alarme tocando"
Depois crie uma função executarApos3Segundos(funcao) que recebe uma função como parâmetro e a executa após 3 segundos usando setTimeout.

Chame ela 3 vezes, uma pra cada tarefa:

// após 3 segundos:
Luz acesa
Porta aberta
Alarme tocando
 * 
 * 
 * 
 */
function acenderLuz (){
    console.log("luz acessa");
}
function abrirPorta(){
    console.log("porta aberta");
} 
function tocarAlarme(){
    console.log("alarma tocando")
}

function executarApos3Segundos(funcao){
setTimeout(funcao,3000)
}
executarApos3Segundos(acenderLuz);
executarApos3Segundos(abrirPorta);
executarApos3Segundos(tocarAlarme);