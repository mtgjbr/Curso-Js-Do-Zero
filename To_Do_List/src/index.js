import './assets/css/style.css'
import listaDeTarefas from './modules/lista_de_tarefas'

const lista = new listaDeTarefas()
lista.recuperarDadosalvos()
const operacoes = { // cria array de objetos com todos os metodos
    "adicionar_tarefa":()=>lista.criaQuadroTarefa(false),
    "Tarefa_Concluida":(el)=>lista.concluirTarefa(el), // cada membro do array é uma arraow function que chama a função, se fosse só o metodo ele seria chamado assim que fosse criado, causando erro
    'Excluir_Tarefa':(el)=>lista.cancelarTarefa(el),
    'selecionar_todos':(el)=> lista.selecionarTodos(el),
    'Concluir_Todas_As_Tarefas':()=> lista.concluirTodos(),
    'Cancelar_Todas_As_Tarefas':()=> lista.cancelarTodos()
}

window.addEventListener('beforeunload', (e) => {
   lista.salvaTarefa();
});


document.addEventListener('click', (e) => { 
    let el = e.target;
    const chave = el.textContent; //cria a chave, a cada botao clicado ele vai ter o valor do nome do texto do botao
    if(operacoes[chave]){ // se o operacoes[chaves] der true é pq tem alguma chave que bate com o valor
        operacoes[chave](el); // executa 
       
    }
})