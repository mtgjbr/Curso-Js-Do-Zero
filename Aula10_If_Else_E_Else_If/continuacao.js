const numero = 10;
if (numero <= 10 && numero >=0) { // se numero for menor ou igual a 10
    console.log(" ta entre 10 e 0")
} else if (numero <= 20) { //esse precisa que o if principal seja falso para executar
    console.log("ta entre 11 e 20")
    
}else if (numero<= 30){ // esse depende que tudo seja falso para ser executado
    console.log ("seu numero é maior ou igual a 30"); //assim que ele conseguir uma condição verdadeira ele acaba o codigo if mesmo que outras tambem sejam verdadeira
}
if(numero === 10){ // para checar diferentes coisas pode se usar diferentes if's
    console.log("numero é igual a 10")
}