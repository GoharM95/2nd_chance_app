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

function getRandomQuestions(quizQuestionsArr) {
  if (!quizQuestionsArr) {
    return "There is no questions";
  }

  let quantity = 0;
  while (quantity < quizQuestionsQuantity) {
    const randomQuestionIndex = Math.floor(
      Math.random() * quizQuestionsArr.length
    );
    randomQuiz.push(quizQuestionsArr[randomQuestionIndex]);
    quizQuestionsArr.splice(randomQuestionIndex, 1);
    quantity++;
  }
  randomQuiz.sort((a, b) => a.level - b.level);

  return randomQuiz;
}

let formElem = document.querySelector("form");
formElem.addEventListener("submit", (event) => {
  event.preventDefault();
});

function renderAnswerOptions(quiz, currentIndex, isResult) {
  // console.log("currentIndex", currentIndex);
  // console.log("randomQuiz", randomQuiz);

  const answersArray = quiz[currentIndex]["answersArray"];
  const answersList = document.createElement("ul");
  answersList.classList.add("answers");

  for (let answerObject of answersArray) {
    const answerValue = answerObject.answer;
    const answerLine = document.createElement("li");
    answerLine.classList.add("answer");
    answerLine.id = "answer";
    const radioButton = document.createElement("input");
    radioButton.setAttribute("type", "radio");
    radioButton.name = "answer";
    radioButton.id = "answer";
    radioButton.value = answerValue;

    const label = document.createElement("label");
    label.append(radioButton);
    answerLine.append(label);
    answerLine.append(answerValue);

    const currentQuestion = quiz[currentIndex];
    if (isResult) {
      // can I move this?
      if (answerValue === currentQuestion.chosenAnswer) {
        radioButton.checked = true;
      } else {
        radioButton.disabled = true;
      }

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

let updatedRandomQuiz;

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
  questionElem.innerHTML = quiz[currentIndex]["question"];
  questionBox.append(questionElem);

  const answersList = renderAnswerOptions(quiz, currentIndex, isResult);
  questionBox.append(answersList);

  formElem.append(questionBox);
  formElem.append(nextBtn);
  nextBtn.disabled = true;
  return formElem;
}

//  WITHOUT NEXT BUTTON
// function renderCurrentQuestionToForm(quiz, currentIndex, formElem, isResult) {
//   if (!isResult || (isResult && currentIndex === 0)) {
//     formElem.innerHTML = "";
//   }
//   const questionBox = document.createElement("div");
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
//   questionElem.innerHTML = quiz[currentIndex]["question"];
//   questionBox.append(questionElem);

//   const answersList = renderAnswerOptions(quiz, currentIndex, isResult);
//   questionBox.append(answersList);

//   formElem.append(questionBox);
//   formElem.append(nextBtn);
//   return formElem;
// }

const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");
const resultBtn = document.querySelector("#result-btn");

startBtn.addEventListener("click", startQuiz);
if (document.querySelector('input[type="radio"]:checked')) {
  nextBtn.disabled = false;
  nextBtn.addEventListener("click", loadNextQuestion);
}

function startQuiz() {
  startBtn.classList.add("hide");
  nextBtn.classList.remove("hide");
  renderCurrentQuestionToForm(
    getRandomQuestions(quizQuestions.math),
    currentQuestionIndex,
    formElem
  );
}

function loadNextQuestion() {
  if (currentQuestionIndex < randomQuiz.length) {
    updateChosenAnswers(currentQuestionIndex);
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
  } else {
    console.log("You're done!");
  }
}

//  WITHOUT NEXT BUTTON
// function loadNextQuestion() {
//   if (currentQuestionIndex < randomQuiz.length) {
//     updateChosenAnswers(currentQuestionIndex);
//   }

//   currentQuestionIndex++;

//   if (currentQuestionIndex < randomQuiz.length) {
//     renderCurrentQuestionToForm(randomQuiz, currentQuestionIndex, formElem);
//   } else if (currentQuestionIndex < randomQuiz.length * 2) {
//     while (currentQuestionIndex < randomQuiz.length * 2) {
//       renderCurrentQuestionToForm(
//         randomQuiz,
//         currentQuestionIndex - randomQuiz.length,
//         formElem,
//         true
//       );
//       currentQuestionIndex++;
//     }
//   } else {
//     console.log("You're done!");
//   }
// }

function updateChosenAnswers(questionIndex) {
  console.log("questionIndex", questionIndex);

  const selected = document.querySelector("input[type='radio']:checked").value;
  console.log("selected", selected);
  randomQuiz[questionIndex]["chosenAnswer"] = Number(selected);
}
