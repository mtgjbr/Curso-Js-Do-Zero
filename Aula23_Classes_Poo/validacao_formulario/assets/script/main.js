class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')

        this.eventos();
    }
    eventos() {
        this.formulario.addEventListener('submit', e => { // usa arrow function para não perder o this, pq se nao o this iria ser alterado para:?
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // travou o envio
        const camposvalidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        console.log(camposvalidos, senhasValidas)
        if(camposvalidos && senhasValidas) {
            alert("formulario enviado");
            this.formulario.submit()
        }
    }

    senhasSaoValidas(){
        let valid = true
        const senha = this.formulario.querySelector('.senha'); //duvidas sobre this onde ele aposnta
        const repetirSenha = this.formulario.querySelector('.repetir_a_senha');

        if(senha.value !== repetirSenha.value){
            valid = false
            this.criaErro(senha, "campo senha e repetir senha precisam ser iguais")// como que o js sabe que a variavel sena vai dar no input senha?
            this.criaErro(repetirSenha, "campo senha e repetir senha precisam ser iguais")

        }
          if(senha.value.length <6 || senha.value.length > 12){
                valid = false;
                this.criaErro(senha, "senha precisa estar entre 6 e 12 caracteres")
            }



        return valid
    }

    camposSaoValidos() {
        let valid = true; // o formulario começa true
        for (let errorText of this.formulario.querySelectorAll(".error-text")) {// cria a variavel errorText e da pra ela o valor de cada errortext, e remove ela
            errorText.remove();
        }
        
        for (let campo of this.formulario.querySelectorAll('.validar')) { //pega todos os inputs pelas classes validar
            const label = campo.previousElementSibling.innerHTML // pega o irmao anterior dele, no caso o label de texto 
            if (!campo.value) { //se o campo estiver vazio então:
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`)
                console.log("embranco",valid)
                valid = false
            }
            if (campo.classList.contains("CPF")) {
                if (!this.validaCPF(campo)) valid = false
                console.log("cpf",valid)
            }
            if (campo.classList.contains("Usuário")) {
                if (!this.validaUsuario(campo)) valid = false
                console.log("usario",valid)
            }
        }
        return valid
    }
    validaUsuario(campo){
        const usuario = campo.value;
        let valid= true //porque ele teve que criar outra variavel vlaid?
        if(usuario.length<3 ||usuario.length >12){
            this.criaErro(campo,"Usuário precisa ter entre 3 e 12 caracteres")
             return valid = false
        }
        if(!usuario.match(/^[a-zA-z0-9]+$/g)){ // verifica se tem algo entre a e z e 0 a 9
            this.criaErro(campo,"nome de usuario precisar precisa conter apenas letras e/ou numeros")
           return valid = false
        }
         return true
    }

    validaCPF(campo) {
        const cpf = new validaCpf(campo.value);
        if (!cpf.valida()) {
            this.criaErro(campo, "Cpf inválido")
            return false
        }
        return true
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }

}

const valida = new ValidaFormulario();