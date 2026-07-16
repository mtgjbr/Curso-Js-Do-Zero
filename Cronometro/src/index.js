import './assets/css/style.css'
import Cronômetro from './modules/cronometro';
// Cronômetro com "Voltas" (Laps): Expanda o cronômetro que você estudou
//Adicione um botão "Volta" que cria uma lista de marcadores de tempo no DOM, praticando a
//  criação dinâmica de elementos HTML

const comecar = document.querySelector('.comecar');
const pausar = document.querySelector('.pausar');
const volta = document.querySelector('volta');
const reiniciar = document.querySelector('.reiniciar');

//let timer = "";
let segundos = 0;
const c1= new Cronômetro();

document.addEventListener('click',(e)=>{
 console.log(e.target)
 if(e.target.classList.contains("comecar")){  // confere se nas classes do botão tem começar
    c1.comecar()}
  if(e.target.classList.contains("pausar")){ 
    c1.pausar()}
 if(e.target.classList.contains("volta")){ 
    c1.marcarVolta()}
    if(e.target.classList.contains("reinciar")){ 
    c1.reinicar()}

})





