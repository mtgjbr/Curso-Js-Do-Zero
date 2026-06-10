/**
 * Crie uma função calculaLiquido(salario) que:

Lança um TypeError se o salário não for número
Lança um RangeError se o salário for menor ou igual a 0
Desconta 20% e retorna o líquido

Depois percorra o array com for...of, desestruture cada objeto e use try/catch pra tratar os erros, exibindo:
 * 
 */
const funcionarios = [
    { nome: "Mateus", salarioBruto: 3000 },
    { nome: "Julia", salarioBruto: 0 },
    { nome: "Roberto", salarioBruto: 5000 },
    { nome: "Ana", salarioBruto: "dois mil" },
    { nome: "Pedro", salarioBruto: 8000 }
]

function calculaLiquido(salario) {
   if (typeof salario !== 'number') {
        throw new TypeError("salário deve ser numero");
    }
    if (salario <= 0) {
        throw new RangeError("salário sei la");
    }
    const desconto = (salario * 20) / 100;
    const salarioComDesconto = salario - desconto;
    
    return salarioComDesconto
}

    for (let listaf of funcionarios) {
    try {
        let salarioT =calculaLiquido(listaf.salarioBruto) 
        let {nome} = listaf
        console.log(nome,salarioT)
    }
    catch (err) {
    console.log(err.message)
     
     
} 
}

