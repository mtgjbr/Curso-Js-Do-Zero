const resultado = document.querySelector('.resultado');

 class calculadora {
    constructor(altura,peso){
        this.altura = altura;
        this.peso = peso;
    }
calcularImc(){
   const resultado = this.peso / (this.altura * this.altura)
  return resultado
}

salvarHistorico(){

}
mostrarResultado(resposta){
    resposta = this.calcularGrauImc(resposta);
    resultado.innerHTML = resposta;
}
calcularGrauImc(resultado){
    if(resultado>40){
     return resultado + " :Obesidade grau 3"
    }else if (resultado<39.9 && resultado >= 35.0){
     return resultado + " :Obesidade grau 2"
    }else if (resultado<34.9 && resultado >= 30.0){
     return resultado + " :Obesidade grau 1"
    }else if (resultado<29.9 && resultado >= 25.0){
     return resultado + " :Sobrepeso"   
    }else if (resultado<24.9 && resultado >= 18.5){
     return resultado + " :Peso normal"   
    }else if (resultado<18.5){
     return resultado + " :Abaixo do peso"   
    }}
}

export default calculadora