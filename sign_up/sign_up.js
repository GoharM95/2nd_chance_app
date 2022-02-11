window.onload = () => {
  // addInputHandlers();
  backend();
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

// const usersState = [];
// const userData = {
//   name: null,
//   surname: null,
//   email: null,
//   password: null,
// };

function backend() {
  const usersDataBase = [];
  const userData = {
    name: null,
    surname: null,
    email: null,
    password: null,
    // status
  };
  return {
    signedUp() {
      const inputs = document.querySelectorAll("input");
      // const confirmPassword = document.getElementById("confirm-password");
      const signUpBtn = document.getElementById("sign-up-btn");

      signUpBtn.addEventListener("click", () => {
        if (userData.password !== userData.confirmPwd) {
          dialogWarning.innerHTML = "Please recheck your password!";
          dialog.classList.add("active");
          overlay.classList.add("active");
        }
      });

      function makeInputChangeHandler(category) {
        function inputChangeHandler(event) {
          const filledUpName = event.target.value;
          // for (let category in userData) {
          if (category === event.target.name) {
            userData[category] = filledUpName;
          }
          // }
        }
        usersDataBase.push(userData);
        // console.log("usersDataBase", usersDataBase);
        return inputChangeHandler;
      }

      function addInputHandlers() {
        inputs.forEach((input) => {
          const inputChangeHandler = makeInputChangeHandler(input.name);
          input.addEventListener("change", inputChangeHandler);
        });
      }
      console.log("usersDataBase", usersDataBase);
      addInputHandlers();
    },
    signedIn() {},
    signedOut() {},
  };
}

const { signedUp } = backend();
console.log(signedUp);

// const inputs = document.querySelectorAll("input");
// const confirmPassword = document.getElementById("confirm-password");
// const signUpBtn = document.getElementById("sign-up-btn");

// signUpBtn.addEventListener("click", () => {
//   if (userState.password !== userState.confirmPwd) {
//     dialogWarning.innerHTML = "Please recheck your password!";
//     dialog.classList.add("active");
//     overlay.classList.add("active");
//   }
// });

// function makeInputChangeHandler(category) {
//   function inputChangeHandler(event) {
//     const filledUpName = event.target.value;
//     for (let category in userState) {
//       if (category === event.target.name) {
//         userState[category] = filledUpName;
//       }
//     }
//   }
//   usersState.push(userState);
//   return inputChangeHandler;
// }

// function addInputHandlers() {
//   inputs.forEach((input) => {
//     const inputChangeHandler = makeInputChangeHandler(input.name);
//     input.addEventListener("change", inputChangeHandler);
//   });
// }

// usersDataBase in backend function scope
// get() createUser()
// sign in() sign up() sign out()
// {
//   category: []
// }
