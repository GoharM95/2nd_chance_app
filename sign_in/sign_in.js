window.onload = () => {
  addEventListenersToCurrentInput();
};

const formElem = document.querySelector("form");

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
});

const signedUpUserState = {
  email: null,
  password: null,
};

const inputs = document.querySelectorAll("input");
const signInBtn = document.getElementById("sign-in-btn");
const dialog = document.getElementById("dialog");
const dialogWarning = document.getElementById("dialogWarningContent");
const okBtn = document.getElementById("ok-btn");

function closeDialog() {
  dialog.classList.remove("active");
  overlay.classList.remove("active");
}

okBtn.addEventListener("click", closeDialog);

signInBtn.addEventListener("click", () => {
  if (
    signedUpUserState.email === signedUpUserState.currentEmail &&
    signedUpUserState.password === signedUpUserState.currentPassword &&
    signedUpUserState.signed
  ) {
    window.location.href =
      "file:///Users/gohar/Desktop/2nd_chance_app/homepage/index.html";
  } else {
    dialogWarning.innerHTML = "Pls sign up!";
    dialog.classList.add("active");
    overlay.classList.add("active");
  }
});

function makeInputChangeHandler(signedUpUserState) {
  function inputChangeHandler(event) {
    const filledUpName = event.target.value;
    for (let category in signedUpUserState) {
      if (category === event.target.name) {
        signedUpUserState[category] = filledUpName;
      }
    }
  }

  return inputChangeHandler;
}

const inputChangeHandler = makeInputChangeHandler(signedUpUserState);

function addEventListenersToCurrentInput() {
  inputs.forEach((input) => {
    input.addEventListener("change", inputChangeHandler);
  });
}
