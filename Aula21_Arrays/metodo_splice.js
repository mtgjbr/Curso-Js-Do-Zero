const nomes = ["maria", "joao", "Eduardo", "Gabriel", "Julia"];

// nomes.splice(Indice(onde vai mexer), Delete(quantos numeros quer apagar), elementos para adicionar);
const removidos = nomes.splice(3, 2); // coomeça do indice 3 e remove 2
// const removidos = nomes.splice(3, 1); remove um item do indice 3
nomes.splice(2,0,"luiz") // adiciona NO indice 2 o luiz e empura o  eduardo pra frente
//nomes.splice(-1,1) imita o pop, reomve do final
//nomes.splice(nomes.leght,0,"alberto"); imita o push, adiciona ao final

//remove a julia ao retornar o elemento removido retorna em um array

console.log(nomes, removidos);