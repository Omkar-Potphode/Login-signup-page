const signinBtn = document.querySelector("#sign-in-btn");
const singupBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signinBtn1 = document.querySelector("#sign-in-btn1");
const signupBtn1 = document.querySelector("#sign-up-btn1");
const form = document.querySelector(".form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2")

singupBtn.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode");
});

signinBtn.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode");
});

signupBtn1.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode1");
});

signinBtn1.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode1");
});

