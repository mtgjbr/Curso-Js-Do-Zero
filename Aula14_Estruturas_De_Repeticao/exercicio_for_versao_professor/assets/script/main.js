const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' }
];
const container = document.querySelector('.container');
const div = document.createElement('div'); // criando uma div em que as 4 tags vao ser adicionadas e depois so essa div vai ser adicionada no container


for (let i = 0;i<elementos.length;i++){
      let {tag, texto}= elementos[i]// associação via desetruturação de objetos
       let tagCriada = document.createElement(tag);
      // tagCriada.innerText = texto; // segunda maneira de fazer
      let textocriado = document.createTextNode(Node);
      tagCriada.appendChild(textocriado); //terceira maneira
       //tagCriada.innerHTML = texto; // maneira padrão de se adicionar
       div.appendChild(tagCriada);
    }
    container.appendChild(div);