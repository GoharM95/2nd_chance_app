window.onload = () => {
  addInputHandlers();
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

const usersState = [];
const userState = {
  name: null,
  surname: null,
  email: null,
  password: null,
};

const inputs = document.querySelectorAll("input");
const confirmPassword = document.getElementById("confirm-password");
const signUpBtn = document.getElementById("sign-up-btn");

signUpBtn.addEventListener("click", () => {
  if (userState.password !== userState.confirmPwd) {
    dialogWarning.innerHTML = "Please recheck your password!";
    dialog.classList.add("active");
    overlay.classList.add("active");
  }
});

function makeInputChangeHandler(userState) {
  function inputChangeHandler(event) {
    const filledUpName = event.target.value;
    for (let category in userState) {
      if (category === event.target.name) {
        userState[category] = filledUpName;
      }
    }
  }
  usersState.push(userState);
  return inputChangeHandler;
}

const inputChangeHandler = makeInputChangeHandler(userState);

function addInputHandlers() {
  inputs.forEach((input) => {
    input.addEventListener("change", inputChangeHandler);
  });
}
