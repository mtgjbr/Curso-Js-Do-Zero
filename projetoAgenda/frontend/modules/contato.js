import validator from 'validator';

module.exports = class Contato {
    constructor(formclass) {
        this.form = document.querySelector(formclass)//pq precisa de queryselector aq
        this.errors = '';

    }


    init() {
        if(!this.form) return 
        this.form.addEventListener('submit', e => {
            const el = e.target;
            e.preventDefault();
            // alert('aaaaaaa')
            this.validator(el);
            if (this.errors) {
                
                return
            } else {

                el.submit();
            }
        })
    }
    validator(el) {
        const nomeInput = el.querySelector('input[name=nome]');
        const sobrenomeInput = el.querySelector('input[name=sobrenome]')
        const emailInput = el.querySelector('input[name="email"]')
        const telefoneInput = el.querySelector('input[name="telefone"]')

        console.log(nomeInput.value, sobrenomeInput.value, emailInput.value, telefoneInput.value);
        this.errors=false;
        this.limpaDiv()
        
    
        if (telefoneInput.value.length <= 8) {
            this.printError('error-telefone', 'Um número de telefone precisa ter pelo menos 8 digitos');
            this.errors = true

        }

        if (!telefoneInput.value && !emailInput.value) {
            this.printError('error-telefone', 'É necessário um número de telefone ou um e-mail para salvar um contato');
            this.printError('error-email', 'É necessário um número de telefone ou um e-mail para salvar um contato')

            this.errors = true
        }
        if (!nomeInput.value) {
            this.printError('error-nome', 'é necessário um nome');
            this.errors = true
            
        }
            if(emailInput.value && !validator.isEmail(emailInput.value)){
                this.printError('error-email','email invalido')
                this.error = true;
            }
        
        

    }
    printError(local, msg) {
        console.log(local)
        const div = document.querySelector(`.${local}`);
        div.innerHTML = '';
        const p = document.createElement('p');
        p.innerText = msg;
        p.style.fontWeight='bold'
        div.appendChild(p)
        
    }
    limpaDiv(){
        const divsDeErro = document.querySelectorAll('[class^="error-"]'); //pega todas as divs que começam com
        divsDeErro.forEach(div => { //pra cada div
        div.innerHTML = '';
    });
    }
}