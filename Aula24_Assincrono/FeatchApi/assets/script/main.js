
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try{
    const href = el.getAttribute('href'); // oq é href:atributo do HTML que guarda o endereço do link
    const response = await fetch(href) // O resultado que voltou do servidor (status + corpo ainda fechado)
    //precisa do .text pra ter o conteudo lido
//  é uma função pronta do navegador 
// função dela é simples: buscar algo de uma URL.

    if (response.status !== 200) throw new Error("erro 404")
    const html = await response.text()
    carregaResultado(html)
}catch(erro){
    console.log(erro)
}
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
