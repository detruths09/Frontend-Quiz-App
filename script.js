/* ==================================================
   QUIZ DATA
   ================================================== */
const quizData = [
  {
    subject: "HTML",
    icon: "vscode-icons:file-type-html",
    iconClass: "html",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Markup Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Leveling"
        ],
        answer: 1
      },
      {
        question: "Which HTML element is used to define the title of a document?",
        options: ["<meta>", "<head>", "<title>", "<header>"],
        answer: 2
      },
      {
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<nav>"],
        answer: 1
      },
      {
        question: "Which attribute specifies an alternate text for an image?",
        options: ["title", "src", "alt", "longdesc"],
        answer: 2
      },
      {
        question: "Which HTML element defines the main content of a document?",
        options: ["<section>", "<main>", "<content>", "<body>"],
        answer: 1
      },
      {
        question: "Which doctype declaration is correct for HTML5?",
        options: [
          "<!DOCTYPE html5>",
          "<!DOCTYPE HTML PUBLIC>",
          "<!DOCTYPE html>",
          "<!DOC html>"
        ],
        answer: 2
      },
      {
        question: "Which element is used to group form controls with a caption?",
        options: ["<fieldset>", "<group>", "<formgroup>", "<legend>"],
        answer: 0
      },
      {
        question: "Which input type is used for email validation?",
        options: ["type='mail'", "type='text'", "type='email'", "type='validate'"],
        answer: 2
      },
      {
        question: "Which tag is used to embed a video in HTML5?",
        options: ["<media>", "<video>", "<movie>", "<embed>"],
        answer: 1
      },
      {
        question: "Which element represents a self-contained composition, like a blog post?",
        options: ["<article>", "<aside>", "<section>", "<div>"],
        answer: 0
      }
    ]
  },
  {
    subject: "CSS",
    icon: "vscode-icons:file-type-css",
    iconClass: "css",
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ],
        answer: 1
      },
      {
        question: "Which property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        answer: 2
      },
      {
        question: "Which CSS property controls the spacing between lines of text?",
        options: ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
        answer: 0
      },
      {
        question: "Which value of 'position' takes an element out of normal document flow entirely?",
        options: ["relative", "static", "absolute", "sticky"],
        answer: 2
      },
      {
        question: "Which CSS unit is relative to the root element's font size?",
        options: ["em", "vh", "rem", "%"],
        answer: 2
      },
      {
        question: "Which property is used to create space between flex items?",
        options: ["margin", "gap", "spacing", "padding"],
        answer: 1
      },
      {
        question: "Which selector targets an element's first child?",
        options: [":first", ":first-of-type", ":first-child", ":nth(1)"],
        answer: 2
      },
      {
        question: "Which property defines the stacking order of positioned elements?",
        options: ["z-order", "stack-index", "layer", "z-index"],
        answer: 3
      },
      {
        question: "Which display value turns an element into a flex container?",
        options: ["display: flex", "display: grid", "display: block", "display: inline-flex-box"],
        answer: 0
      },
      {
        question: "Which CSS at-rule is used for responsive breakpoints?",
        options: ["@responsive", "@media", "@screen", "@breakpoint"],
        answer: 1
      }
    ]
  },
  {
    subject: "Javascript",
    icon: "vscode-icons:file-type-js-official",
    iconClass: "javascript",
    questions: [
      {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["const", "var", "let", "static"],
        answer: 2
      },
      {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
        answer: 0
      },
      {
        question: "What does the '===' operator check?",
        options: [
          "Value equality only",
          "Value and type equality",
          "Reference equality only",
          "Type equality only"
        ],
        answer: 1
      },
      {
        question: "Which array method creates a new array with results of calling a function on every element?",
        options: ["forEach()", "filter()", "map()", "reduce()"],
        answer: 2
      },
      {
        question: "What is the result of typeof null in JavaScript?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        answer: 2
      },
      {
        question: "Which method adds one or more elements to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
      },
      {
        question: "What does the 'this' keyword refer to inside a regular function called as a method?",
        options: [
          "The global object always",
          "The function itself",
          "The object the method belongs to",
          "Undefined always"
        ],
        answer: 2
      },
      {
        question: "Which built-in object is used to handle asynchronous operations?",
        options: ["Promise", "Callback", "Async", "Deferred"],
        answer: 0
      },
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A function bundled with references to its surrounding state",
          "A way to close a browser tab",
          "A loop that terminates early",
          "A method to end a function"
        ],
        answer: 0
      },
      {
        question: "Which statement is used to handle exceptions in JavaScript?",
        options: ["catch...throw", "try...catch", "error...catch", "handle...error"],
        answer: 1
      }
    ]
  },
  {
    subject: "Accessibility",
    icon: "material-symbols:accessibility-rounded",
    iconClass: "accessibility",
    questions: [
      {
        question: "What does WCAG stand for?",
        options: [
          "Web Content Accessibility Guidelines",
          "Website Compliance and Guidance",
          "Web Coding Accessibility Group",
          "Web Content Alignment Guide"
        ],
        answer: 0
      },
      {
        question: "Which attribute provides an accessible name for elements without visible text?",
        options: ["alt-text", "aria-label", "title-tag", "access-name"],
        answer: 1
      },
      {
        question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        options: ["4.5 : 1", "3 : 1", "2.5 : 1", "5 : 1"],
        answer: 0
      },
      {
        question: "Which HTML element should be used for the main navigation of a site?",
        options: ["<div class='nav'>", "<nav>", "<section>", "<links>"],
        answer: 1
      },
      {
        question: "What is the purpose of a 'skip to content' link?",
        options: [
          "To skip advertisements",
          "To let keyboard users bypass repeated navigation",
          "To reload the page",
          "To skip images from loading"
        ],
        answer: 1
      },
      {
        question: "Which ARIA role announces content that updates dynamically, like a notification?",
        options: ["role='alert'", "role='banner'", "role='region'", "role='status-update'"],
        answer: 0
      },
      {
        question: "Why should form inputs have associated <label> elements?",
        options: [
          "To improve SEO only",
          "To make styling easier",
          "So assistive technology can announce the input's purpose",
          "It is optional and has no accessibility benefit"
        ],
        answer: 2
      },
      {
        question: "Which keyboard key is primarily used to navigate between focusable elements?",
        options: ["Spacebar", "Enter", "Tab", "Shift"],
        answer: 2
      },
      {
        question: "What is the purpose of the alt attribute on an <img> tag?",
        options: [
          "To describe the image for screen readers and when images fail to load",
          "To set the image alignment",
          "To define the image file size",
          "To add a tooltip only"
        ],
        answer: 0
      },
      {
        question: "Which practice helps users with motion sensitivity?",
        options: [
          "Autoplaying videos with sound",
          "Respecting prefers-reduced-motion settings",
          "Adding more animations",
          "Using parallax scrolling everywhere"
        ],
        answer: 1
      }
    ]
  }
];

