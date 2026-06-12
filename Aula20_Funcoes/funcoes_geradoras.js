function* geradora1(){
    
    yield "valor 1"; // como se fosse um return, mas ele guarda onde parou

    yield "valor 2";
     
    yield "valor 3";
}

const g1= geradora1();

console.log(g1.next().value);
console.log(g1.next()); //done, pra ver se acabou os valores
console.log(g1.next());
console.log(g1.next());

const gUm = geradora1(); // nesse momento todos os valores de g1 ja vao ter sido passados
// então se fosse g1 ela ia passar " "

for(let valor of gUm){ // executa varias vezes e pega os valores
    console.log(valor);
}


function* geradora2() {
 let i =0;
while(true){ // enquanto o true for true, execute
    yield i;
    i++
}



}

const g2 = geradora2(); // um gerador de numeros infinito

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3 (){
  yield 0;
  yield 1;
  yield 2;

}

function* geradora4 (){
    yield* geradora3(); // delega o trabalho pra outra função e só executa quando os yields dela acabar
    yield 3;
    yield 4;
}

const g4 = geradora4 ();

for( let valor of g4){
    console.log(valor)
}

function* geradora5 (){
 yield function (){
    console.log("vim do y1");
 }
 // return faz com que o que tiver embaixo nao exista mais
 yield function (){
    console.log("vim do y2");
 }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2()