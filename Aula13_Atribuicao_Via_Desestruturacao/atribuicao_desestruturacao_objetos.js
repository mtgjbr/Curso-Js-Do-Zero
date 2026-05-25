const pessoa ={
 nome:"Mateus",
 sobrenome:"Almeida",
 idade:30,
 endereco:{
  rua:"Avenida Brasil",
  Numero:320
 }
};
console.log(pessoa.nome); // usando .nome para saber algo especifico
//const nome = pessoa.nome; // atribuição normal
const {nome:teste= "valor padrão", sobrenome, ...resto} = pessoa; // atribuição via desestruturação 
// passando um objeto geral e extrai o nome
// nome:teste pegando a chave nome para colocar o valor dentro de teste
// definindo valor padrao em caso de não existir
console.log(teste, sobrenome," e o que sobra:" ,resto) 
const {endereco: {rua:lugar, Numero:numeral}} = pessoa // usa a chave endereço logo em seguida usa as chaves rua e numero para colocar os valores nas variaveis numeral e lugar
// da pra pegar o obj completo tambem usando somente {endereco:{rua, numero}} = pessoa
console.log(numeral,lugar)