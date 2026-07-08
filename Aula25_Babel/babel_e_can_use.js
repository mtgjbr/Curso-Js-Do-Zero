// https://caniuse.com/ ferramenta pra ver se determinada ferramenta funciona em certos navegadores
// babel serve pra algo funciona em  todos os navegadores
//npm , gerenciador de pacotes (node package manager)
// iniciar : npm init -y
// npm install --save-dev @babel/cli @babel/present-env @babel/core
const nome = "Luiz";
const obj = {nome};
const novoObj = {...obj};
console.log(novoObj);
// para fazer a tradução do código para as versoes mais antigas
// npx babel NOMEAQUIVO.JS -o NOMEDOARQUIVODESAIDA(normalmente bundle.js) --presets=@babel/env  
// esse preset=@babel/env é o que vai fazer sai o código 


class Controle {
  #chavePrivada = "secreta";

  get valor() {
    return this.#chavePrivada ?? "vazio";
  }
}