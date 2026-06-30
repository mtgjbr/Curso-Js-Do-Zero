const voar = {
    voar() { console.log(`${this.nome} está voando`) } 
    // Porque o Object.create precisa de um objeto como prototype. Se fosse uma função solta, não daria pra usar como prototype. 
    // O objeto é o "container" que permite o encadeamento.

}

const nadar = {
    nadar() { console.log(`${this.nome} está nadando`) }
}

const correr = {
    correr() { console.log(`${this.nome} está correr`) } 
} // eu poderia mudar o nme do interior ou faria alguma diferença? e eu poderia colocar diferentes metodos dentro de um mesmo objeto pra ser tipo: corrida,caminhada etc
// sim, perfeitamente válido

const pato = { ...correr, ...nadar, ...voar }; //cria copias somentes dos metodos selecionados
const pessoa = { ...correr, ...nadar }

function CriaPatinho(nome) {
    return Object.create(pato, { // cria um objeto com o protorype pato
        nome:{value:nome} // sem value — não funciona aqui, Object.create espera descriptors
    })
}

function CriaPessoa(nome) {
    return Object.create(pessoa, {
        nome:{value:nome}
    })
}
const patoto = CriaPatinho("patin");
const atleta = CriaPessoa("Mateus");

patoto.correr();
patoto.voar();
atleta.correr();
atleta.nadar();
//atleta.voar();