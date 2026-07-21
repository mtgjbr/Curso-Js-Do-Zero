const fs = require ('fs').promises;

module.exports =(caminho,dados)=>{
    fs.writeFile(caminho,dados , {flag:"w", encoding:'utf-8'})


};


 //manda onde quer fazer o arquivo, o que vai ser escrito
 // flag w limpa o arquivo todo 
 // fralg a cria uma nova frase