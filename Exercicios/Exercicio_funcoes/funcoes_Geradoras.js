/**
 *  Exercício — Gerador de IDs
Crie uma função geradora geradorDeId() que gera IDs sequenciais infinitamente:
 */

function* geradorDeId(){
  let  i = 0;
    while(true){
        yield i 
      i++
    }
}

id = geradorDeId();
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)