import {GeraCPF}  from './modules/geraCPF'; 
/**O Webpack (assim como o Node.js, ou o navegador com ES Modules nativos) precisa carregar e executar o arquivo 
 * geraCPF.js inteiro, de cima a baixo, pra conseguir descobrir o que ele exporta. Não tem como pegar só o export sem rodar o resto do arquivo 
 * ou seja, ele roda td, até se tiver um console.log() ou algo do genero*/


import './assets/css/style.css';


(function(){
const gera = new GeraCPF();
const cpfGerado = document.querySelector('.cpf-gerado');
cpfGerado.innerHTML = gera.geraNovoCpf()
})();