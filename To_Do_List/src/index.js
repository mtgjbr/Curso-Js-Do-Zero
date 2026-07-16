import './assets/css/style.css'
import listaDeTarefas from './modules/lista_de_tarefas'


const lista = new listaDeTarefas()

document.addEventListener('click', (e) => {
    const el = e.target
    if (el.classList.contains('adicionar_tarefas')) {
        lista.criaQuadroTarefa();
    }
    if (el.classList.contains('Tarefa_Concluida')) {
        lista.tarefaConcluida(el);
    }
    if (el.classList.contains('Cancelar_Tarefa')) {
        lista.cancelarTarefa(el);
    }
    if(el.classList.contains('todos')){
        lista.selecionarTodos(el);
    }
     if(el.classList.contains('Concluir_Todas_As_Tarefas')){
        lista.tarefasConcluida();
    }
    
})