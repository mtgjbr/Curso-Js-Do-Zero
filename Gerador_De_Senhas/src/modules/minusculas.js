class Minusculas{
    constructor(){
       
        
    }
    static alfabeto = "abcdefghijklmnopqrstuvwxyz".split(""); //cria um alfabeto e cria um array separando cada um pelos espaços vazios ent cada letra fica em um array
   static rand(){
     return Math.floor(Math.random() * (25 - 0 + 1)) + 0
   }

   static sorteio(){
    const letra = Minusculas.alfabeto[Minusculas.rand()]
    return letra
   }
}

 

export {Minusculas }