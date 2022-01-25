// // Timer
// const startingMins = 20;
// let time = startingMins * 60;

// const timer = document.querySelector("#timer");

// // setInterval(updateCountdown, 1000);

// function updateCountdown() {
//   const mins = Math.floor(time / 60);
//   // console.log("time", time);
//   let seconds = time % 60;
//   // console.log("seconds", seconds);
//   seconds = seconds < 10 ? "0" + seconds : seconds;
//   timer.innerHTML = `${mins} : ${seconds} `;
//   time--;
// }

const quizQuestions = {
  math: [
    {
      question:
        "If the hour hand of a clock is turned anticlockwise from 2 pm to 9 am, through how many degrees will it have turned?",
      answersArray: [
        { answer: 2, correct: true },
        { answer: 3, correct: false },
        { answer: 4, correct: false },
        { answer: 5, correct: false },
      ],
      level: 0,
      choosedAnswer: "",
    },
    {
      question:
        "Above are 6 rows containing two identical sets of characters, but in one row, one character in the two sets is different. Which row has the difference?",
      answersArray: [
        { answer: 2, correct: false },
        { answer: 3, correct: false },
        { answer: 4, correct: false },
        { answer: 5, correct: true },
      ],
      level: 1,
      choosedAnswer: "",
    },
    {
      question:
        "Alan thinks of a number. He squares it, then takes away 5, next multiplies it by 4, takes away 7, divides it by 3 and finally adds 6. His answer is 9. What number did Alan start with?",
      answersArray: [
        { answer: 3, correct: false },
        { answer: 4, correct: false },
        { answer: 5, correct: false },
        { answer: 6, correct: true },
      ],
      level: 2,
      choosedAnswer: "",
    },
  ],
};

// startQuiz()
// getRandomQuestions(all questions array) => random quiz
// renderCurrentQuestionToForm(func) with currentQuestionIndex(param) => form or qBox to append to form
// after getting user's values update answers state in random quiz
// static next button => loadNextQuestion() => currentQuestionIndex++, call again renderCurrentQuestionToForm()
// renderResults() when quiz will be finished

const randomQuiz = [];

let currentQuestionIndex = 0;

const quizQuestionsQuantity = 2;

function getRandomQuestions(quizQuestionsArr) {
  if (!quizQuestionsArr) {
    return "There is no questions";
  }

  let quantity = 0;
  while (quantity < quizQuestionsQuantity) {
    // for (let i = 0; i < quizQuestionsArr.length; i++) {
    const randomQuestionIndex = Math.floor(
      Math.random() * quizQuestionsArr.length
    );
    randomQuiz.push(quizQuestionsArr[randomQuestionIndex]);
    quizQuestionsArr.splice(randomQuestionIndex, 1);
    // console.log("randomQuiz", randomQuiz);
    quantity++;

    // }
  }
  randomQuiz.sort((a, b) => a.level - b.level);
  // console.log("randomQuiz", randomQuiz);

  return randomQuiz;
}

// console.log("randomQuiz", randomQuiz);

console.log(getRandomQuestions(quizQuestions.math));

const nextBtn = document.querySelector("#next-btn");

let formElem = document.querySelector("form");
formElem.addEventListener("submit", (event) => {
  event.preventDefault();
});

function renderCurrentQuestionToForm(quiz, currentIndex, formElem) {
  console.log("formElem", formElem);
  formElem.innerHTML = "";
  const questionBox = document.createElement("div");
  questionBox.classList.add("question-box");
  questionBox.id = "question-box";
  const questionCountdown = document.createElement("span");
  // console.log("quiz.length", quiz.length);
  questionCountdown.innerHTML = `Question ${currentIndex + 1} of ${
    quiz.length
  }`;
  questionBox.append(questionCountdown);
  const questionElem = document.createElement("p");
  questionElem.classList.add("question");
  questionElem.id = "question";
  // console.log("currentIndex", currentIndex);
  // console.log("randomQuiz", quiz);
  // transfer to other function
  questionElem.innerHTML = quiz[currentIndex]["question"];
  questionBox.append(questionElem);

  // answers/ write new function
  const answersArray = quiz[currentIndex]["answersArray"];
  console.log("answersArray", answersArray);
  const answersList = document.createElement("ul");
  answersList.classList.add("answers");

  for (let arrAnswer in answersArray) {
    const answerValue = answersArray[arrAnswer]["answer"];

    const answerLine = document.createElement("li");
    answerLine.classList.add("answer");
    answerLine.id = "answer";
    const radioButton = document.createElement("input");
    radioButton.setAttribute("type", "radio");
    radioButton.name = "radio";
    radioButton.value = answerValue;

    const label = document.createElement("label");
    label.innerHTML = answerValue;
    answerLine.append(radioButton);
    answerLine.append(label);
    answersList.append(answerLine);
    questionBox.append(answersList);
    // questionBox.append(nextBtn);
  }
  console.log("questionBox", questionBox);
  formElem.append(questionBox);
  formElem.append(nextBtn);

  console.log(formElem);
  return formElem;
}

// console.log(renderCurrentQuestionToForm(randomQuiz, 1));
// const randomQuizA = getRandomQuestions(quizQuestions.math);

// console.log(
//   "renderCurrentQuestionToForm(getRandomQuestions(quizQuestions.math))",
//   renderCurrentQuestionToForm(randomQuiz, currentQuestionIndex)
// );

const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", loadNextQuestion);

function startQuiz() {
  startBtn.classList.add("hide");
  nextBtn.classList.remove("hide");
  // console.log("currentQuestionIndex", currentQuestionIndex);
  // console.log("randomQuiz.length", randomQuiz.length);

  renderCurrentQuestionToForm(randomQuiz, currentQuestionIndex, formElem);
}

console.log(formElem);

function loadNextQuestion() {
  // event.preventDefault();
  // console.log("currentQuestionIndex", currentQuestionIndex);
  // console.log(formElem);

  // while (currentQuestionIndex) {

  // } else {
  // console.log(questionBox);
  currentQuestionIndex++;

  if (currentQuestionIndex < randomQuiz.length) {
    // questionBox.remove();
    // console.log("currentQuestionIndex", currentQuestionIndex);
    renderCurrentQuestionToForm(randomQuiz, currentQuestionIndex, formElem);
  } else {
    // renderResults()
    console.log("result!!!");
  }
  // }
  // }
}
// console.log(loadNextQuestion(questionBox));
