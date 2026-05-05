// strings são indexadas = contem um idice numeral
//               01234567
let Umastring = "Um texto";
console.log(Umastring[4]); // mostra o que está no indice escolhido
console.log(Umastring[10]); // caso sejaalgo fora do escopo possivel ele vai pra undefined
console.log(Umastring.charAt(4)) //mostra o que está no indice escolhido
console.log(Umastring.concat(" ", "em"," ", "um", " ", "lindo", " ", "dia" )) //concatenação 
console.log(`${Umastring} em um lindo dia`) // template strings
console.log(Umastring.indexOf("o",3)) //procura onde tá e retorna o indice , começa a buscar pela frente, pode colocar por onde deve começar a procurar
console.log(Umastring.lastIndexOf("o",3)) //prucure onde tá o que foi pedido e retorna o indice resultado, começa a buscar por tras
console.log(Umastring.length); //retorna o tamanho
console.log(Umastring.slice(2,7)); // corta de acordo com as intruções mandadas
console.log(Umastring.slice(-3)) // começando do numero total -3 e indo para frente
console.log(Umastring.split(" ", 2 )); //divide em arrys pelo que foi pedido não incluindo o que foi pedido, o ultimo número é o limite
console.log(Umastring.toUpperCase()); //coloca tudo em caixa alta
console.log(Umastring.toLowerCase());

//