/**
 * Crie uma função soma que aceita qualquer quantidade de números e retorna a soma de todos:
 * 
 * 
 */

function soma(...numeros){
   let resultado = 0
    for (numero of numeros){
        resultado += numero;
        
        
    }
    return resultado
   
}
console.log(soma(1,2,3,4));