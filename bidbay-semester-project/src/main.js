import { registerFormValidation } from "./auth";
import { loginFormValidation } from "./auth";
import { newListingFormValidation } from "./dash";
import { getUser } from "./dash";
import { getQuote } from "./dash";


const registerButton = document.getElementById('register-button');
const loginButton = document.getElementById('login-button');
const addListingButton = document.getElementById("add-listing-button");


if(loginButton){
    loginButton.addEventListener('click', loginFormValidation);
}

if(registerButton){
    registerButton.addEventListener('click', registerFormValidation);
}

if(registerButton){
    addListingButton.addEventListener('click', newListingFormValidation);
}
getUser(userUrl)
getQuote(quoteUrl);
