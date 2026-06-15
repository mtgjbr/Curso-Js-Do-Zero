/**
Exercício final — Sistema de funcionários

Crie uma função construtora Funcionario(nome, salario) com:

nome e salario públicos
id privado gerado por uma função geradora (cada funcionário recebe um ID único sequencial)
Método público getId() que retorna o id
get resumo() que retorna "[1] Mateus - R$3000"
*/
// O gerador fica fora pra não resetar a cada novo funcionário — se ficasse dentro, todo funcionário começaria do ID 1

function* geraId(){
    let i=0;
    while(true){
       i++
       yield i 
    }
    
}
let gerador = geraId()

function Funcionario(nome,salario){
    this.nome = nome;
    this.salario = salario;
    const id = gerador.next().value; // aqui ele sempre voltaria pro 1 pro o next de 0 é 1
    this.GetId= ()=>{
        console.log(id)
    };
    this.getResumo=()=>{
        console.log(`[${id}] ${nome}-${salario}`)
    }
}

const f1 = new Funcionario("Mateus","1800")
f1.GetId();
f1.getResumo();
const f2 = new Funcionario("julia", "2000")
f2.GetId()
f2.getResumo()
console.log("----------")

/**
Depois crie uma função fábrica criaEquipe() que retorna um objeto com:

adicionar(funcionario) — adiciona à equipe
listar() — percorre com for...of e exibe o resumo de cada um
get totalSalarios() — retorna a soma de todos os salários */
 
function criaEquipe(){
  const listafunc = [ ];
    return {
      adicionar(funcionario){
      listafunc.push(funcionario)
     },
     listar(){ // get n recebe parametro pq ele se comporta como atributo
        for(func of listafunc){
          func.getResumo()
        }
     },
      totalSalarios(){
         let salario= 0;
        for (func of listafunc){
        salario += Number(func.salario)
            
        }
        return salario
     }
   }
}

const fabrica = criaEquipe();
fabrica.adicionar(f1);
fabrica.listar();
console.log("----------")
fabrica.adicionar(f2);
(fabrica.listar());
console.log(fabrica.totalSalarios())