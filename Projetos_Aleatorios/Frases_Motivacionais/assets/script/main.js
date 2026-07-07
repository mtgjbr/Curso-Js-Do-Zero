// como fazer: apertar botao pega no array david brito com rand que escolhe um numero de 1 a 12

const resultado = document.querySelector('.frase');
const botao = document.querySelector('.botao');
const container = document.querySelector('.container');

botao.addEventListener('click', function () {
    selecionaF();

})

function selecionaF() {
    resultado.innerHTML = frasesDaviBrito[rand()]



}

const frasesDaviBrito = [
    "Calma, calabreso!",
    "Eu sou homem, parceiro! Não sou mulher não, eu sou homem!",
    "Você já vendeu água mineral na Lapa? Com balde?",
    "Eu não tenho medo de paredão. O meu medo é a fome!",
    "Aqui é jogo, mas lá fora a gente pode ser amigo.",
    "Se eu tenho que ser alvo, eu vou ser alvo jogando!",
    "Aqui o bicho pega, o sistema é bruto!",
    "Não vim aqui para brincar, vim para lutar pelo meu futuro.",
    "A mentira tem perna curta, a verdade sempre aparece.",
    "Minha estratégia é ser eu mesmo, doa a quem doer.",
    "A mulher, por ser mulher, tem que se colocar no lugar dela para ter o respeito do homem.",
    "Sou homem, não viaje não. Eu sou homem nessa desgraça!",
    "Que nunca me falte força pra evoluir, fé pra não desistir e coragem pra ir sempre além.",
    "Cada meta alcançada é um passo rumo ao propósito.",
    "A mudança começa no momento em que você acredita que merece mais."
];

function rand() {
    const min = 0;
    const max = frasesDaviBrito.length;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand
}


function Trocatela() {
    setInterval(() => {
        if (container.style.backgroundColor === "blue") {
            container.style.backgroundColor = "yellow";
        } else {
            container.style.backgroundColor = "blue";
        }

    }, 1500)

}
Trocatela()