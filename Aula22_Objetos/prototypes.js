// Js é baseada em prototipos para passar propriedades e metodos de um objeto para outro.

// protótipo: é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções
// todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade
// prototype da função construtora que foi usada para cria-lo. Qunado tentamos acessar um membro de um objeto, primeiro
// o motor do js vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null)
// até encontrar (ou não) tal membro.
// ou seja:  o prototype é uma ferramente ja feita com a função construtora,usado para manipular o proto e usar o metodo criado apenas pelo pai, e nao por todas as instancias

// construtora -> molde (classe)
function Pessoa (nome,sobrenome){
    this.nome = nome; // o nome de fora é igual vai da valor a chave nome;
    this.sobrenome = sobrenome // nao é uma variavel, é uma propriedade do obj ent toda vez que for chamada tem que ter this
}
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + " " + this.sobrenome;
}

// criando uma instância da função construtora
const Pessoa1 = new Pessoa ("Luiz", "O."); // <- pessoa = função contrutora
const data = new Date();  // <- date = função contrutora

function falanome(nome,sobrenome){
 console.log(`${nome} ${sobrenome}`)
}

console.dir(Pessoa1);
console.log(data);  // ao contrario do 
