// ELEMENTS
const loginSection = document.getElementById("loginSection");
const quizSection = document.getElementById("quizSection");
const homeSection = document.getElementById("homeSection");

const loginBtn = document.getElementById("loginBtn");
const loginMsg = document.getElementById("loginMsg");

const options = document.querySelectorAll(".option");
const questionEl = document.getElementById("question");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

// LOGIN
loginBtn.onclick = () => {
  if (!loginName.value || !loginAge.value || !loginDob.value) {
    loginMsg.textContent = "Fill all fields!";
    loginMsg.style.color = "red";
    return;
  }
  loginSection.style.display = "none";
  quizSection.style.display = "flex";
  loadQuestion();
};

// QUIZ DATA
const quiz = [
  ["HTML stands for?", ["HyperText Markup Language","HighText ML","Hyper Tool"], 0],
  ["CSS used for?", ["Logic","Styling","Database"], 1],
  ["JS runs in?", ["Server","Browser","Compiler"], 1],
  ["AI means?", ["Auto Info","Artificial Intelligence","Advanced IT"], 1],
  ["Frontend library?", ["React","Node","Mongo"], 0],
  ["GitHub used for?", ["Games","Code","Mail"], 1],
  ["Backend?", ["HTML","CSS","Node"], 2],
  ["API full form?", ["App Interface","Application Programming Interface","Advanced"], 1],
  ["SQL for?", ["Design","DB","Style"], 1],
  ["Not language?", ["Python","HTML","HTTP"], 2]
];

let index = 0;
let score = 0;

function loadQuestion() {
  nextBtn.style.display = "none";
  questionEl.textContent = quiz[index][0];
  progress.textContent = `Question ${index+1}/10`;

  options.forEach((btn, i) => {
    btn.textContent = quiz[index][1][i];
    btn.onclick = () => {
      if (i === quiz[index][2]) score++;
      nextBtn.style.display = "block";
    };
  });
}

nextBtn.onclick = () => {
  index++;
  if (index < quiz.length) loadQuestion();
  else {
    quizSection.style.display = "none";
    homeSection.style.display = "flex";
  }
};

// MAGIC BUTTON
magicBtn.onclick = () => {
  magicMsg.textContent = "✨ Magic Happens Here!";
};

// GREETING
greetBtn.onclick = () => {
  if (greetInput.value)
    greetMsg.textContent = `Hello, ${greetInput.value}! 👋`;
};
