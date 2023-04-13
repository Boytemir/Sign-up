const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

// Error

const err = document.querySelectorAll(".err");
const signErr = document.querySelectorAll(".signErr");
let signUpPass = document.getElementById("signUpPass");
let signInPass = document.getElementById("signInPass");

signErr.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
       
        err[index].classList.add("errors");
        setInterval(() => {
            err[index].classList.remove("errors")
        }, 5000)
        try {
            if(signUpPass.value.length < 8)  throw new Error("Do not make the password less than 8 characters");
            if(signInPass.value.length < 8 ) throw new Error("Do not make the password less than 8 characters");
        } catch (error) {
            err[index].innerText = error.message;
        }
    })
})