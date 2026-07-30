import validator from 'validator';
export default class Login{

    constructor(formClass){
     this.form = document.querySelector(formClass);
    }

    init(){
    this.events();

    }
    events(){
        if(!this.form) return
            this.form.addEventListener('submit',e=>{
                e.preventDefault()
                this.validate(e);
            })
        
    
    }
  validate(e){ // porque precisa de validação no back e no front?
    alert('aaa')
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]')
    const passwordInput = el.querySelector('input[name="password"]')
    let error= false;

    if(emailInput.value && !validator.isEmail(emailInput.value)){
        alert('email invalido')
        error = true;
    }
    if(passwordInput.value.length<3 || passwordInput.value.length>50){
        alert('senha precisa ter entre 3 e 50 caracterers')
        error = true
        
    }
    if(!error) el.submit(); // o que é el
    console.log(emailInput.value, passwordInput.value)
  }
}