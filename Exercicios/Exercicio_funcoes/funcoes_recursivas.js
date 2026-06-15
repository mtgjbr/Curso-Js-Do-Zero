// Crie uma função recursiva contagemRegressiva(numero) que exibe uma contagem regressiva do número até 0:
function contagemRegressiva(num){
 if (num < 0 ){
 console.log("!fim")
 return
 } 
   console.log(num)
contagemRegressiva(num-1);
}
 contagemRegressiva(5)
