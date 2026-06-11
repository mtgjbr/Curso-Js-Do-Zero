//visibilidade de variáveis com base no local onde são declaradas 
// no código-fonte, não onde são chamadas
const nome = "mateus";
function falaNome(){
    const nome = "MATIAS" // encontrou nesse escopo
    console.log(nome); // se ele não achar aqui ele vai procurar no pai
}

function usaFalaNome(){
    falaNome();
}
usaFalaNome();
