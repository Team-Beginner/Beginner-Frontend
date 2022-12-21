const submitBtn = document.getElementById("submit");
const emailInput = document.querySelector("#email");
const pwInput = document.querySelector("#password");

const emailError = document.querySelector(".input-error[name='email-error']");
const pwError = document.querySelector(".input-error[name='pw-error']");

const loginForm = document.getElementById("login-form");

function submit(event) {
  event.preventDefault();

  if (emailInput.value == "") {
    emailError.setAttribute("id", "visible");
    emailInput.style.borderColor = "#FF3737";
    setTimeout(() => {
      emailError.setAttribute("id", "hidden");
      emailInput.style.borderColor = "#000000";
    }, 3000);
  }
  if (pwInput.value == "") {
    pwError.setAttribute("id", "visible");
    pwInput.style.borderColor = "#FF3737";
    setTimeout(() => {
      pwError.setAttribute("id", "hidden");
      pwInput.style.borderColor = "#000000";
    }, 3000);
  }
}

loginForm.addEventListener("submit", submit);
