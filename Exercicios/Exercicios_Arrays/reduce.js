// acumulador — o valor que vai sendo acumulado a cada volta
// valor — o item atual do array

/**Exercício — reduce
Dado esse array, use reduce para:

Somar todos os salários
Encontrar o funcionário com maior salário
 */

const funcionarios = [
    { nome: "Mateus", salario: 3000 },
    { nome: "Julia", salario: 4500 },
    { nome: "Pedro", salario: 2800 },
    { nome: "Ana", salario: 5200 },
    { nome: "Carlos", salario: 3800 }
]

const salarioTotal = funcionarios.reduce((acumulador,valor)=>acumulador += valor.salario
,0)
console.log(salarioTotal)

const funcionaioS = funcionarios.reduce((acumulador,valor)=>{
    if (acumulador.salario>valor.salario){
        return acumulador
    } else { 
        return valor}
})
console.log(funcionaioS)