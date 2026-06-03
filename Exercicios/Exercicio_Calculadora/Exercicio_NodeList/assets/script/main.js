const paragrafos = document.querySelector('.paragrafos');
const paragrafinhos = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body); // pega todos os estilos do body
const backgroundColorBody = estilosBody.backgroundColor;
for (let p of paragrafinhos){ // percorra a lista de ps e coloque o backgroundcollor em cada um
     p.style.backgroundColor=backgroundColorBody; 
     p.style.color = "#FFFFFF";
}
console.log(backgroundColorBody)