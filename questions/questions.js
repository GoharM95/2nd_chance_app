const startingQuestions = [
  "Why do you want to be an engineer?",
  "Why haven’t you tried on your own. If you have, what happened?",
  "What makes you think you can be an engineer?",
  "What do you think a software engineer does?",
  "How much work do you think it will take to transition into an engineering career?",
  "Can you give us example(s) of you persevering despite challenges?",
];

function renderStartingQuestions(startingQuestions) {
  startingQuestions.forEach((question) => {
    const startingQuestionsBox = document.getElementById(
      "starting-questions-box"
    );
    const questionList = document.createElement("ul");
    startingQuestionsBox.append(questionList);
    const eachQuestion = document.createElement("p");
    eachQuestion.innerHTML = question;
    const input = document.createElement("textarea");
    // add autofocus
    questionList.append(eachQuestion);
    questionList.append(input);
  });
}

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

// handleMathButtonClick() also for JS and English
// higher-order function name as a parameter
// makeButtonClickHandler()

function makeButtonClickHandler() {
  function handleMathButtonClick(event, subjects) {
    for (let subject of subjects) {
      subject = subject.toLowerCase();
      if (subject === event.target.name) {
        chosenSkillLevelAnswers[subject]["chosenAnswer"] = event.target.value;
      }
    }
    return chosenSkillLevelAnswers;
  }
  return handleMathButtonClick(event, subjects);
}

// function handleMathButtonClick(event) {
//   chosenSkillLevelAnswers.math.chosenAnswer = event.target.value; // or with Number
// }

// function handleEnglishButtonClick(event) {
//   chosenSkillLevelAnswers.english.chosenAnswer = event.target.value; // or with Number
// }

// function handleJavascriptButtonClick(event) {
//   chosenSkillLevelAnswers.javascript.chosenAnswer = event.target.value; // or with Number
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

      radioBtn.addEventListener("change", makeButtonClickHandler);

      skillLevelElem.append(label);
      skillLevelElem.append(skillLevel);
      skillBox.append(skillLevelElem);
    }
  }

  formElem.append(skillBox);
}
