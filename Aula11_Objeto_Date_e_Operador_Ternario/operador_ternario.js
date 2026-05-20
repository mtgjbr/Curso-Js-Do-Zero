// ?:
const pontuacaoUsuario = 999;

if(pontuacaoUsuario >=1000){
    console.log("usuario vip");
}else{
    console.log("usuario normal");
}
const corUsuario = null;
const corPadrao = corUsuario || "Preta";// criando um fall back, caso a cor do usuario seja null ele vai para preta pois null conta como false
const nivelUsuario = pontuacaoUsuario >=1000? "usuario vip": "usuario normal"; //mesma verificação do if / else
    // condição ? valor para veraddeira : valor para falso 

console.log(corPadrao);