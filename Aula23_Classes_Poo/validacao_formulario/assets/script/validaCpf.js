class validaCpf{
    constructor(cpfEnviado){ 
   Object.defineProperty(this,"cpfLimpo",{
    writable:false,
    enumerable:false,
    configurable:false,
    value:cpfEnviado.replace(/\D+/g,"") // tira tudo que nao for nuemro 
   })
}
 
éSequencia(){
    return this.cpfLimpo.charAt(0).repeat(11)=== this.cpfLimpo; // pega o primeiro numero é repete 11 vezes pra ver se é sequencia
}

geraNovoCpf(){
    const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
    const digito1 = validaCpf.geraDigito(cpfSemDigitos);
    const digito2 = validaCpf.geraDigito(cpfSemDigitos+digito1)
    this.novoCpf = cpfSemDigitos + digito1 +digito2

}
static geraDigito(cpfSemDigitos){
    let total = 0;
    let reverso = cpfSemDigitos.length+1;
    for(let stringNumerica of cpfSemDigitos){
        total += reverso * Number(stringNumerica);
        reverso--;
    }
    const digito = 11- (total %11);
    return digito <=9? String(digito) : "0"
}


valida(){
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== "string") return false;
   if(this.cpfLimpo.length !== 11) return false;
    if(this.éSequencia()) return false;  // porque chama função com this
   this.geraNovoCpf() ; // verifica se foi gerado o novo cpf, se nao gerou cai no false
  
    return this.novoCpf === this.cpfLimpo}
}
const validac = new validaCpf("070.987.720-03");
console.log(validac.valida())
