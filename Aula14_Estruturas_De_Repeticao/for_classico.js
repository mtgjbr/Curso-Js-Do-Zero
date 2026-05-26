// usado para evitar linhas repetitivas

// i - index
for (let i = 0;i <=5; i++){ //uma variavel, uma condição que para a repetição e incremento ou decremento da variavel
 // i=0 até i for igual a 5 ele executa, a cada vez executado ele vai adicionar 1
    console.log(`A conta está em ${i}`)
}
// i tambem pode ser incrmentado com += NUMERO para uamentar os numeros
//tambem é possivel decrementar ou começar de numeros negativos

for (let i = 0;i <=5; i++){
 const par = i % 2 === 0 ? "é par": "é impar" //verifica se o resto da divisão é 0 pra ver se é par
 // operador ternário // condição ? valor para verdadeira : valor para falso 
 console.log(i, par);
}   //             0       1       2
const frutas = ["maçã", "pêra", "uva"];
console.log(frutas.length) //tem 3 elementos

for (let i = 0;i<frutas.length;i++){ //executa enquanto tiver elementos no array
 console.log(`Índice ${i}`,frutas[i]) 
 // como começa do zero se fosse até o 3 ia ser undefined
}