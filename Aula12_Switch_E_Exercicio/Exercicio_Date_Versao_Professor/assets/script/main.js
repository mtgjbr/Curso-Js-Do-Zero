let resultado = document.querySelector("#dataText");
let data = new Date();

const opcoes = {
    dateStyle:'full',
    timeStyle:'short'
};

resultado.innerHTML = data.toLocaleString('pt-BR', {dateStyle:'full',timeStyle:"short"});