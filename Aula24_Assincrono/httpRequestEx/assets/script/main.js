// XMLHttpRequest função que faz requisição de qualquer tipo de dado
/**Quando você clica num link da página, em vez de navegar pra outra página
 *  ele busca o conteúdo desse link e carrega na própria página sem recarregar */

const request = obj =>{ // recebe um objeto de configuração
 const xhr = new XMLHttpRequest()// nome padrao para xmlHttprequest
 //uma API em JavaScript que permite a troca de dados entre um navegador web e um servidor em segundo plano.
 xhr.open(obj.method, obj.url, true) // open prepara a requisição, mas ainda não envia nada. É tipo escrever o endereço no envelope antes de colocar no correio. 
 // Os parâmetros são method, e o url que é o endereço dele o true indica que a requisição é assincrona, o navegador continua funcionando
 xhr.send(); // funções disponibilizadas pelo proprio xhr

 xhr.addEventListener("load",()=>{ //se ele consegui carregar o que foi pedido com sucesso ele faz o sucesso
    if(xhr.status >= 200 && xhr.status<300){ // espaço do código de sucesso
        obj.sucess(xhr.responseText); // chama a função que foi passada no objeto d configuração criada 
    } else{
        obj.error(xhr.statusText);
    }
 }); // vê quando vai ser carregado
};

document.addEventListener("click", e=>{ //no documento todo, se o clique for
const el = e.target;
const tag = el.tagName.toLowerCase();

if(tag === "a"){ //porque nao fez direto sem criar outra variavel:para o código ficar mais legivel
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
        carregaResultado(response) // callback:função passada como argumento por outra F para ser executada quando algo acontecer
    // passa a função como dado pro request, e ele chama ela quando terminar — exatamente o conceito de callback
        
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