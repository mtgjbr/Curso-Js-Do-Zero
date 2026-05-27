const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let numero of numeros){ // percorre o array numeros, criando a variavel numero e atualizando ela toda hora
    if (numero === 2 || numero ===5){ 
        console.log("pulei o numero")
        continue;// se o numero for igual a 2 ou a 5, pula pra proxima iteração sem executar o resto
    // continue = ignora o resto
    }

    console.log(numero);
}
console.log("#############")
for(let numero of numeros){
    if(numero === 7){
     console.log('numero 7 encontrado, saindo...')
        break; // quebra o código, nao executa mais
    }
    console.log(numero)
}

// continue pula para a proxima iteração, break sai do laço