class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0 // pode ser manipulado
        // não recebe volume
    }
     // metodo de intancia (metodo referente a um objeto especifico), acesso aos dados da instancia
     // instancia = controle 1 / metodo = aumentaVolume
 aumentarVolume(){
    this.volume += 2;
 }
 DiminuirVolume(){
    this.volume -= 2;
 }
// metodo estático (metodo referente a classe) nao tem acesso a dados da instancia
// classe = controleRemoto 
// função que ta dentro de uma classe
 static soma(x,y){ 
 return x+y
 }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(ControleRemoto.soma(2,4))
console.log(controle1)
