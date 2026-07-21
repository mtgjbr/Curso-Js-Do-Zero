const path = require('path');
const caminhoArquivo = path.resolve(__dirname,"teste.json"); //resolve e then estudar
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    {nome:"João"},
    {nome:"Maria"},
    {nome:"Eduardo"},
    {nome:"Luiza"}
];
const json = JSON.stringify(pessoas, "",2);
escreve(caminhoArquivo,json)


async function leArquivo(caminho){
    const dados = await ler(caminho) //porque o await aq faz a diferença
    rederizaDados(dados)
}

function rederizaDados(dados){
    console.log(dados)
    dados = JSON.parse(dados);
    dados.forEach(val=>console.log(val.nome)) //pra cada valor mostra no console

}
leArquivo(caminhoArquivo)