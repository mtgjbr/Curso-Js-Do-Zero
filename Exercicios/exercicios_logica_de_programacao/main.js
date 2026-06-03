    //Atividade 5 — DOM simples
    //Crie uma página HTML com um input de texto e um botão. Quando o usuário clicar no botão, 


    // o texto digitado deve aparecer em um <p> na página. Se o campo estiver vazio, exibe "Digite algo primeiro!".
    const enviar = document.querySelector('.enviar');
    const input = document.querySelector ('.texto');
    const pai = document.querySelector('.pai');

    function criaP(texto){ //cria um paragrafo e adiciona como filho do pai, adiciona o texto como o conteudo de p
    let p = document.createElement('p');
    pai.appendChild(p);
    p.innerHTML = texto;
    }


    enviar.addEventListener('click',function(e){ // se estiver algo escrito , pega o valor e chama o criap
        if(input.value){
    const texto = input.value;
    input.value = ""
    criaP(texto) 
    }else{ //caso o contrario escreve a frase insira um texto
        criaP("insira um texto")
    }
        })

