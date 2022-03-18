window.onload = () => {
  renderCandidateTraits(candidateTraits);
  renderProgramStageInfo(programStages);
  renderKnownObstacles(knownObstacles);
};

const candidateTraitsBox = document.getElementById("candidate-traits");
candidateTraitsBox.classList.add("candidate-traits");

const candidateTraits = [
  "Ability and willingness to focus on the transition for 6-24 month at least.",
  "Full time starting with the “practice” phase.",
  "Passion for problem solving: preferably in the form of science/engineering.",
  "Analytic thinking.",
  "Appetite to learn new applicable things continuously.",
  "Pragmatism.",
  "Will power and drive to persevere (given support and guidance).",
];

function renderCandidateTraits(candidateTraits) {
  for (let candidateTrait of candidateTraits) {
    const candidateTraitBox = document.createElement("div");
    candidateTraitBox.classList.add("candidate-trait");
    const candidateTraitDescription = document.createElement("p");
    const checkSign = document.createElement("input");
    checkSign.setAttribute("type", "checkbox");
    checkSign.checked = true;
    checkSign.classList.add("checkSign");

    candidateTraitDescription.append(candidateTrait);
    candidateTraitBox.append(checkSign);
    candidateTraitBox.append(candidateTraitDescription);
    candidateTraitsBox.append(candidateTraitBox);
  }
}

const programStages = [
  {
    programStage: "Pre-selection",
    programStageInfo:
      "Candidate completes a self-assessment questionnaire. Initial stage will consist of the candidate taking intro classes of Javascript, math (if needed), and english (if needed). The candidate will have a mentor who works with him/her once a week. The intro js course is online and it’s free. The candidate will take this mostly on his/her own time.",
  },
  {
    programStage: "Bootcamp",
    programStageInfo:
      "If/when the candidate successfully completes the pre-selection course, he/she will enroll into a bootcamp which the program will pay for. At this stage we will also allocate more time with the mentor. The bootcamp will be either another intro or advanced course, which will depend on the level of knowledge with which the candidate graduates from the pre-selection phase.",
  },
  {
    programStage: "Practice",
    programStageInfo:
      "If the candidate has shown real promise and dedication, he/she will enter the practice stage. To become a hirable engineer, usually mid level, a great deal of practice is needed. The mentor will give more tutorials and projects to the candidate to prepare him/her for production.",
  },
  {
    programStage: "Internship",
    programStageInfo:
      "The candidate will join a real project and work in a real production environment.",
  },
  {
    programStage: "Job hunt",
    programStageInfo:
      "The candidate starts interviewing for positions. We will help with writing his/her resume and mock interviews. We can also use our contacts to help land some interviews.",
  },
];

const programStagesBox = document.getElementById("program-stages");
const programStageInfoElem = document.getElementById("program-stage-info");
let index = 1;
function renderProgramStageInfo(programStages) {
  for (let programStage of programStages) {
    const programStageBox = document.createElement("div");
    programStageBox.classList.add("programStageBox");
    programStageBox.id = programStage.programStage;

    const programStageNameElem = document.createElement("p");
    programStageNameElem.append(programStage.programStage);
    const programStageInfo = document.createElement("p");
    programStageInfo.append(programStage.programStageInfo);
    programStageBox.append(programStageNameElem);
    programStagesBox.append(programStageBox);

    // append arrow
    if (index !== programStages.length) {
      const arrow = document.createElement("span");
      arrow.innerHTML = "&rarr;";
      programStagesBox.append(arrow);
      arrow.classList.add("arrow");
    }

    programStageBox.addEventListener("click", (event) => {
      if (event.target.id === programStageBox.id) {
        programStageInfoElem.append(programStageInfo);

        if (programStageInfoElem.classList.contains("hide")) {
          programStageInfoElem.classList.remove("hide");
        } else {
          programStageInfoElem.classList.add("hide");
        }
      }
    });
    index++;
  }
}

