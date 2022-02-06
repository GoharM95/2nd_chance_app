// from homepage
// sign up btn click sign up html
// sign in btn click sign in html

window.onload = () => {
  registerNewUser();
};

const formElem = document.querySelector("form");
const dialog = document.getElementById("dialog");
const dialogWarning = document.getElementById("dialogWarningContent");
const okBtn = document.getElementById("ok-btn");

function closeDialog() {
  dialog.classList.remove("active");
  overlay.classList.remove("active");
}

okBtn.addEventListener("click", closeDialog);

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
});

const usersState = {
  name: null,
  surname: null,
  email: null,
  password: null,
  confirmPwd: null,
};

const inputs = document.querySelectorAll("input");
const confirmPassword = document.getElementById("confirm-password");
const signUpBtn = document.getElementById("sign-up-btn");

signUpBtn.addEventListener("click", () => {
  if (usersState.password !== usersState.confirmPwd) {
    dialogWarning.innerHTML = "Please recheck your password!";
    dialog.classList.add("active");
    overlay.classList.add("active");
  }
});

function makeInputValueHandler(usersState) {
  function takeAndUpdateInputValue(event) {
    const filledUpName = event.target.value;
    for (let category in usersState) {
      if (category === event.target.name) {
        usersState[category] = filledUpName;
      }
    }
  }

  return takeAndUpdateInputValue;
}

const takeAndUpdateInputValue = makeInputValueHandler(usersState);

function registerNewUser() {
  inputs.forEach((input) => {
    input.addEventListener("change", takeAndUpdateInputValue);
  });
}
