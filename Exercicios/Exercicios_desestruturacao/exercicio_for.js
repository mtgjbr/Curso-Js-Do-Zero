//Exercício 1 — Desestruturação de array
//Dado esse array, use desestruturação pra pegar o primeiro, o terceiro e o resto:
const notas = [10, 7, 8, 5, 9, 6];
const [primeiroNumero,,terceitoNumero,...resto] = notas; 
console.log(`O primeiro numero é: ${primeiroNumero},o segundo é: ${terceitoNumero} e o resto é ${resto}`);

//Exercício 2 — Desestruturação de objeto
//Dado esse objeto, use desestruturação pra extrair nome numa variável chamada nomeCompleto,
 //e o endereco todo dentro de variáveis separadas rua e cidade:
 const usuario = {
    nome: "Mateus",
    idade: 20,
    endereco: {
        rua: "Av. Brasil",
        cidade: "São Paulo"
    }
}
const {nome:nomeCompleto} =usuario // o primeiro é o nome de onde se quer buscar e segundo é o nome da variavel que vai ser dada, após isso vem = "o nome do obj que ta pegando"
const {rua,cidade } = usuario.endereco // se naão tiver o nome da variavle ela assume o nome origianl do obj
//const { nome: nomeCompleto, endereco: { rua, cidade } } = usuario jeito de se escrever em apenas uma linha
console.log(nomeCompleto,rua,cidade)

//Exercício 3 — Juntando tudo
//Crie um array de objetos com 3 pessoas (cada uma com nome e idade). Use for...of pra percorrer e desestruture 
// cada objeto dentro do loop pra exibir:
//Nome: Mateus, Idade: 20
//Nome: João, Idade: 25

const pessoas = [{nome:"mateus",idade:21},
    {nome:"adalberto", idade:42}, {nome:"julia", idade:20}
]
for (atual of pessoas){
    console.log(atual)
    const {nome, idade} = atual // a cada loop o atual assume um objeto diferente e a cada loop o nome e a idade dele é pego pelo nome  e idade e mandado pelo console.log()
    console.log(`ola, eu sou ${nome}, e tenho ${idade} anos`)
}