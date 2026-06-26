function validaCpf (cpfenviado){
 Object.defineProperty(this,"cpfLimpo",{
    enumerable:true,
    get:function(){
        return cpfenviado.replace(/\D+/g,"")
    }
 })
};


validaCpf.prototype.valida = function(){
  if(typeof this.cpfLimpo === "undefined") return false
  if(this.cpfLimpo.length !== 11) return false;
  if(this.isSequencia()) return false
  const cpfparcial = this.cpfLimpo.slice(0,-2);
  const digito1 = this.criaDigito(cpfparcial);
  const digito2 = this.criaDigito(cpfparcial+digito1);
  console.log(digito1)
  console.log(digito2)
  const novocpf = cpfparcial + digito1+ digito2 
  console.log(novocpf)
  return novocpf === this.cpfLimpo; 
}


validaCpf.prototype.criaDigito =function(cpfparcial){
 const cpfArray = Array.from(cpfparcial);
 let regressivo = cpfArray.length +1 // começa no 10;
 const total = cpfArray.reduce((ac,val)=>{
  ac += (regressivo*Number(val));
    regressivo --

  return ac
 },0);

 const digito = 11 -(total %11)
 return String(digito) > 9 ? '0': String(digito); // se o digito for maior que 9 retorna 0 se nao retorna 1
};
validaCpf.prototype.isSequencia = function(){
    const sequencia =this.cpfLimpo[0].repeat(this.cpfLimpo.length) //repete o primeiro caracter pelo numero de vezes de caracteres
    return sequencia === this.cpfLimpo // se for verdadeiro, ele trigga o return do if e retorna falso
}

const cpf= new validaCpf("705.484.450-52");
console.log(cpf.valida());

if(cpf.valida()){
    console.log("cpf válido")
} else{
    console.log("cpf invalido")
}
