const inputTarefa = document.querySelector('.input_tarefa');
const bntTarefa = document.querySelector('.btn_tarefa');
const tarefas = document.querySelector('.tarefas');
//  e existe sempre, mas você só precisa declará-lo quando for usar alguma informação dele, como por exemplo pegar o elemento que foi clicado
// no código atual o e não é usado em momento nenhum
function criaLi() {
    const li = document.createElement('li'); // cria o elemento de html li
    return li
}

inputTarefa.addEventListener('keypress', function (e) { // aqui ele ta usando o input pq ele vai ser ativo quando o input for clicado e dar enter com ele pressionado
    if (e.keyCode === 13) { // se a tecla clicada tiver quando estiver no input tiver o keycode 13 (enter), então:
        if (!inputTarefa.value) return console.log("não está fazendo nada"); // se for um false ou seja, vazio, então:
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput() {
    inputTarefa.value = ''; //limpa o imput 
    inputTarefa.focus(); // coloca o cursor de volta pra ele
}
function criaBotaoApagar(li) { // precisa do texto para saber criar o botão do lado
    li.innerText += " " //adiciona um expaço
    const botaoApagar = document.createElement('button'); // cria o botão
    botaoApagar.innerText = 'apagar' //define o texto do botão como apagar
    botaoApagar.setAttribute('class', 'apagar'); // adiciona um atributo, sendo ele a classe apagar
    botaoApagar.setAttribute('title', 'apagar esta tarefa'); //adiciona o titulo
    li.appendChild(botaoApagar);
}
function criaTarefa(textoInput) { //texto input é uma variavel que só existe aqui na função
    const li = criaLi(); // define o li como o valor que vai vim da função criaLi, as duas variaveis li são completamente diferente
    li.innerText = textoInput; // adiciona o texto no li
    tarefas.appendChild(li); //adiciona o li como filho nas Ul tarefas
    limpaInput() // ela só precisa está aqui pq os dois inputs chamam essa função
    criaBotaoApagar(li) // pega o li que foi originalmente criado na função cria li e envia pra outra função
    salvarTarefas()
}


bntTarefa.addEventListener('click', function (e) { // se o botão bnttarefa for clicado, pega o que ta no input tarefa e exibe
    // "" considera false e " " considera true 
    // é melhor checar invertido, se for diferente de inputTarefa  EarlyReturn / Guarde clase
    if (!inputTarefa.value) return console.log("não está fazendo nada");
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) { // escutador de clique no document
    const el = e.target; // ve onde foi clicado

    if (el.classList.contains('apagar')) { // se onde foi clicado tiver a classe apagar, então:
        el.parentElement.remove(); // pega o parente dele, no caso o li e remove ele, e se some o pai o filho tambem vai
        salvarTarefas() // atualiza as tarefas e retira a que foi apagada do array
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // pega todos os elemento que são li e oq contem em cada
    const listaDeTarefas = []; // cria um array vazio
    for (let tarefa of liTarefas) { // cria uma variavle com todos os texto de litarefas
        let tarefaTexto = tarefa.innerText; // pega o texto de tarefa e coloca e tarefatexto
        tarefaTexto = tarefaTexto.replace('apagar', "").trim(); // apaga todos os apagar em nos li e troca por nada(""), o trim remove espaços vazios
        listaDeTarefas.push(tarefaTexto) // finalmente joga todos os li para o array vazio
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas) // criada uma string em json que pode ser pega dps e tranformar em array
    localStorage.setItem('tarefas', tarefasJSON) // salva no navegador com o nome tarefas e vai salvar do tarefasSon
    // localstorage é global do navegador então pode ser usado de qualquer lugar
}
// json== formato de texto para salvar dados entre sistemas 

function AdicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas) //outra lista de tarefas, não é a mesma 
    // parse tranformou de volta em array

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa) // percorre todas as tarefas da lista e pra cada uma adiciona ela usando a função criaTarefa
    }

    console.log(tarefas)
}
AdicionaTarefasSalvas();