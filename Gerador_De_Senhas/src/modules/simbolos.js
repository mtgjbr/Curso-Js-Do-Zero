class Simbolos{
    constructor(){
       
       //cria um alfabeto e cria um array separando cada um pelos espaços vazios ent cada letra fica em um array
    }
    static alfabeto = "!@#$%^&*()_+-=[]{}|;':,./<>?".split("");
   static rand(){
     return Math.floor(Math.random() * ((Simbolos.alfabeto.length-1) - 0 + 1)) + 0
   }

   static sorteio(){
    const letra = Simbolos.alfabeto[Simbolos.rand()]
    return letra
   }
}

 

export {Simbolos}