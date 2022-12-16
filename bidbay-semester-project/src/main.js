import { registerFormValidation } from "./auth";
import { loginFormValidation } from "./auth";


const registerButton = document.getElementById('register-button');
const loginButton = document.getElementById('login-button');


if(loginButton){
    loginButton.addEventListener('click', loginFormValidation);
}

if(registerButton){
    registerButton.addEventListener('click', registerFormValidation);
}

