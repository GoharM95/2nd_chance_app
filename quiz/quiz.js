// Timer
// const startingMins = 20;
// let time = startingMins * 60;
// const timer = document.querySelector("#timer");
// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//   const mins = Math.floor(time / 60);
//   // console.log("time", time);
//   let seconds = time % 60;
//   // console.log("seconds", seconds);
//   seconds = seconds < 10 ? "0" + seconds : seconds;
//   timer.innerHTML = `${mins} : ${seconds} `;
//   time--;
// }

const form = document.querySelector("form");
window.onload = () => {
  form.classList.add("hide");
};

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
      chosenAnswer: null,
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
      chosenAnswer: null,
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
      chosenAnswer: null,
    },
  ],
};

const randomQuiz = [];

let currentQuestionIndex = 0;
const quizQuestionsQuantity = 2;
// gave currentQuestionIndex as a param to buildRandomQuestions
//  and replaced quantity with currentQuestionIndex
function buildRandomQuestions(quizQuestionsArr, currentQuestionIndex) {
  // created copy
  const quizQuestionsArrClone = [...quizQuestions.math];

  if (!quizQuestionsArrClone) {
    return "There is no questions";
  }

  for (let i = 0; i < quizQuestionsQuantity; i++) {
    const randomQuestionIndex = Math.floor(
      Math.random() * quizQuestionsArrClone.length
    );
    randomQuiz.push(quizQuestionsArrClone[randomQuestionIndex]);
    quizQuestionsArrClone.splice(randomQuestionIndex, 1);
  }
  randomQuiz.sort((a, b) => a.level - b.level);
  return randomQuiz;
}

let formElem = document.querySelector("form");
formElem.addEventListener("submit", (event) => {
  event.preventDefault();
});

function renderAnswerOptions(quiz, currentIndex, isResult) {
  const answersArray = quiz[currentIndex].answersArray;
  const answersList = document.createElement("ul");
  answersList.classList.add("answers");
  for (let answerObject of answersArray) {
    const answerValue = answerObject.answer;
    const answerLine = document.createElement("li");
    answerLine.classList.add("answer");
    answerLine.id = "answer";
    const radioButton = document.createElement("input");
    radioButton.classList.add("radio-btn");
    radioButton.setAttribute("type", "radio");
    radioButton.name = "answer";
    radioButton.id = "answer";
    radioButton.value = answerValue;

    const label = document.createElement("label");
    label.append(radioButton);
    answerLine.append(label);
    answerLine.append(answerValue);

    if (isResult) {
      const currentQuestion = quiz[currentIndex];
      if (answerValue === currentQuestion.chosenAnswer) {
        radioButton.checked = true;
      }

      radioButton.disabled = true;

      if (
        answerValue === currentQuestion.chosenAnswer ||
        answerObject.correct
      ) {
        if (answerObject.correct) {
          answerLine.append("O");
        } else {
          answerLine.append("X");
        }
      }

      //  WITHOUT NEXT BUTTON
      // nextBtn.classList.add("hide");
    }

    answersList.append(answerLine);
  }
  return answersList;
}

function renderCurrentQuestionToForm(
  quiz,
  currentIndex,
  formElem,
  isResult = false
) {
  // console.log("currentIndex", currentIndex);
  formElem.innerHTML = "";
  const questionBox = document.createElement("div");
  questionBox.classList.add("question-box");
  questionBox.id = "question-box";
  const questionCountdown = document.createElement("span");
  questionCountdown.innerHTML = `Question ${currentIndex + 1} of ${
    quiz.length
  }`;
  questionBox.append(questionCountdown);
  const questionElem = document.createElement("p");
  questionElem.classList.add("question");
  questionElem.id = "question";
  questionElem.innerHTML = quiz[currentIndex].question;
  questionBox.append(questionElem);
  const answersList = renderAnswerOptions(quiz, currentIndex, isResult);
  questionBox.append(answersList);
  formElem.append(questionBox);
  formElem.append(nextBtn);
  // nextBtn.disabled = true;
  return formElem;
}

//  WITHOUT NEXT BUTTON
// const quizContainer = document.getElementById("quiz-result");
// function renderCurrentQuestionToForm(quiz, currentIndex, quizContainer, isResult) {
//   if (!isResult || currentIndex === 0) {
//     quizContainer.innerHTML = "";
//   }

//   const questionBox = document.createElement("form");

