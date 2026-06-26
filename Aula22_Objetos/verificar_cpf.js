// 705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9 8 7 6 5 4 3 2
70 0 40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x
11 10 9 8 7 6 5 4 3 2
77 0 45 32 56 24 20 20 0 10 = 284

11 - (284 % 11) = 2 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0.
*/
let cpfBase = "705.484.450-52"

preparaCpf = (cpf) => {
    const salvo = cpf.replace(/\D+/g, '');
    const num = [...salvo]
    return num
}

primeiroDigito = (num) => {
    let primeiraEtapa = num.slice(0, 9); // pega os primeiros nove numeros
    let i = 10
    primeiraEtapa = primeiraEtapa.reduce((ac, valor) => {
        ac += Number(valor) * i;
        i--
        return ac  //precisa do return acumulador pra ele ser puxado com o valor na proxima iteração
    }, 0)
    let resultado = 11 - (primeiraEtapa % 11)
    return resultado > 9 ? 0 : resultado
}


segundoDigito = (num) => {
    let primeiraEtapa = num.slice(0, 10);
    let i = 11
    primeiraEtapa = primeiraEtapa.reduce((ac, valor) => {
        ac +=Number(valor) * i;
        i--
        return ac  //precisa do return acumulador pra ele ser puxado com o valor na proxima iteração
    }, 0)
    let resultado = 11 - (primeiraEtapa % 11)
    return resultado
}

function validaCpf(cpf) {
    cpfUsado = preparaCpf(cpf);
    num1 = primeiroDigito(cpfUsado);
    num2 = segundoDigito(cpfUsado);
    if(String(num1) !== cpfUsado[9] || String(num2) !== cpfUsado[10] ){
        throw new Error ("cpf inválido")
    }
    return "cpf válido"
}
console.log(validaCpf(cpfBase))

