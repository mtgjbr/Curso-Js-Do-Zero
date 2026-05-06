const numero = Number(prompt("digite um numero:")) //sempre retorna string
const numeroTitulo = document.getElementById("numeroescolhido"); // selecionando o elemento numero escolhido por id e salvando na variavel selecionada
const texto = document.getElementById("texto");
numeroTitulo.innerHTML = numero // manipula o texto do elemento especifico e não no body inteiro da pagina
texto.innerHTML = `<P> Raiz quadrada ${numero ** (1 / 2)}    </p> <br />
                      <P> ${numero} é inteiro?${Number.isInteger(numero)}</p> <br />
                      <P> É NaN?:${Number.isNaN(numero)}    </p> <br />
                      <P> Arredondado para cima: ${Math.ceil(numero)}    </p> <br />
                      <P> arredondado para baixo: ${Math.floor(numero)}    </p> <br />
                      <P> com duas casas decimais: ${numero.toFixed(2)}    </p> <br />
                      <P> Arredondado para o mais perto ${Math.round(numero)}   </p> <br />`


// usar um innerhtml=" " antes para resetar um texto




