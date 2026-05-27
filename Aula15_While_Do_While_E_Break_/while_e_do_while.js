// while = enquanto
// while é executada quando não sabemos quantas vezes iremos executar
let controle = 0; //variavel criada fora

// while ( condição){tarefa a se realizar}
while(controle<=10){ // enquanto o controle for menor ou igual a 10 ele executa
    console.log(controle);
    controle++ // atualizando para nao criar um laço infinito
}

function random(min,max){
 const r = Math.random() *(max -min) + min;
 return Math.floor(r) //A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
}
const min = 1;
const max = 50;
let rand = random(min,max)
rand = 10

console.log(rand !==10);

while (rand !==10){ // enquanto o numero aleatorio não for 10 continua repetindo o laço
  console.log(rand)
    rand = random(min,max)
} 
console.log(rand !==10); // quando for false para de rodar

// do while = faça enquanto confere
// executa primeiro, confere depois
do {
    rand = random(min,max) // como ele primeira executa pra depois conferir então ele primeiro atualizou o numero pra sair do 10 pra ai conferir se era 10
    console.log("esse numero não é 10 não",rand)
}
while (rand !==10){ // enquanto o numero aleatorio não for 10 continua repetindo o laço
    // sempre executa pelo menos uma vez, ja q ele primeiro executa pra depois ver a condição
} 
// sempre atualizar a variavel de controle