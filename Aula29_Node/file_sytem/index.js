const fs = require ('fs').promises;//esse promises serve pra garantir que ele leia e faça o progresso completo // modulo nativo do node que permite interagir com o sistema de arquivos
const path = require ('path');


//fs.readdir(path.resolve(__dirname))  // pega so o arquivo dessa parta
// recebe os files da promisse e le ele
//.then(files=>console.log(files)).catch(e=>console.log(e));

async function readdir(rootdir){
 rootdir = rootdir || path.resolve(__dirname)  // pega ou a pasta atual ou a que for indicada
 const files = await fs.readdir(rootdir); // le os arquivos do diretorio
 Walk(files,rootdir) //mostra todos eles
 
}

async function Walk(files,rootdir){
    for(let file of files){
        const fileFullPath = path.resolve(rootdir,file); // pega de onde o programa está rodadndo e ve o caminho até o file ou seja o file full path
        const stats = await fs.stat(fileFullPath)  // separa varias caracteristica do arquivo ou pasta

        if(stats.isDirectory()){ // se for um diretório abre dnv e le 
         readdir(fileFullPath);
         continue //pula essa iteração e vai direto pra prox sme deixar cair pra baixo
         // vai continuar enquanto tiver iteração do laço pra só dps cair no console.log()
        }
        console.log(file,stats.isDirectory()); //verifica se os aruiqvos sao diretorios
    }
}


readdir('.../../../') // mostra todos as pastas do curso