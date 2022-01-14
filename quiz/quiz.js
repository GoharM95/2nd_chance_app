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

// // Quiz
const quizQuestions = {
  math: [
    {
      id: 1,
      p: "Above are 6 rows containing two identical sets of characters, but in one row, one character in the two sets is different. Which row has the difference?",
      optionsArray: [
        { option: 2, correct: true },
        { option: 3, correct: false },
        { option: 4, correct: false },
        { option: 5, correct: false },
      ],
    },
    {
      id: 2,
      p: "Above are 6 rows containing two identical sets of characters, but in one row, one character in the two sets is different. Which row has the difference?",
      optionsArray: [
        { option: 2, correct: false },
        { option: 3, correct: false },
        { option: 4, correct: false },
        { option: 5, correct: true },
      ],
    },
    {
      id: 3,
      p: "Above are 6 rows containing two identical sets of characters, but in one row, one character in the two sets is different. Which row has the difference?",
      optionsArray: [
        { option: 3, correct: false },
        { option: 4, correct: false },
        { option: 5, correct: false },
        { option: 6, correct: true },
      ],
    },
    {
      id: 4,
      p: "Alan thinks of a number. He squares it, then takes away 5, next multiplies it by 4, takes away 7, divides it by 3 and finally adds 6. His answer is 9. What number did Alan start with?",
      optionsArray: [
        { option: 2, correct: false },
        { option: 3, correct: true },
        { option: 5, correct: false },
        { option: 7, correct: false },
      ],
    },
    {
      id: 5,
      p: "If the hour hand of a clock is turned anticlockwise from 2 pm to 9 am, through how many degrees will it have turned?",
      optionsArray: [
        { option: 120, correct: false },
        { option: 135, correct: false },
        { option: 150, correct: true },
        { option: 165, correct: false },
      ],
    },
    {
      id: 6,
      p: "What percentage of this shape is blue (to nearest percent)?",
      optionsArray: [
        { option: 60, correct: false },
        { option: 63, correct: true },
        { option: 72, correct: false },
        { option: 75, correct: false },
      ],
    },
    {
      id: 7,
      p: "If ADD = 9, BAD = 7, and CAD = 8, what is the value of ADA?",
      optionsArray: [
        { option: 4, correct: false },
        { option: 5, correct: false },
        { option: 6, correct: true },
        { option: 8, correct: false },
      ],
    },
    {
      id: 8,
      p: "If BAD = 10, DAC = 11, and CGI = 22, what is the value of OCCAM?",
      optionsArray: [
        { option: 36, correct: false },
        { option: 39, correct: false },
        { option: 40, correct: true },
        { option: "None of these", correct: false },
      ],
    },
    {
      id: 9,
      p: "You are facing North. Turn 90 degrees left. Turn 180 degrees right. Reverse direction. Turn 45 degrees left. Reverse direction. Turn 270 degrees right. In which direction are you now facing?",
      optionsArray: [
        { option: "N", correct: false },
        { option: "W", correct: false },
        { option: "SW", correct: false },
        { option: "NW", correct: true },
      ],
    },
    {
      id: 10,
      p: "What would the code be for a flight to Paris at 5am for a vegetarian 8 year old girl travelling economy class?",
      optionsArray: [
        { option: "bykR", correct: true },
        { option: "bykr", correct: false },
        { option: "bYkR", correct: false },
        { option: "None of these", correct: false },
      ],
    },
    {
      id: 11,
      p: "Three computers were lined up in a row. The Dell (D) was to the left of the Viglen (V) but not necessarily next to it. The blue computer was to the right of the white computer. The black computer was to the left of the Hewlett Packard (HP) PC. The Hewlett Packard was to the left of the Viglen (V). What was the order of the computers from left to right?",
      optionsArray: [
        { option: "D, HP, V", correct: true },
        { option: "V, D, HP", correct: false },
        { option: "D, V, HP", correct: false },
        { option: "V, HP, D", correct: false },
      ],
    },
    {
      id: 12,
      p: "Tim was given a large bag of sweets and ate one third of the sweets before stopping as he was feeling sick. The next day he ate one third of the remaining sweets and the following day he ate one third of the remainder, before counting the sweets he had left which totalled eight. How many sweets was he given in the beginning?",
      optionsArray: [
        { option: 21, correct: false },
        { option: 27, correct: true },
        { option: 24, correct: false },
        { option: 30, correct: false },
      ],
    },
    {
      id: 13,
      p: "In a counting system used by intelligent apes. A banana = 1, 6 is represented by an orange and 2 bananas. An orange is worth half a mango. What is the value of two mangos, an orange and a banana?",
      optionsArray: [
        { option: 21, correct: true },
        { option: 27, correct: false },
        { option: 30, correct: false },
        { option: 33, correct: false },
      ],
    },
    {
      id: 14,
      p: "In a counting system used by intelligent apes, a banana = 1, 6 is represented by an orange and 2 bananas. An orange is worth half a mango. What is the value in fruit, of two mangos with an orange, divided by an orange with a banana?",
      optionsArray: [
        { option: "An orange", correct: true },
        { option: "A banana", correct: false },
        { option: "A mango", correct: false },
        { option: "Orange & banana", correct: false },
      ],
    },
    {
      id: 15,
      p: "If the code for JAVA is LCXC, what is the code for BASIC?",
      optionsArray: [
        { option: "EDVLF", correct: false },
        { option: "DCUKE", correct: true },
        { option: "CBTJD", correct: false },
        { option: "None of these", correct: false },
      ],
    },
    {
      id: 16,
      p: "If the code for FORTRAN is GMUPWUU, what is the code for PASCAL?",
      optionsArray: [
        { option: "EDVLF", correct: false },
        { option: "DCUKE", correct: false },
        { option: "CBTJD", correct: false },
        { option: "None of these", correct: true },
      ],
    },
    {
      id: 17,
      p: "If the code for PHP is QLY. What is the code for SQL?",
      optionsArray: [
        { option: "TUS", correct: false },
        { option: "TUU", correct: true },
        { option: "VUS", correct: false },
        { option: "None of these", correct: false },
      ],
    },
    {
      id: 18,
      p: "You start in square E6 facing East. Move 3 squares forward. Turn 90 degrees clockwise, move two squares forward, turn 180 degrees anticlockwise. Move 5 squares forward, turn 90 degrees anticlockwise. Move 4 squares forwards, turn 90 degrees clockwise. Move two squares backwards. What is the Y COORDINATE of the square you are now in?",
      optionsArray: [
        { option: 6, correct: false },
        { option: 7, correct: true },
        { option: 8, correct: false },
        { option: 9, correct: false },
      ],
    },
    {
      id: 19,
      p: "You start in square E6 facing South West. Move three squares forward. Rotate 135 degrees clockwise. Move 4 squares forward. Rotate 45 degrees clockwise. Move 2 squares forward. Rotate 90 degrees anticlockwise and move 4 squares backwards. What is the X Coordinate of the square you are now in?",
      optionsArray: [
        { option: "F", correct: false },
        { option: "G", correct: false },
        { option: "H", correct: true },
        { option: "C", correct: false },
      ],
    },
    {
      id: 20,
      p: "What is the angle between the hands of a clock at 10.30?",
      optionsArray: [
        { option: 90, correct: false },
        { option: 150, correct: false },
        { option: 135, correct: true },
        { option: 75, correct: false },
      ],
    },
    {
      id: 21,
      p: "What percentage weight of chocolate out of the original kilogram will be contained in COMPLETELY FILLED boxes (i.e. those containing a full 6 bags)?",
      optionsArray: [
        { option: "60%", correct: false },
        { option: "62%", correct: false },
        { option: "64%", correct: false },
        { option: "58%", correct: true },
      ],
    },
    {
      id: 22,
      p: "In these questions, the coordinates of the square or cell refer to its contents. What is  A4  multiplied by D3 divided by C2?",
      optionsArray: [
        { option: 30, correct: false },
        { option: 33, correct: false },
        { option: 26, correct: true },
        { option: "None of these", correct: false },
      ],
    },
    {
      id: 23,
      p: "Store the answer to B4  plus  A2  in  F1. Store the answer to  A4  minus  D2  in  F3. Multiply  F1  by  F3. What is the final answer?",
      optionsArray: [
        { option: 84, correct: false },
        { option: 96, correct: false },
        { option: 108, correct: false },
        { option: "None of these", correct: true },
      ],
    },
    {
      id: 24,
      p: "STEP 1: Multiply C3 by D4 and store the result in F4. STEP 2: Multiply F4 by 3, store the result in F4 then add 1 to E3. STEP 3: Repeat STEP 2 until the value of E3 equals 3 then stop. What is the value of F4?",
      optionsArray: [
        { option: 84, correct: false },
        { option: 96, correct: false },
        { option: 108, correct: false },
        { option: "None of these", correct: true },
      ],
    },
    {
      id: 25,
      p: "Add A1 + B3 + C4 + D2 and put the result in E2. Add A3 + B1 + C2 + D4 and place the result in E4. If the value of E4 is larger than E2 swop their contents, otherwise leave them as they are. Multiply E2 by D1, then take away A4 and place the result in F2. What is the value of F2?",
      optionsArray: [
        { option: 79, correct: false },
        { option: 83, correct: true },
        { option: 95, correct: false },
        { option: 96, correct: false },
      ],
    },
  ],
};

