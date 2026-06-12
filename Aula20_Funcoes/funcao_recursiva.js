function recursiva(max){ // parecido com um laço de repetição
    if (max >= 10) return  // quando o numero for igual ou maior que dez, para
    max++;
    console.log(max);
    recursiva(max),2000;
}

recursiva(0);