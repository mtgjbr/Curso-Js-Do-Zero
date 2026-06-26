const pessoas =[
 {id:3,nome:"Luiz"},
 {id:2,nome:"maria"},
 {id:1,nome:"helena"}
];



/*const novasPessoas = {};

for(const pessoa of pessoas){
    const { id } = pessoa
    novasPessoas[id] = {...pessoa};
}
console.log(novasPessoas)
*/
const novasPessoas = new Map();
for(const pessoa of pessoas){
    const { id } = pessoa
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas.get(2))

// set settar valores
// criar mapa = new map
// pegar valor get


