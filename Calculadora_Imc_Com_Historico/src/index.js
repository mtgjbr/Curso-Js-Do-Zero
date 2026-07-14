import './assets/css/style.css'
import calculadora from './modules/calculadora';


const atualizar = document.querySelector('.atualizar');
const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');
const enviar = document.querySelector('.enviar');
const c1 = new calculadora()

let imc=""

c1.carregaHistorico()

enviar.addEventListener('click',(e)=>{
    e.preventDefault()
    if(altura.value <0 || altura.value === "") return alert ("insira altura");
    if(peso.value <0 || peso.value === "") return alert ("insira peso"); // deixar as atribuições pra depois da verificação pra evitar trabalho desnecessario 
    c1.altura = Number(altura.value);
    c1.peso = Number(peso.value);
    console.log(Number(peso.value) , Number(altura.value))
    imc = c1.calcularImc();
    c1.mostrarResultado(imc,true);

})

//fazer uma class calculadora que vai ter os metodos 