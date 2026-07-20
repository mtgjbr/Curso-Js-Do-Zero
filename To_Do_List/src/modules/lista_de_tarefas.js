

export default class listaDeTarefas {
    constructor() {
        this.escolha = document.querySelector('.escolha')
        this.resultado = document.querySelector('.resultado');
        this.conteudo = document.querySelector('.tarefa');
    }

    criaQuadroTarefa() {
        if (this.conteudo.value === "") {
            alert("Adicione uma tarefa")
            return
        } else {

            const li = this.criali();
            li.innerText = this.conteudo.value;
            const botaoConcluido = this.criabotao("Tarefa_Concluida");
            const botaoCancelar = this.criabotao("Excluir_Tarefa");
            li.appendChild(botaoConcluido);
            li.appendChild(botaoCancelar);
            this.resultado.appendChild(li);
            this.conteudo.value = "";
        }
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
    concluirTarefa(el) {

        const li = el.parentElement;
        if (li.classList.contains('tarefa_Realizada')) {
            li.classList.remove("tarefa_Realizada")
        } else {
            li.classList.add('tarefa_Realizada');

        }
    }
    selecionarTodos(el) {
        const concluirTodos = this.criabotao("Concluir_Todas_As_Tarefas");
        const cancelartodos = this.criabotao("Cancelar_Todas_As_Tarefas");
        el.remove()
        this.escolha.appendChild(cancelartodos)
        this.escolha.appendChild(concluirTodos)
    }
    concluirTodos() {
        const todosLi = document.querySelectorAll('li');
        
        for (let li of todosLi) {
            li.classList.add('tarefa_Realizada')
        }
        this.devolveBotao();

    }
    cancelarTodos() {
        const todosLi = document.querySelectorAll('li');
        for (let li of todosLi) {
            li.remove();
        }
        this.devolveBotao();
    }
    devolveBotao() {
        document.querySelectorAll('.Concluir_Todas_As_Tarefas, .Cancelar_Todas_As_Tarefas').forEach(botao => botao.remove());
        const botaoSelecionarTodos = this.criabotao("selecionar_todos");
        this.escolha.appendChild(botaoSelecionarTodos);
    }


    salvaTarefa() {
        const todosLi = document.querySelectorAll('li');
        const arrayLi = []
        for (let li of todosLi) {
            li = li.textContent
            li = li.replace("Tarefa_Concluida", " ");
            li = li.replace("Excluir_Tarefa", " ");
            arrayLi.push(li)
        }
        console.log(arrayLi);
        const arrayLiJSON = JSON.stringify(arrayLi)
        localStorage.setItem("dados salvos", arrayLiJSON);

    }
    recuperarDadosalvos() {
        const dadoSalvo = localStorage.getItem("dados salvos");
        if(!dadoSalvo){
            return // se nao houver dados salvos ele retornar null o que cai aqui
        }
        const tabelaLis = JSON.parse(dadoSalvo);
        for (let li of tabelaLis) {
            this.criaQuadroTarefaDadosSalvos(li)
        }

    }
    criaQuadroTarefaDadosSalvos(texto) {
        const li = this.criali();
        li.innerText = texto;
        const botaoConcluido = this.criabotao("Tarefa_Concluida");
        const botaoCancelar = this.criabotao("Excluir_Tarefa");
        li.appendChild(botaoConcluido);
        li.appendChild(botaoCancelar);
        this.resultado.appendChild(li);

    }
}