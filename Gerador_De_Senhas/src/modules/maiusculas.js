class Maiuscula{
    constructor(){
       
       //cria um alfabeto e cria um array separando cada um pelos espaços vazios ent cada letra fica em um array
    }
    static alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   static rand(){
     return Math.floor(Math.random() * (25 - 0 + 1)) + 0
   }

   static sorteio(){
    const letra = Maiuscula.alfabeto[Maiuscula.rand()]
    return letra
   }
}

 

export {Maiuscula}