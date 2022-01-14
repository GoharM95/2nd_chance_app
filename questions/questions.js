const startingQuestions = [
  "Why do you want to be an engineer?",
  "Why haven’t you tried on your own. If you have, what happened?",
  "What makes you think you can be an engineer?",
  "What do you think a software engineer does?",
  "How much work do you think it will take to transition into an engineering career?",
  "Can you give us example(s) of you persevering despite challenges?",
];

function getStartingQuestions() {
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

console.log(getStartingQuestions(startingQuestions));

// const skillLevel = ["Elementary", "Intermediate", "Advanced", "Proficient"];

// const radioButton = document.createElement("input");
// radioButton.setAttribute("type", "radio");
// radioButton.value = optionValue;

// const label = document.createElement("label");
// label.innerHTML = optionValue;

// radio buttons
//Math
//English
//JS
