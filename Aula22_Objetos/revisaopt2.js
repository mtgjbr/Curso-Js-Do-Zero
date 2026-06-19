// factory functions // constructor functions

//factory 

function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa("mateus", "almeida");
console.log(p1.nomeCompleto, "do p1");

//constructors functions
function Pessoa(nome,sobrenome){
  this.nome = nome; // ou p2.nome = mateus
  this.sobrenome = sobrenome ; // mesmo sendo const ele n ta troacando o valor, mas mudarndo um valor dentro do valor
  this.falaNome = ()=>{ return `${nome} ${sobrenome}`}
// no fim da função ele ja faz por automatico return 
}
// cria um objeto vazio e atrela o this ao objeto vazio
// {} <- this -> this
const p2 = new Pessoa ("mateus", "almeida"); // sempre mostrar o construtor tambem no console.log
Object.freeze(p2); // trava e não deixa ser alterada, tambem funciona com array

console.log(p2.falaNome(),"do p2")