const knownObstacles = [
  {
    obstacleName: "Low Self-Esteem",
    obstacleSubCategories: [
      {
        name: "Not capable enough",
        subCategoryExplained:
          "They don’t think they are capable enough to do it.",
        obstacleFix:
          "Fix: we all can be better at something. Let’s find out if you can be a puzzle solver.",
      },
      {
        name: "Believes in conspiracies",
        subCategoryExplained:
          "The game is rigged in favor of the rich, so “no matter what I do, I can’t get out of my situation.",
        obstacleFix:
          "Fix: some people are luckier than others and start at a different position. However, only you are responsible for yourself. Pull yourself forward as far and as hard as you can.",
      },
      {
        name: "Too late",
        subCategoryExplained:
          "Believes it’s too late for them. They can’t learn new things.",
        obstacleFix:
          "Fix: realise that it’s too late only if you think it is. You are old only if you think you are.",
      },
    ],
  },
  {
    obstacleName: "Not willing to do the work",
    obstacleSubCategories: [
      {
        name: "Too lazy",
        obstacleFix: "Fix: work as hell.",
      },
      {
        name: "Too much of a rebel",
        subCategoryExplained:
          "The game is rigged in favor of the rich, so “no matter what I do, I can’t get out of my situation.",
        obstacleFix:
          "Fix: Realise that if success keeps avoiding you, you are doing something wrong. Change your worldview.",
      },
      {
        name: "Lack of responsibility",
        subCategoryExplained:
          "Prefers flexibility in life to stability a little too much.",
        obstacleFix:
          "Fix: Learn to appreciate having routines where you are responsible to others even if that causes some stress.",
      },
      {
        name: "Arrogance",
        subCategoryExplained:
          "Thinks he/she is smarter than others and doesn't have the humility to recognise his/her own shortcomings and improve upon those.",
        obstacleFix:
          "Fix: recognize that you can learn something from everyone and find pleasure in doing high quality work no matter what it is. Doors usually open to people with this attitude.",
      },
    ],
  },
  {
    obstacleName: "Impatience",
    obstacleFix:
      "Fix: sustainable things worth having take time and great deal of effort.",
  },
  {
    obstacleName: "Focus on money",
    obstacleExplained: "Focus on money rather than the study and the work.",
    obstacleFix:
      "Fix: if you just want to make more money, it will be hard to get through all the challenges along the way. If you find a way to enjoy the process, then money will be an inevitable reward at the end.",
  },
  {
    obstacleName: "Amount of work",
    obstacleExplained: "Not understanding how much work it is before starting.",
    obstacleFix:
      "Fix: it will take 6-24 months day and night studying before you become hireable.",
  },
  {
    obstacleName: "Not enough resources",
    obstacleSubCategories: [
      {
        name: "Money/living expenses.",
        obstacleFix: "Fix: have savings. The program can help.",
      },
      {
        name: "Computer/internet",
        subCategoryExplained: "Access to a computer and the internet",
        obstacleFix: "Fix: save and buy. The program can help.",
      },
      {
        name: "Time to study and practice.",
        obstacleFix:
          "Fix: lower your overhead. Reduce everything else you do, e.g. your day job hours.",
      },
      {
        name: "Resources",
        subCategoryExplained: "curriculum, books, tutorials, mentorship.",
        obstacleFix:
          "Fix: the internet provides a wide variety of free or cheap resources. The program can help.",
      },
      {
        name: "Lack of english literacy.",
        obstacleFix: "Fix: learn english.",
      },
      {
        name: "Emotional support",
        subCategoryExplained: "family, friends, teachers, etc.",
        obstacleFix:
          "Fix: surround yourself with supportive people. Stay away from negative ones. This might be difficult, but is worth it.",
      },
    ],
  },
  {
    obstacleName: "Industry prejudices",
    obstacleExplained:
      "Potential industry prejudices against the candidate’s age and gender.",
    obstacleFix:
      "Fix: competent professionals with good work ethics are in high demand. Become so good at what you do, that no one can dismiss you.",
  },

  {
    obstacleName: "Poor planning",
    obstacleExplained: "Planning poorly and not adapting it along the way.",
    obstacleFix: "Fix: keep a feedback loop and keep improving.",
  },
];

const knownObstaclesBox = document.getElementById("known-obstacles");
const withSubcategoriesBox = document.getElementById("subcategories");

let mutualId = 0;
let quantity = 0;
const firstColumn = document.createElement("div");
firstColumn.classList.add("first-column");
const secondColumn = document.createElement("div");
secondColumn.classList.add("second-column");

