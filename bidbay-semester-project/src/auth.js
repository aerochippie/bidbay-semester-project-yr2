const baseUrl = "https://api.noroff.dev"
const registerUrl = `${baseUrl}/api/v1/auction/auth/register`
const loginUrl = `${baseUrl}/api/v1/auction/auth/login`


const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')

async function addUser(url, user) {
    const data = {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };
    const response = await fetch(url, data)
    const json = await response.json();
    console.log(response)
    console.log(json)
    if (response.status === 201) {
        window.location = "./login.html"
    }
}

export function registerFormValidation(e) {

    e.preventDefault();

    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();

    const nameError = document.getElementById('name-error')
    const emailError = document.getElementById('email-error')
    const passwordError = document.getElementById('password-error')

    const emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (name === '' || name.length < 3) {
        nameError.innerHTML = "Name must be at least 3 characters."
    }
    else {
        nameError.innerHTML = "";
        if (/\s/.test(name)) {
            nameError.innerHTML = "Name can not contain whitespace"
        }
    }

    if (email === '') {
        emailError.innerHTML = "Email is required."
    }
    else {
        emailError.innerHTML = "";
        if (!emailPattern.test(email)) {
            emailError.innerHTML = "Your email is in the wrong format."
        }
        else {
            emailError.innerHTML = "";
            if (email.endsWith('@noroff.no') || email.endsWith('@stud.noroff.no')) {
                emailError.innerHTML = "";
            } else {
                emailError.innerHTML = "Email must be a Noroff student email."
            }

        }
    }

    if (password === '' || password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters long"
    }
    else {
        passwordError.innerHTML = "";
    }

    const newUser = {
        name: name,
        email: email,
        password: password
    };
    addUser(registerUrl, newUser)
}

async function getUser(url, user) {
    const data = {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };
    const response = await fetch(url, data)
    const json = await response.json();

    if (response.status === 401) {
        emailError.innerHTML = "Your credentials dont match any user in the system"
        passwordError.innerHTML = "Your credentials dont match any user in the system"
    }

    const bearerToken = json.accessToken;
    const userName = json.name;

    if (response.status === 200) {
        window.localStorage.setItem("bearerToken", bearerToken);
        window.localStorage.setItem("username", userName);
        window.location = "./dash.html"
    }
}


export function loginFormValidation(e) {

    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();


    const emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (email === '') {
        emailError.innerHTML = "Email is required."
    }
    else {
        emailError.innerHTML = "";
        if (!emailPattern.test(email)) {
            emailError.innerHTML = "Your email is in the wrong format."
        }
        else {
            emailError.innerHTML = "";
            if (email.endsWith('@noroff.no') || email.endsWith('@stud.noroff.no')) {
                emailError.innerHTML = "";
            } else {
                emailError.innerHTML = "Email must be a Noroff student email."
            }

        }
    }

    if (password === '' || password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters long."
    }
    else {
        passwordError.innerHTML = "";
    }

    const user = {
        email: email,
        password: password
    };
    getUser(loginUrl, user)
}

