/*
A diferença principal é o new — quando você usa new, o JS faz 3 coisas automaticamente:

Cria um objeto vazio {}
Faz o this apontar pra esse objeto vazio
Retorna o objeto no final — sem precisar de return
*/
/*Crie uma função construtora Carro(marca, modelo, ano) com:

Atributo privado id com valor fixo Math.random()
Atributos públicos marca, modelo, ano
Método público descricao() que exibe "Toyota Corolla 2020"
Método público getId() que retorna o id privado*/

function Carro(marca,modelo,ano){
    const id = Math.floor(Math.random() * 1000) + 1;
    this.marca = marca; // o this se referencia ao valor que foi passado pra função e joga pra esse atributo publico
    this.modelo = modelo;
    this.ano = ano;
    this.getId=()=>{ // função anonima com arrow functions
        console.log(id);
    };
    this.descricao=()=>{
        console.log(`${this.marca} ${this.modelo} ${this.ano}`)
    }
    
}
const vrumrum = new Carro ("chevlolet", "4 rodas", "2099");
vrumrum.getId();
vrumrum.descricao()