const startingQuestions = [
  { question: "Why do you want to be an engineer?", answer: null },
  {
    question: "What makes you think you can be an engineer?",
    answer: null,
  },
  {
    question: "Why haven’t you tried on your own. If you have, what happened?",
    answer: null,
  },
  {
    question: "What do you think a software engineer does?",
    answer: null,
  },
  {
    question:
      "How much work do you think it will take to transition into an engineering career?",
    answer: null,
  },
  {
    question:
      "Can you give us example(s) of you persevering despite challenges?",
    answer: null,
  },
];

const body = document.querySelector("body");

function renderStartingQuestions(startingQuestions) {
  const questionList = document.createElement("ul");

  for (let i = 0; i < startingQuestions.length; i++) {
    const question = startingQuestions[i].question;
    const startingQuestionsBox = document.getElementById(
      "starting-questions-box"
    );
    startingQuestionsBox.append(questionList);
    const currentQuestionElem = document.createElement("p");
    currentQuestionElem.innerHTML = question;
    const inputElem = document.createElement("textarea");
    inputElem.name = `question${i}`;

    const updateInputAnswer = makeInputHandler(inputElem.name, i);

    inputElem.addEventListener("input", updateInputAnswer);
    // add autofocus
    currentQuestionElem.append(inputElem);
    questionList.append(currentQuestionElem);
  }
}

function makeInputHandler(inputName, index) {
  function updateInputAnswer(event) {
    if (inputName === event.target.name) {
      startingQuestions[index].answer = event.target.value;
    }
    return startingQuestions;
  }
  return updateInputAnswer;
}

const answerBoxElem = document.getElementById("questions_answers");

// RESULTS
function renderStartingQuestionsResults() {
  for (question of startingQuestions) {
    const questionLine = document.createElement("h4");
    questionLine.append(question.question);
    const answerLine = document.createElement("p");
    answerLine.append(question.answer);
    questionLine.append(answerLine);
    answerBoxElem.append(questionLine);
    body.append(answerBoxElem);
  }
}

// skill levels
const subjects = ["Math", "English", "Javascript"];
const skillLevels = [1, 2, 3, 4, 5];

const chosenSkillLevelAnswers = {
  math: {
    chosenAnswer: null,
  },
  english: {
    chosenAnswer: null,
  },
  javascript: {
    chosenAnswer: null,
  },
};

window.onload = () => {
  renderStartingQuestions(startingQuestions);
  renderSkillsLevelQuiz(skillLevels, subjects);
};
const formElem = document.querySelector("form");
const skillBox = document.createElement("ul");
skillBox.classList.add("choices");

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
});

// modified makeButtonClickHandler
function makeButtonClickHandler(subject) {
  function handleSubjectButtonClick(event) {
    if (subject === event.target.name) {
      chosenSkillLevelAnswers[subject].chosenAnswer = event.target.value;
    }
    console.log("chosenSkillLevelAnswers", chosenSkillLevelAnswers);
    return chosenSkillLevelAnswers;
  }
  return handleSubjectButtonClick;
}
// function handleMathButtonClick(event) {
//   chosenSkillLevelAnswers.math.chosenAnswer = event.target.value;
// }

// function handleEnglishButtonClick(event) {
//   chosenSkillLevelAnswers.english.chosenAnswer = event.target.value;
// }

// function handleJavascriptButtonClick(event) {
//   chosenSkillLevelAnswers.javascript.chosenAnswer = event.target.value;
// }

function renderSkillsLevelQuiz(skillLevels, subjects) {
  for (let subject of subjects) {
    const subjectElem = document.createElement("span");
    subjectElem.append(subject);
    skillBox.append(subjectElem);
    for (let skillLevel of skillLevels) {
      const skillLevelElem = document.createElement("li");
      const radioBtn = document.createElement("input");
      radioBtn.setAttribute("type", "radio");
      radioBtn.name = subject.toLowerCase();
      radioBtn.value = Number(skillLevel);
      const label = document.createElement("label");
      label.append(radioBtn);
      // if (radioBtn.name === "math") {
      //   radioBtn.addEventListener("change", handleMathButtonClick);
      // }

      // if (radioBtn.name === "english") {
      //   radioBtn.addEventListener("change", handleEnglishButtonClick);
      // }

      // if (radioBtn.name === "javascript") {
      //   radioBtn.addEventListener("change", handleJavascriptButtonClick);
      // }
      const handleCurrentSubjectClick = makeButtonClickHandler(radioBtn.name);

      radioBtn.addEventListener("change", handleCurrentSubjectClick);

      skillLevelElem.append(label);
      skillLevelElem.append(skillLevel);
      skillBox.append(skillLevelElem);
    }
  }

  formElem.append(skillBox);
}

// RESULTS
const submitBtnForAnswers = document.getElementById("submitBtnForAnswers");
submitBtnForAnswers.addEventListener("click", () => {
  alertEmptyFields();
});

function alertEmptyFields() {
  let isEmptyInput = false;
  const textarea = document.querySelectorAll("textarea");
  [...textarea].forEach((textarea) => {
    if (!textarea.value) {
      textarea.classList.add("required");
      isEmptyInput = true;
    }
  });

  let isNotChecked = false;
  for (let chosenSkillLevel in chosenSkillLevelAnswers) {
    const subjects = document.querySelectorAll("span");
    [...subjects].forEach((subject) => {
      if (
        !chosenSkillLevelAnswers[chosenSkillLevel].chosenAnswer &&
        subject.innerHTML.toLowerCase() === chosenSkillLevel
      ) {
        subject.classList.add("required");
        isNotChecked = true;
      }
    });
  }

  const dialog = document.getElementById("dialog");
  const dialogWarning = document.getElementById("dialogWarningContent");
  const overlay = document.getElementById("overlay");
  const okBtn = document.getElementById("ok-btn");

  function closeDialog() {
    dialog.classList.remove("active");
    overlay.classList.remove("active");
  }

  okBtn.addEventListener("click", closeDialog);

  setTimeout(() => {
    if (isEmptyInput && isNotChecked) {
      dialogWarning.innerHTML = "Please fill and select all the fields in red!";
      dialog.classList.add("active");
      overlay.classList.add("active");
    } else if (isEmptyInput) {
      dialogWarning.innerHTML = "Please fill all the fields in red!";
      dialog.classList.add("active");
      overlay.classList.add("active");
    } else if (isNotChecked) {
      dialogWarning.innerHTML = "Please select all the fields in red!";
      dialog.classList.add("active");
      overlay.classList.add("active");
    } else {
      body.innerHTML = "";
      const results = document.createElement("h1");
      results.classList.add("results");
      results.innerHTML = "Results";
      body.append(results);
      renderStartingQuestionsResults();
      renderSkillsLevelQuizResults();
    }
  });
}
function renderSkillsLevelQuizResults() {
  for (let subject in chosenSkillLevelAnswers) {
    const subjectLine = document.createElement("h4");
    subjectLine.append(subject.toUpperCase());
    const skillLevelLine = document.createElement("p");
    skillLevelLine.append(chosenSkillLevelAnswers[subject].chosenAnswer);
    subjectLine.append(skillLevelLine);
    answerBoxElem.append(subjectLine);
    body.append(answerBoxElem);
  }
}
