const psw = document.querySelector("#password");
const confirmPsw = document.querySelector("#confirm-password");
const createBtn = document.getElementById("create-btn");
const error = document.querySelector(".error");

confirmPsw.addEventListener("input", () => {
    let container = document.querySelector(".form-left");

    if (psw.value !== confirmPsw.value) {
        error.textContent = "passwords don't match";
    } else {
        error.textContent = "";
    }
});
