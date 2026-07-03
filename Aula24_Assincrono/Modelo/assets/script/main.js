// XMLHttpRequest função que faz requisição de qualquer tipo de dado
/**Quando você clica num link da página, em vez de navegar pra outra página
 *  ele busca o conteúdo desse link e carrega na própria página sem recarregar */

const request = obj =>{ // recebe um objeto de configuração
 const xhr = new XMLHttpRequest()// nome padrao para xmlHttprequest
 xhr.open(obj.method, obj.url, true) // buscar 
 xhr.send();

 xhr.addEventListener("load",()=>{ //se ele consegui carregar o que foi pedido com sucesso ele faz o sucesso
    if(xhr.status >= 200 && xhr.status<300){ // espaço do código de sucesso
        obj.sucess(xhr.responseText); // nao entendi essa parte
    } else{
        obj.error(xhr.statusText);
    }
 }); // vê quando vai ser carregado
};

document.addEventListener("click", e=>{ //no documento todo, se o clique for
const el = e.target;
const tag = el.tagName.toLowerCase();

if(tag === "a"){ //porque nao fez direto sem criar outra variavel?
    e.preventDefault();
carregaPagina(el)
}

})

function carregaPagina(el){
    const href = el.getAttribute('href'); //  atributo do link HTML que guarda o endereço:
    
    request({ //criar um obj com tudo que foi pedido la
    method:"GET",
    url:href,
    sucess(response){
        carregaResultado(response) // porque isso é um callback,oq é um callback
    // passa a função como dado pro request, e ele chama ela quando terminar — exatamente o conceito de callback
        //oq é response
    },
    error(errorText){
        console.log(errorText)
    }
    });
}

function carregaResultado(response){
const resultado = document.querySelector(".resultado");
resultado.innerHTML = response; // carrega o resultado no local do resultado
}

//estudar como fazer esse como com resolve/ reject