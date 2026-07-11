
const rand = (min,max)=> Math.floor(Math.random()*(max-min)+min);
const geraMaiuscula =()=>String.fromCharCode(rand(65,91)); // a charcode é uma tabela de caracteres em reusmo, nessa função ele ta pegando uma dentre as letras maiusculas na tabela asci
const geraMinuscula =()=>String.fromCharCode(rand(97,123));
const geraNumero =()=>String.fromCharCode(rand(48,58));
const simbolos = '.,;!@#$%¨&*()_+{}^?|'
const geraSimbolo = ()=> simbolos[rand(0,simbolos.length)]


export default function geraSenha(qtd,maiusculas,minusculas,numeros,simbolos){ // se é recebido como true executa
    const senhaArray =[];
    qtd = Number(qtd)
    for(let i =0;i< qtd;i++){
     maiusculas && senhaArray.push(geraMaiuscula()); // se for verdadeiro executa a function
     minusculas && senhaArray.push(geraMinuscula());
     numeros && senhaArray.push(geraNumero());
     simbolos && senhaArray.push(geraSimbolo());
    
    
    }
return (senhaArray.join('').slice(0,qtd));
}
geraSenha(10,true,true,true,true)