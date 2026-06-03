//Atividade 5 — DOM simples
//Crie uma página HTML com um input de texto e um botão. Quando o usuário clicar no botão, 


// o texto digitado deve aparecer em um <p> na página. Se o campo estiver vazio, exibe "Digite algo primeiro!".
const enviar = document.querySelector('.enviar');
const input = document.querySelector ('.texto');
const pai = document.querySelector('.pai');

function criaP(texto){
 let p = document.createElement('p');
 pai.appendChild(p);
  p.innerHTML = texto;
}


enviar.addEventListener('click',function(e){
    if(!input){
   const texto = input.value;
   
   criaP(texto)}else
    criaP("insira um texto")
})