function renderKnownObstacles(knownObstacles) {
  for (let obstacle of knownObstacles) {
    if (obstacle.hasOwnProperty("obstacleName")) {
      const obstacleNameBoxElem = document.createElement("div");
      obstacleNameBoxElem.classList.add("obstacle");

      const obstacleNameElem = document.createElement("h3");
      obstacleNameElem.append(obstacle.obstacleName);
      obstacleNameBoxElem.append(obstacleNameElem);
      obstacleNameBoxElem.id = `obstacle${mutualId}`;
      if (quantity < 4) {
        firstColumn.append(obstacleNameBoxElem);
      } else {
        secondColumn.append(obstacleNameBoxElem);
      }
      knownObstaclesBox.append(firstColumn);
      knownObstaclesBox.append(secondColumn);
      quantity++;
    }

    const withSubcategoriesBox = document.createElement("ul");
    withSubcategoriesBox.classList.add("hide");
    if (obstacle.hasOwnProperty("obstacleSubCategories")) {
      const subcategoriesArray = obstacle.obstacleSubCategories;
      for (let i = 0; i < subcategoriesArray.length; i++) {
        const listItem = document.createElement("li");
        withSubcategoriesBox.id = `ul${mutualId}`;
        if (subcategoriesArray[i].hasOwnProperty("name")) {
          const subcategoryName = document.createElement("h4");
          subcategoryName.append(subcategoriesArray[i].name);
          listItem.append(subcategoryName);
          withSubcategoriesBox.append(listItem);
        }

        if (subcategoriesArray[i].hasOwnProperty("subCategoryExplained")) {
          const subcategoryExplained = document.createElement("p");
          subcategoryExplained.append(
            subcategoriesArray[i].subCategoryExplained
          );
          listItem.append(subcategoryExplained);
          withSubcategoriesBox.append(listItem);
        }

        if (subcategoriesArray[i].hasOwnProperty("obstacleFix")) {
          const obstacleFix = document.createElement("p");
          obstacleFix.append(subcategoriesArray[i].obstacleFix);
          listItem.append(obstacleFix);
          withSubcategoriesBox.append(listItem);

          knownObstaclesBox.append(withSubcategoriesBox);
        }
      }
    }

    const withoutSubcategoriesBox = document.createElement("ul");
    withoutSubcategoriesBox.classList.add("hide");
    if (obstacle.hasOwnProperty("obstacleExplained")) {
      const obstacleExplained = document.createElement("p");
      obstacleExplained.append(obstacle.obstacleExplained);
      const listItem = document.createElement("li");
      listItem.append(obstacleExplained);
      withoutSubcategoriesBox.append(listItem);
      knownObstaclesBox.append(withoutSubcategoriesBox);
    }

    if (obstacle.hasOwnProperty("obstacleFix")) {
      const obstacleFix = document.createElement("p");
      obstacleFix.append(obstacle.obstacleFix);
      const listItem = document.createElement("li");
      withoutSubcategoriesBox.id = `ul${mutualId}`;

      listItem.append(obstacleFix);
      withoutSubcategoriesBox.append(listItem);
      knownObstaclesBox.append(withoutSubcategoriesBox);
    }

    mutualId++;
  }
  const subcategoriesInfo = document.getElementById("subcategories");
  const allKnownObstacles = document.querySelectorAll(".obstacle");
  console.log("allKnownObstacles", allKnownObstacles);
  for (let knownObstacle of allKnownObstacles) {
    knownObstacle.addEventListener("click", () => {
      const currentObstacleId = knownObstacle.id;
      const currentObstacleIdLastDigit =
        currentObstacleId[currentObstacleId.length - 1];
      const currentObstacleInfo = document.getElementById(
        `ul${currentObstacleIdLastDigit}`
      );
      if (currentObstacleInfo.classList.contains("hide")) {
        subcategoriesInfo.innerHTML = "";
        subcategoriesInfo.append(currentObstacleInfo);
        currentObstacleInfo.classList.remove("hide");
      } else {
        subcategoriesInfo.append(currentObstacleInfo);
        currentObstacleInfo.classList.add("hide");
      }
    });
  }
}
