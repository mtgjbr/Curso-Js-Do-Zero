const elementoPai = document.querySelector('.container')

const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' }
]
// da pra fazer assim, repeteição no laço for para adicionar as tags e depois usar os textos .innerhtml pra sempre ir adicionando
function criaTag(elementos) {
    for (i = 0; i < elementos.length; i++) { // sem o let os dois i vao ficar se auto reiniciando fazendo o programa ficar eterno
        console.log(elementos[i]);
        const { tag } = elementos[i]; // se deixar sem o indice i vai dar error porque vai tentar pegar tag em um lugar que só tem array, causando erro
        // elementoPai.innerHTML += tag[i] // como aqui ja virou uma string não da pra usar o i que vai acessar o indice de cada letra
        tags = document.createElement(tag)
        tags.innerHTML += criaTexto();
        elementoPai.appendChild(tags)
    }
}
function criaTexto() {
    const { texto } = elementos[i] // não precisa fazer outro for pq o primeiro ja tá repetindo tudo 3 vezes, fazendo assim sem o let é possivel aproveitar do for como uma variavel glovbal
    return texto // não reomendavel fazer desse jeito porque caso precise fazer uma mudança teria que mudar td, ao inves disso ja chamar a função cria texto com elementos[i] e só retorna o elementos.textk
}



criaTag(elementos);