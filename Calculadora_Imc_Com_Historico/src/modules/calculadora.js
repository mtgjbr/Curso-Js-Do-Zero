const resultado = document.querySelector('.resultado');


class calculadora {
    constructor(altura, peso) {
        this.altura = altura;
        this.peso = peso;
        this.listaImcs = [];
    }
    calcularImc() {
        const resultado = this.peso / (this.altura * this.altura)
        return resultado
    }

    salvarHistorico(resposta) {
        this.listaImcs.push(resposta);
        const imcsJSON = JSON.stringify(this.listaImcs);
        localStorage.setItem("Lista dos imcs", imcsJSON);

    }
    criaLi() {
        const li = document.createElement('li');
        return li
    }

    mostrarResultado(resposta, ehNovo) {
        let li = this.criaLi();
        if (ehNovo) {
            this.salvarHistorico(resposta);
        }
        resposta = this.calcularGrauImc(resposta);
        li.innerText = resposta;
        li = this.defineCor(li);
        resultado.appendChild(li);


    }
    calcularGrauImc(resultado) {
        if (resultado > 40) return resultado.toFixed(2) + " :Obesidade grau 3"
        else if (resultado >= 35.0) return resultado.toFixed(2) + " :Obesidade grau 2"
        else if (resultado >= 30.0) return resultado.toFixed(2) + " :Obesidade grau 1"
        else if (resultado >= 25.0) return resultado.toFixed(2) + " :Sobrepeso"
        else if (resultado >= 18.5) return resultado.toFixed(2) + " :Peso normal"
        else if (resultado === NaN) return "não é um numero"
        else return resultado.toFixed(2) + " :Abaixo do peso"

    }
    carregaHistorico() {
        const arquivoJSON = localStorage.getItem('Lista dos imcs');
        const novaLista = JSON.parse(arquivoJSON) || []//outra lista de tarefas, não é a mesma 
        // parse tranformou de volta em array

        for (let novoImcs of novaLista) {
            this.mostrarResultado(novoImcs, false) // percorre todas as tarefas da lista e pra cada uma adiciona ela usando a função mostraresultlado de volta no html()
        }
    }
    defineCor(textoFormatado) {
        if (textoFormatado.innerText.includes("Peso normal")) { //pega o conteudo do texto e ve se inclue esse texto
            textoFormatado.classList.add("normal"); //adiciona a classlist que ta no arquivo css
        } else if (textoFormatado.innerText.includes("Abaixo do peso")) {
            textoFormatado.classList.add("abaixo-peso");
        } else {
            textoFormatado.classList.add("acima-peso");
        }
        return textoFormatado
    }
}

export default calculadora