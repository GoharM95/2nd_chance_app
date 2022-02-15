window.onload = () => {
  addInputHandlers();
};

const body = document.querySelector("body");
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

const userData = {
  name: null,
  surname: null,
  email: null,
  password: null,
};

const inputs = document.querySelectorAll("input");
const confirmPassword = document.getElementById("confirm-password");
const signUpBtn = document.getElementById("sign-up-btn");

signUpBtn.addEventListener("click", () => {
  if (userData.password !== confirmPassword.value) {
    dialogWarning.innerHTML = "Please recheck your password!";
    dialog.classList.add("active");
    overlay.classList.add("active");
  }
  api.signUp(userData);
  body.innerHTML = "";
  const welcomeBox = document.createElement("div");
  welcomeBox.classList.add("welcome-box");
  const welcomeText = document.createElement("h1");
  welcomeText.innerHTML = `Welcome, ${userData.name}!`;
  const signOutBtn = document.createElement("button");
  signOutBtn.innerHTML = "Sign Out";
  signOutBtn.classList.add("sign-out-btn");
  welcomeBox.append(welcomeText);
  welcomeBox.append(signOutBtn);
  body.append(welcomeBox);
  signOutBtn.addEventListener("click", () => {
    api.signOut(userData);
  });
});

function makeInputChangeHandler(category) {
  function inputChangeHandler(event) {
    const filledUpName = event.target.value;
    if (event.target.name !== "confirmPwd") {
      if (category === event.target.name) {
        userData[category] = filledUpName;
      }
    }
  }

  return inputChangeHandler;
}

function addInputHandlers() {
  inputs.forEach((input) => {
    const inputChangeHandler = makeInputChangeHandler(input.name);
    input.addEventListener("change", inputChangeHandler);
  });
}

function backend() {
  const usersDataBase = [];
  return {
    getUser(userData) {
      // can't sign up two times to get two users' info
    },
    signUp(userData) {
      usersDataBase.push(userData);
      userData.isSignedUp = true;

      userData.id = usersDataBase[userData];
      console.log("userData.id", userData.id);
      console.log("userData", userData);
      console.log("usersDataBase", usersDataBase);

      // userData.id = usersDataBase.indexOf(userData);
      delete userData.password;
    },
    signIn(userData) {
      // checking email and password
      userData.isSignedIn = true;
      window.location.href = "../homepage/index.html";
    },
    signOut(userData) {
      userData.isSignedIn = false;
      body.innerHTML = "";
      const signInBtn = document.createElement("button");
      signInBtn.innerHTML = "Sign In";
      signInBtn.classList.add("sign-in-btn");
      body.append(signInBtn);
      signInBtn.addEventListener("click", () => {
        api.signIn(userData);
      });
    },
  };
}

const api = backend();
