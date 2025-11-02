let LoginForm = document.querySelector("#login-form");
LoginForm.addEventListener("submit", checkFields);

function checkForm(event) {
    let usernameInput = document.querySelector("#username");
    let passwordInput = document.querySelector("#password");
    if (usernameInput.value.trim().length == 0 || passwordInput.value.trim().length == 0) {
        event.preventDefault();
    }
}

