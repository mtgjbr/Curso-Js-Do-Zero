function meuEscopo() {
    const form = document.querySelector('.form'); //seleciona o formulario
    //form.onsubmit = function(evento){ // leitura = quando o formulario for enviado, a função anonima irá impedir que o que era pra acontecer pro padrão não aconteça ( o recarregamento da pag)
    //evento.preventDefault();
    //alert("aaaaaaaaaaas");
    //};
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    function criaPessoa(nome, sobrenome, peso, altura) {
        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura,
        });
        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`;
    };



    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        criaPessoa(nome.value, sobrenome.value, peso.value, altura.value) //pega os valores e joga pra função cria pessoa, ja chamando ela

        //sem o .value ele pega o objeto html inteiro o p inteiro, quando usa o .value vem so o valor dele
    }
    form.addEventListener('submit', recebeEventoForm); // sem os () pq ela so vai ser chamada quando tiver o envio do formulario
    // adiciona um escutador de eventos pra formulario

    //procura por classe, id ou nome da tag, mas é mais lento que get elementbyid
    // procurar por id usar #, procurar por classe usar .

    console.log(pessoas)

}

meuEscopo();
//