const randomQuiz = [];

function getRandomQuiz(arr) {
  // expectedQuestionQuantity
  const quizQuestionsQuantity = 15;
  const set = new Set();
  let quantity = 0;

  while (quantity < quizQuestionsQuantity) {
    let randomIndex = Math.floor(Math.random() * arr.length);

    if (!set.has(randomIndex)) {
      // const randomQuestion = arr[randomIndex]["p"];
      set.add(randomIndex);

      quantity++;
    } else {
      randomIndex = Math.floor(Math.random() * arr.length);
    }
  }
  for (let question of set) {
    randomQuiz.push(arr[question]);
  }
  randomQuiz.sort((a, b) => a.id - b.id);
  return randomQuiz;
}

console.log("randomQuiz", randomQuiz);

console.log(getRandomQuiz(quizQuestions.math));

function getQuestionBox(quiz) {
  for (let i = 0; i < quiz.length; i++) {
    // question countdown
    // question
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");
    questionBox.id = "question-box";
    const questionCountdown = document.createElement("span");
    questionCountdown.innerHTML = `Question ${i + 1} of ${quiz.length}`;
    questionBox.append(questionCountdown);
    const form = document.querySelector("form");
    const question = document.createElement("p");
    question.classList.add("question");
    question.id = "question";
    question.innerHTML = quiz[i]["p"];
    questionBox.append(question);

    // console.log("array from box", Array.from(questionBox));

    // options
    const optionsArray = quiz[i]["optionsArray"];
    const optionsList = document.createElement("ul");
    optionsList.classList.add("options");

    for (let arrOption in optionsArray) {
      const optionValue = optionsArray[arrOption]["option"];

      const optionLine = document.createElement("li");
      optionLine.classList.add("option");
      optionLine.id = "option";
      const radioButton = document.createElement("input");
      radioButton.setAttribute("type", "radio");
      radioButton.value = optionValue;

      const label = document.createElement("label");
      label.innerHTML = optionValue;
      optionLine.append(radioButton);
      optionLine.append(label);
      optionsList.append(optionLine);
      questionBox.append(optionsList);

      form.append(questionBox);
      form.append(nextBtn); // append one time
    }
  }
}

// next button

console.log(getQuestionBox(randomQuiz));

// quiz workflow

const startBtn = document.querySelector("#start-btn");
const qForm = document.querySelector("form");
const question = document.querySelector("#question");
// const option = document.querySelector("#option");

let currentQuestionIndex;

// currentQuestion,

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", setNextQuestion);

function startQuiz() {
  // quizElem
  // currentQuestionIndex = 0;
  const formQBoxes = qForm.children;

  const currBoxIndex = 0;
  for (let i = 0; i < formQBoxes.length; i++) {
    const formBoxesArray = Array.from(formQBoxes);
    const currQBox = formBoxesArray[i];
    currQBox.classList.add("hide");
    formQBoxes[currBoxIndex].classList.remove("hide");
    qForm.classList.remove("hide");
    nextBtn.classList.remove("hide");
    setNextQuestion(formQBoxes, currBoxIndex);
  }
}

function restart() {
  // hide form and start btn with setNextQuestion set next question
}

function setNextQuestion(currBox, index) {
  // prevent default
  // restart()
  currBox[index].classList.add("hide");
  // console.log("index1", index);

  index++;
  // console.log("index2", index);

  currBox[index].classList.remove("hide");
}

//previous
// result x/y or local storage
