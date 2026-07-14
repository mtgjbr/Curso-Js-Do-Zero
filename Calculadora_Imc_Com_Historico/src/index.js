import './assets/css/style.css'
import calculadora from './modules/calculadora';



const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');
const enviar = document.querySelector('.enviar');

let imc=""
enviar.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(Number(peso.value) , Number(altura.value))
    const c1 = new calculadora(Number(altura.value) , Number(peso.value));
    imc = c1.calcularImc();
    c1.mostrarResultado(imc);
})

//fazer uma class calculadora que vai ter os metodos 