import './assets/css/style.css'
import listaDeTarefas from './modules/lista_de_tarefas'


const lista = new listaDeTarefas()
lista.recuperarDadosalvos()

window.addEventListener('beforeunload', (e) => {
   lista.salvaTarefa();
});


document.addEventListener('click', (e) => {
    const el = e.target
    if (el.classList.contains('adicionar_tarefas')) {
        lista.criaQuadroTarefa(false);
    }
    if (el.classList.contains('Tarefa_Concluida')) {
        lista.concluirTarefa(el);
    }
    if (el.classList.contains('Excluir_Tarefa')) {
        lista.cancelarTarefa(el);
    }
    if(el.classList.contains('selecionar_todos')){
        lista.selecionarTodos(el)
    }
     if(el.classList.contains('Concluir_Todas_As_Tarefas')){
        lista.concluirTodos();
    }
     if(el.classList.contains('Cancelar_Todas_As_Tarefas')){
        lista.cancelarTodos();
    }
    
})