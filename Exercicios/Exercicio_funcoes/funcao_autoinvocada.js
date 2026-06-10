// IIFE — Immediately Invoked Function Expression
/**
 * Exercício — Configuração inicial
Crie uma IIFE que:

Declara uma variável versao com o valor "1.0.0"
Declara uma variável autor com o valor "Mateus"
Exibe no console "App versão 1.0.0 criado por Mateus"
 */

(function(){
const versao = "1.0.0";
const autor = "mateus";
console.log(`App versão ${versao} criado por ${autor}`)
})() // esse simbolo no final garante que ela vai ser auto-invocada
