// LOGIN
const loginBtn = document.getElementById("loginBtn");
const loginSection = document.getElementById("loginSection");
const quizSection = document.getElementById("quizSection");

loginBtn.onclick = () => {
  const name = loginName.value;
  const age = loginAge.value;
  const dob = loginDob.value;

  if (!name || !age || !dob) {
    loginMsg.textContent = "Please fill all fields";
    loginMsg.style.color = "red";
    return;
  }

  loginSection.style.display = "none";
  quizSection.style.display = "block";
  loadQuestion();
};

// QUIZ DATA
const quiz = [
  { q: "What does HTML stand for?", a: ["HyperText Markup Language","HighText Machine Language","Hyper Transfer Markup"], c: 0 },
  { q: "CSS is used for?", a: ["Styling","Logic","Database"], c: 0 },
  { q: "Which language runs in browser?", a: ["Python","JavaScript","C++"], c: 1 },
  { q: "AI stands for?", a: ["Auto Intelligence","Artificial Intelligence","Advanced Internet"], c: 1 },
  { q: "Which is frontend framework?", a: ["React","Node.js","MongoDB"], c: 0 },
  { q: "GitHub is used for?", a: ["Hosting code","Gaming","Email"], c: 0 },
  { q: "Which is backend language?", a: ["HTML","CSS","Node.js"], c: 2 },
  { q: "What does API mean?", a: ["App Program Interface","Application Programming Interface","Advanced Protocol"], c: 1 },
  { q: "SQL is used for?", a: ["Design","Database","Styling"], c: 1 },
  { q: "Which is NOT a programming language?", a: ["Python","HTML","HTTP"], c: 2 }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

function loadQuestion() {
  nextBtn.style.display = "none";
  const current = quiz[index];
  questionEl.textContent = current.q;
  progress.textContent = `Question ${index + 1} of 10`;

  optionBtns.forEach((btn, i) => {
    btn.textContent = current.a[i];
    btn.onclick = () => selectAnswer(i);
  });
}

function selectAnswer(i) {
  if (i === quiz[index].c) score++;
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  index++;
  if (index < quiz.length) {
    loadQuestion();
  } else {
    quizSection.style.display = "none";
    resultSection.style.display = "block";
    scoreText.textContent = `You scored ${score} / 10`;
  }
};