/* ==================================================
   STATE
   ================================================== */
const state = {
  subjectIndex: null,
  questionIndex: 0,
  selectedAnswer: null,
  hasSubmitted: false,
  score: 0
};

/* ==================================================
   DOM REFERENCES
   ================================================== */
const headerIcon = document.getElementById("headerIcon");
const headerTitle = document.getElementById("headerTitle");
const themeSwitch = document.getElementById("themeSwitch");
const appEl = document.querySelector(".app");

const homeScreen = document.getElementById("homeScreen");
const subjectList = document.getElementById("subjectList");

const quizScreen = document.getElementById("quizScreen");
const questionCount = document.getElementById("questionCount");
const questionTitle = document.getElementById("questionTitle");
const progressBarFill = document.getElementById("progressBarFill");
const progressBar = document.querySelector(".progress-bar");
const answersList = document.getElementById("answersList");
const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");

const resultScreen = document.getElementById("resultScreen");
const resultIcon = document.getElementById("resultIcon");
const resultSubject = document.getElementById("resultSubject");
const scoreValue = document.getElementById("scoreValue");
const scoreMax = document.getElementById("scoreMax");
const playAgainBtn = document.getElementById("playAgainBtn");

const ANSWER_LETTERS = ["A", "B", "C", "D"];

/* ==================================================
   THEME TOGGLE
   ================================================== */
function toggleTheme() {
  const isDark = appEl.getAttribute("data-theme") === "dark";
  const nextTheme = isDark ? "light" : "dark";
  appEl.setAttribute("data-theme", nextTheme);
  themeSwitch.setAttribute("aria-checked", String(!isDark));
}

themeSwitch.addEventListener("click", toggleTheme);

/* ==================================================
   SCREEN NAVIGATION
   ================================================== */
function showScreen(screen) {
  [homeScreen, quizScreen, resultScreen].forEach((s) => {
    s.hidden = s !== screen;
  });
}

/* ==================================================
   RENDER: HOME SCREEN
   ================================================== */
function renderHome() {
  subjectList.innerHTML = "";

  quizData.forEach((subject, index) => {
    const li = document.createElement("li");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "subject-btn";
    btn.setAttribute("aria-label", `Start ${subject.subject} quiz`);
    btn.innerHTML = `
      <span class="subject-icon ${subject.iconClass}">
        <iconify-icon icon="${subject.icon}"></iconify-icon>
      </span>
      <span></span>
    `;
    btn.querySelector("span:last-child").textContent = subject.subject;
    btn.addEventListener("click", () => startQuiz(index));

    li.appendChild(btn);
    subjectList.appendChild(li);
  });

  headerIcon.classList.remove("visible");
  headerIcon.innerHTML = "";
  headerTitle.textContent = "Frontend Quiz";

  showScreen(homeScreen);
}

/* ==================================================
   START QUIZ
   ================================================== */
