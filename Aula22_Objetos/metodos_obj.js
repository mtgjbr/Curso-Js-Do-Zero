/**
 * Object.values:
 * Object.entries;
 * Object.assign (array,any) cria um obj vazio e coloca o que foi indicado na variavel indicada,nao pode ter o mesmo nome
 * Object.getPropertyDescriptior (objeto,chave) vê as propriedades de uma chave do obj
 * ... (spread)
 * 
 */

/**
 * ja foi visto:
 * Object.keys (retorna as chaves)
 * Object.freeze( congela o objeto)
 * Object.defineProperties (define varias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

const produto = {
    nome: "caneca", preco: 1.8
}

const outraCoisa = produto; // aponta pro mesmo endereço de memoria
const maisUmaCoisa = Object.assign({}, produto, { material: "porcelana" }); // cria um obj vazio e coloca o que foi indicado na variavel indicada
// Outra maneira  const maisUmaCoisa = {...produto, material:"Porcelana"}; // cria uma cópia e adiciona mais uma chave
outraCoisa.nome = "cavalo"; // mudou os dois por apontarem no mesmo local na memoria

console.log(maisUmaCoisa);
console.log(produto);
console.log(Object.keys(maisUmaCoisa)); // pega as chaves do objeto
console.log(Object.getOwnPropertyDescriptor(produto, "nome")) // vê as propriedades de uma chave do obj
console.log(Object.values(maisUmaCoisa)); // mostra os valores do obj
console.log(Object.entries(maisUmaCoisa)) // mostra os vlaores e as chaves separados por arryas
