const conteudo = document.querySelector('.tarefa');
const resultado = document.querySelector('.resultado');
const escolha =document.querySelector('.escolha'); // pensar em uma maneira para nao precisar desse escolha aqui

export default class listaDeTarefas {

    salvaTarefa() {


    }

    criaQuadroTarefa() {
        const li = this.criali();
        li.innerText = conteudo.value;
        const botaoConcluido = this.criabotao("Tarefa_Concluida");
        const botaoCancelar = this.criabotao("Cancelar_Tarefa");
        li.appendChild(botaoConcluido);
        li.appendChild(botaoCancelar);
        resultado.appendChild(li);
        conteudo.value = ""


    }
    criali() {
        const li = document.createElement('li');
        return li
    }

    criabotao(estado) {
        const botao = document.createElement('button');
        botao.innerText = estado;
        botao.classList.add(estado);
        return botao
    }
    cancelarTarefa(el) {
        el.parentElement.remove();

    }
    tarefaConcluida(el) {
        const li = el.parentElement;
        li.classList.add('tarefa_Realizada');
        console.log(li)
    }
    selecionarTodos(el){
        const concluirTodos = this.criabotao("Concluir_Todas_As_Tarefas");
        const cancelartodos = this.criabotao("Cancelar_Todas_As_Tarefas");
        el.remove()
        escolha.appendChild(cancelartodos)
        escolha.appendChild(concluirTodos)
    }
    tarefasConcluida(){
       const juju= document.querySelectorAll('li');
       //fazer for each ou algum for para iterar e adicionar cada li com a tag concluida, fazer mesma logica para o cancelar
        console.log(juju)


    }
}