try{
    // executada quando não há erros
}catch(e){
    // executado quando há erros
} finally{
    //sempre executado
}


try{
   // console.log(a);
    console.log('abri um arquivo');
    console.log('manipulei o aquivo e gerou erro');
    console.log('fechei o arquivo');
}catch(e){
    console.log('tratando o erro');
} finally{
    console.log('Finally:Eu sempre sou executado '); // dando erro ou não  ele é executado
    
}

function retornaHora (data){
  if(data && !(data instanceof Date)){  // se a data for enviada e não for uma instancia de date então:
    throw new TypeError('Esperando instância de Date'); // checar invertido facilita leitura e identação
  }
if (!data){
    data = new Date(); // cria por escopo da função
}
return data.toLocaleTimeString('pt-BR',{
    hour: '2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12:false

});
}
try{
const hora = new Date('01-01-1970 12:58:12') // não da erro pq é uma instancia de date
console.log(retornaHora(hora));
console.log(retornaHora());
console.log(njdas)
} catch(e){
    // tratar erro
} finally{
    console.log("tenha um bom dia");
}

