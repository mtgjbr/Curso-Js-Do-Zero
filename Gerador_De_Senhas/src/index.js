import { Maiuscula } from './modules/maiusculas';
import { Minusculas } from './modules/minusculas';
import { Simbolos } from './modules/simbolos';
import { Numeros } from './modules/numeros';
import './assets/css/style.css';

const botao = document.querySelector('.enviar');
const quantidade = document.querySelector('#Quantidade')
const boxNumeros = document.querySelector('#numeros');
const boxMaiusculas = document.querySelector('#maiusculas');
const boxMinusculas = document.querySelector('#minusculas');
const boxSimbolos = document.querySelector('#simbolos');
const Resultado = document.querySelector('.resultado')


let senha= "";


botao.addEventListener('click', e => {
    e.preventDefault(); //.lenght aqui nao serve, porque essa função é so para strings
    const quantidadeC = Number(quantidade.value); //tem que criar um aqui, se criar do lado de fora ele so vai atualizar uma vez, e precisamos atualizar toda vez que o botao for clicado
    const tiposAtivos = []; //cria um array antes vazio pra definir os tipos
    senha = ""
    if (boxNumeros.checked) tiposAtivos.push(Numeros);
    if (boxMaiusculas.checked) tiposAtivos.push(Maiuscula);
    if (boxMinusculas.checked) tiposAtivos.push(Minusculas);
    if (boxSimbolos.checked) tiposAtivos.push(Simbolos);

    for (let i = 0; i < quantidadeC; i++) {
         const classeDaVez = tiposAtivos[i % tiposAtivos.length];
         //Se o número da esquerda é maior ou igual ao da direita → você divide de verdade e vê o que sobra (tipo 7 % 3: cabe 2 vezes, sobra 1)
         //Se o número da esquerda é menor que o da direita → nem cabe uma vez, então sobra ele mesmo, inteiro (tipo 2 % 3 = 2, ou 0 % 5 = 0)
        senha += classeDaVez.sorteio(); // nome do metodo generico pra toda class puder usar
    }
    Resultado.innerHTML = senha;

})


console.log(Numeros.sorteio());
console.log(Simbolos.sorteio());
console.log(Maiuscula.sorteio());
console.log(Minusculas.sorteio());

