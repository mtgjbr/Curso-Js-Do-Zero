/**
 *  IF pode ser usado sozinho
 *  ELSE não pode ser usado sozinho, so pode ser usado como fechamente, é o se nada der certo
 *  ELSE IF tambem nã pode ser usado sozinho, mas pode ter quantos forem necessário
 */

const hora = "23";
// só executa se a condição for verdadeira
if (hora >= 0 && hora <= 11) {  // se a hora for maior ou igual e maior ou igual a 11 então:
    console.log("bom dia");
} else if (hora >= 12 && hora <= 17) { // se a primeira não atender, veja se essa atende
    console.log("boa tarde")
} else if (hora >= 18 && hora <= 23) { // se a ultima condição não for atendida, veja se essa vai
    console.log("boa noite")
} else { // se nenhuma for atendida, então:
    console.log("isso lá são hora")
}

const tenhGrana = true

if (tenhGrana) { // se tenhograna = true
    console.log("vou sair de casa")
} else { // a segunda opção vais er executada só quando a primeira não for executada 
    console.log("fico em casa")
}