//   questionBox.classList.add("question-box");
//   questionBox.id = "question-box";
//   const questionCountdown = document.createElement("span");
//   questionCountdown.innerHTML = `Question ${currentIndex + 1} of ${
//     quiz.length
//   }`;
//   questionBox.append(questionCountdown);
//   const questionElem = document.createElement("p");
//   questionElem.classList.add("question");
//   questionElem.id = "question";
//   questionElem.innerHTML = quiz[currentIndex].question;
//   questionBox.append(questionElem);

//   const answersList = renderAnswerOptions(quiz, currentIndex, isResult);
//   questionBox.append(answersList);

//   quizContainer.append(questionBox);
//   quizContainer.append(nextBtn);
//   return quizContainer;
// }

const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");
const resultBtn = document.querySelector("#result-btn");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", loadNextQuestion);

// if (document.querySelector('input[type="radio"]:checked')) {
//   nextBtn.disabled = false;
// nextBtn.addEventListener("click", loadNextQuestion);
// }

const timer = document.querySelector("#timer");

function startQuiz() {
  resetTimer();
  startTimer();
  form.classList.remove("hide");

  startBtn.classList.add("hide");
  nextBtn.classList.remove("hide");
  renderCurrentQuestionToForm(
    buildRandomQuestions(quizQuestions.math, currentQuestionIndex),
    currentQuestionIndex,
    // quizContainer
    formElem
  );
}

function buildTimer() {
  let timerId = null;
  const allowedTime = 30;
  let seconds = allowedTime;

  function updateCountdown() {
    seconds--;
    console.log("seconds", seconds);
  }

  function renderTime() {
    const secondsText = seconds < 10 ? "0" + seconds : seconds;
    timer.innerHTML = `00 : ${secondsText}`;
  }

  function startTimer() {
    timerId = setInterval(() => {
      if (seconds === 0) {
        pauseTimer();
        console.log("stop");
        // clearInterval(timerId);
        return;
      }
      updateCountdown();
      renderTime();
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerId);
  }

  function resetTimer() {
    seconds = allowedTime;
    clearInterval(timerId);
    renderTime();
  }
  return { startTimer, resetTimer };
}

const { startTimer, resetTimer } = buildTimer();

function loadNextQuestion() {
  resetTimer();
  startTimer();

  if (currentQuestionIndex < randomQuiz.length) {
    updateChosenAnswers(currentQuestionIndex);
    nextBtn.disabled = false;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < randomQuiz.length) {
    renderCurrentQuestionToForm(randomQuiz, currentQuestionIndex, formElem);
  } else if (currentQuestionIndex < randomQuiz.length * 2) {
    renderCurrentQuestionToForm(
      randomQuiz,
      currentQuestionIndex - randomQuiz.length,
      formElem,
      true
    );
  }
  // else {
  //   formElem.classList.add("hide");
  //   // timer.classList.add("hide-timer");
  //   // timer.classList.add("hide-timer");
  //   const quizElem = document.querySelector("#quiz");
  //   const startOverBtn = document.createElement("button");
  //   startOverBtn.innerHTML = "Start Over";
  //   quizElem.append(startOverBtn);
  //   startOverBtn.classList.add("startOver-Btn");
  //   startOverBtn.addEventListener("click", startQuiz);
  // }
}

//  WITHOUT NEXT BUTTON
// function loadNextQuestion() {
//   if (currentQuestionIndex < randomQuiz.length) {
//     updateChosenAnswers(currentQuestionIndex);
//   }

//   currentQuestionIndex++;

//   if (currentQuestionIndex < randomQuiz.length) {
//     renderCurrentQuestionToForm(randomQuiz, currentQuestionIndex, quizContainer);
//   } else if (currentQuestionIndex < randomQuiz.length * 2) {
//     while (currentQuestionIndex < randomQuiz.length * 2) {
//       renderCurrentQuestionToForm(
//         randomQuiz,
//         currentQuestionIndex - randomQuiz.length,
//         quizContainer,
//         true
//       );
//       currentQuestionIndex++;
//     }
//   }
// }

function updateChosenAnswers(questionIndex) {
  console.log("questionIndex", questionIndex);

  const selected = document.querySelector("input[type='radio']:checked").value;
  console.log("selected", selected);
  randomQuiz[questionIndex].chosenAnswer = Number(selected);
  nextBtn.disabled = false;
}

// formElem prevent
//   let formElem = document.querySelector("form");
// formElem.addEventListener("submit", (event) => {
//   event.preventDefault();
// });
// next disable
// timer
