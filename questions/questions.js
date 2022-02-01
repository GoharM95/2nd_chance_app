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

function renderStartingQuestions(startingQuestions) {

  const questionList = document.createElement("ul");

  for (let i = 0; i < startingQuestions.length; i++) {
    const question = startingQuestions[i].question;
  startingQuestions.forEach((question) => {
    const startingQuestionsBox = document.getElementById(
      "starting-questions-box"
    );
    startingQuestionsBox.append(questionList);
    const eachQuestionElem = document.createElement("p");
    eachQuestionElem.innerHTML = question;
    const inputElem = document.createElement("textarea");
    inputElem.name = `question${i}`;

    const updateInputAnswer = makeInputHandler(inputElem.name, i);

    inputElem.addEventListener("input", updateInputAnswer);
    // add autofocus
    eachQuestionElem.append(inputElem);
    questionList.append(eachQuestionElem);
  }
}

function makeInputHandler(inputName, index) {
  function updateInputAnswer(event) {
    if (inputName === event.target.name) {
      startingQuestions[index].answer = event.target.value;
    }
    // console.log("startingQuestions", startingQuestions);
    return startingQuestions;
  }
  return updateInputAnswer;
}

const answerBoxElem = document.getElementById("questions_answers");

// RESULTS
function showAnswersOnAnotherPage() {
  for (question of startingQuestions) {
    const questionLine = document.createElement("p");
    questionLine.append(question.question);
    const answerLine = document.createElement("p");
    answerLine.append(question.answer);
    questionLine.append(answerLine);
    answerBoxElem.append(questionLine);
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
    // console.log("chosenSkillLevelAnswers", chosenSkillLevelAnswers);
    return chosenSkillLevelAnswers;
  }
  return handleSubjectButtonClick;
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
  showAnswersOnAnotherPage();
  showAnswersOnAnotherPage2();
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
  if (isEmptyInput && isNotChecked) {
    alert("Please fill and select all the fields in red!");
  } else if (isEmptyInput) {
    alert("Please fill all the fields in red!");
  } else {
    alert("Please select all the fields in red!");
  }
  // red after alert
}

function showAnswersOnAnotherPage2() {
  for (let subject in chosenSkillLevelAnswers) {
    const subjectLine = document.createElement("h3");
    subjectLine.append(subject.toUpperCase());
    const skillLevelLine = document.createElement("p");
    skillLevelLine.append(chosenSkillLevelAnswers[subject].chosenAnswer);
    subjectLine.append(skillLevelLine);
    answerBoxElem.append(subjectLine);
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
