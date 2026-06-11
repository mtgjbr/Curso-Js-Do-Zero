// função construtora -> iniciar nome com letra maiuscula Pessoa (new)

function Pessoa(nome,sobrenome){
    // atributos ou metodos privados
    const ID = 123456;
    const MetodoInterno = ()=> console.log("estou no interno")

    // atributos ou metodos publicos/ acessados com notação de ponto
    this.nome = nome;// cria uma chave para nome
    this.sobrenome = sobrenome;
    this.metodo = ()=>{console.log("sou um abacate")}
}

const p1 = new Pessoa("Mateus","Almeida");
const p2 = new Pessoa("Maria", "Oliveira");

// palavra new cria num novo objeto vazio,faz o this apontar pro objeto vazio e retorna pra variavel o valor


console.log(p1.nome)
p1.metodo();
p1.MetodoInterno();