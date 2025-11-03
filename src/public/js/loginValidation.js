let LoginForm = document.querySelector("#login-form");
LoginForm.addEventListener("submit", checkFields);

function checkFields(event) {
    let usernameInput = document.querySelector("#username");
    let passwordInput = document.querySelector("#password");
    let usernameError = document.querySelector("#username-error");
    let passwordError = document.querySelector("#password-error");
    if (usernameInput.value.trim().length == 0) {
        usernameError.textContent = "Username is required";
        event.preventDefault();
    }
    if(passwordInput.value.trim().length == 0){
        passwordError.textContent = "Password is required";
        event.preventDefault();
    }
}

