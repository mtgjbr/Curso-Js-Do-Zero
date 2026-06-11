//factory function ou função fabrica
function criaPessoa(nome,sobrenome,peso,altura){
    return{
        nome,
        sobrenome,
        peso,
        altura,
        // getter
         get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        fala:function(assunto){ // quando uma função está dentro de um objeto ele é chamado de método
         return ` ${this.nome} está ${assunto}.`
        },
        set nomeCompleto(valor){
           valor = valor.split (" ") //divide pelos espaços transformando em um array
           console.log(valor)
           this.nome = valor.shift(); // remoove o primeiro nome e coloca em nome
           this.sobrenome = valor.join(" ");
           console.log(this.nome)
           console.log(this.sobrenome)
        },
        // Getter, função se passando por atributo
        get imc(){ //outra maneira de escrever a função
          const indice = this.peso / (this.altura **2);
          return indice.toFixed(2) // this = se refere a pessoa que chamou o que está executando
         // mesma coisa de falar p1.peso
        }
        
    };
}
const p1 = criaPessoa ("Mateus", "Almeida", 80,1.70);
const p2 = criaPessoa ("junior", "calvacante", 76,1.83);

console.log(p1.fala("falando sobre JS"))
console.log(p1.imc);
console.log(p2.imc); // this sempre vai ser o que está chamado
console.log(p1.nomeCompleto) // quando se coloca get não precisa mais de () porque ele deixou de ser uma função normal
p1.nomeCompleto = "junin pica dura"
console.log(p1.nomeCompleto)
