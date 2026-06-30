/**
 * Exercício — Estático vs Instância
Crie uma classe Calculadora com:

Método estático somar(a, b) — retorna a soma
Método estático media(...numeros) — retorna a média de qualquer quantidade de números
Método de instância historico() — exibe todas as operações feitas nessa calculadora
Método de instância calcular(a, b) — soma e guarda no histórico
 */

/**função da classe, chama direto sem new, sem this. Instância — função do objeto, precisa de new, usa this. */

class calculadora{
    constructor(){ // aqui so precisa ser instanciado valores que eu nao quero que seja esquecidos
      //  this.a = a;
      // this.b = b;
        this.historicoA = []
    }


static somar(a,b){
    return a+b
}
static media(...numeros){
     const soma = numeros.reduce((ac, valor) => ac + valor, 0) // soma o valor total de todos os numeros
    return soma/ numeros.length //divide pelo seu tamanho
}
calcular(a,b){
    const c = a + b
    const expressao = `${a}+${b}=${c}`
    this.historicoA.push(expressao);
    return c

}
historico(){
    console.log(this.historicoA);
}

}

const c1 = new calculadora();
console.log(calculadora.media(1,3,5,3,5));
console.log(c1.calcular(1,4));
console.log(c1.calcular(3,10));
c1.historico()