function startQuiz(subjectIndex) {
  state.subjectIndex = subjectIndex;
  state.questionIndex = 0;
  state.score = 0;
  state.selectedAnswer = null;
  state.hasSubmitted = false;

  const subject = quizData[subjectIndex];

  headerIcon.classList.add("visible");
  headerIcon.innerHTML = `<iconify-icon icon="${subject.icon}"></iconify-icon>`;
  headerTitle.textContent = subject.subject;

  renderQuestion();
  showScreen(quizScreen);
}

/* ==================================================
   RENDER: QUIZ SCREEN
   ================================================== */
function renderQuestion() {
  const subject = quizData[state.subjectIndex];
  const total = subject.questions.length;
  const question = subject.questions[state.questionIndex];

  state.selectedAnswer = null;
  state.hasSubmitted = false;
  errorMessage.hidden = true;

  questionCount.textContent = `Question ${state.questionIndex + 1} of ${total}`;
  questionTitle.textContent = question.question;

  const progressPercent = ((state.questionIndex + 1) / total) * 100;
  progressBarFill.style.width = `${progressPercent}%`;
  progressBar.setAttribute("aria-valuenow", String(state.questionIndex + 1));
  progressBar.setAttribute("aria-valuemax", String(total));

  answersList.innerHTML = "";

  question.options.forEach((optionText, index) => {
    const li = document.createElement("li");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "answer-btn";
    btn.dataset.index = String(index);
    btn.setAttribute("aria-label", `Answer ${ANSWER_LETTERS[index]}: ${optionText}`);

    // Static, safe markup (letter badge + icons) goes in via innerHTML
    btn.innerHTML = `
      <span class="answer-letter">${ANSWER_LETTERS[index]}</span>
      <span class="answer-text"></span>
      <iconify-icon icon="mdi:check-circle" class="result-icon icon-correct" aria-hidden="true"></iconify-icon>
      <iconify-icon icon="mdi:close-circle" class="result-icon icon-incorrect" aria-hidden="true"></iconify-icon>
    `;

    // Option text goes in via textContent so tag-like strings (e.g. "<title>")
    // render as visible text instead of being parsed as HTML
    btn.querySelector(".answer-text").textContent = optionText;

    btn.addEventListener("click", () => selectAnswer(index));

    li.appendChild(btn);
    answersList.appendChild(li);
  });

  submitBtn.disabled = true;
  submitBtn.textContent = "Submit Answer";
}

/* ==================================================
   SELECT ANSWER
   ================================================== */
function selectAnswer(index) {
  if (state.hasSubmitted) return;

  state.selectedAnswer = index;
  errorMessage.hidden = true;

  const buttons = answersList.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => {
    btn.classList.toggle("selected", Number(btn.dataset.index) === index);
  });

  submitBtn.disabled = false;
}

/* ==================================================
   SUBMIT / NEXT LOGIC
   ================================================== */
submitBtn.addEventListener("click", () => {
  if (!state.hasSubmitted) {
    handleSubmit();
  } else {
    handleNext();
  }
});

function handleSubmit() {
  if (state.selectedAnswer === null) {
    errorMessage.hidden = false;
    return;
  }

  const subject = quizData[state.subjectIndex];
  const question = subject.questions[state.questionIndex];
  const correctIndex = question.answer;

  const buttons = answersList.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => {
    const btnIndex = Number(btn.dataset.index);
    btn.disabled = true;

    if (btnIndex === correctIndex) {
      btn.classList.add("correct");
    } else if (btnIndex === state.selectedAnswer) {
      btn.classList.add("incorrect");
    }
  });

  if (state.selectedAnswer === correctIndex) {
    state.score += 1;
  }

  state.hasSubmitted = true;

  const isLastQuestion = state.questionIndex === subject.questions.length - 1;
  submitBtn.textContent = isLastQuestion ? "See Results" : "Next Question";
}

function handleNext() {
  const subject = quizData[state.subjectIndex];
  const isLastQuestion = state.questionIndex === subject.questions.length - 1;

  if (isLastQuestion) {
    renderResults();
  } else {
    state.questionIndex += 1;
    renderQuestion();
  }
}

/* ==================================================
   RENDER: RESULT SCREEN
   ================================================== */
function renderResults() {
  const subject = quizData[state.subjectIndex];

  resultIcon.innerHTML = `<iconify-icon icon="${subject.icon}"></iconify-icon>`;
  resultSubject.textContent = subject.subject;
  scoreValue.textContent = String(state.score);
  scoreMax.textContent = `out of ${subject.questions.length}`;

  showScreen(resultScreen);
}

/* ==================================================
   PLAY AGAIN
   ================================================== */
playAgainBtn.addEventListener("click", () => {
  state.subjectIndex = null;
  state.questionIndex = 0;
  state.selectedAnswer = null;
  state.hasSubmitted = false;
  state.score = 0;

  renderHome();
});

/* ==================================================
   INITIALIZE APP
   ================================================== */
renderHome();
