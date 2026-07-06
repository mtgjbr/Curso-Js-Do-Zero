//**
// fetch('pessoa.json').then(resposta=>resposta.json()).then(json=>carregaElementosNaPagina(json));// como que funcionou essa linha de código? muito confuso

//  */
// crregou o json mas ainda nao leu ele,usa o then pra converter pra json,e o segundo pra chamar a função que criou a tabela  


axios('pessoa.json').then(Resposta=>carregaElementosNaPagina(Resposta.data)); // como funciona axios
// faz a conversão sozinho, automaticamente. Ele te entrega o array pronto direto dentro de Resposta.data 
//não precisa chamar nada tipo .json() manualmente.

function carregaElementosNaPagina(json){
    const table = document.createElement('table') // cria uma tabela mas n coloca ela em lugar nenhum 
    for(let pessoa of json){ //retorna um objeto de pessoa por volta do laço
    const tr = document.createElement('tr');// linha

    let td1 = document.createElement('td') // celula do nome
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1)
    
    let td2 = document.createElement('td') // celula da idade
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2)

    
    let td3 = document.createElement('td') // celula do salario
    td3.innerHTML = pessoa.salario;
    tr.appendChild(td3) // coloca a celula na linha 

    table.appendChild(tr) //coloca a linha na tabela

    
        console.log(pessoa.nome)
    
    
    
    }
    const resultado = document.querySelector(".resultado");
    resultado.appendChild(table) // coloca a tabela no resultado
}
