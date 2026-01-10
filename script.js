// SECTIONS
const loginSection = document.getElementById("loginSection");
const quizSection = document.getElementById("quizSection");
const homeSection = document.getElementById("homeSection");
const adminBadge = document.getElementById("adminBadge");

// ADMIN LOGIN (SKIPS QUIZ)
adminLoginBtn.onclick = () => {
  if (adminUser.value === "darshil1768" && adminPass.value === "Angel") {
    loginSection.style.display = "none";
    homeSection.style.display = "flex";
    adminBadge.style.display = "block";
  } else {
    adminMsg.textContent = "Invalid Admin Credentials";
    adminMsg.style.color = "red";
  }
};

// USER LOGIN (GOES TO QUIZ)
userLoginBtn.onclick = () => {
  if (!loginName.value || !loginAge.value || !loginDob.value) {
    loginMsg.textContent = "Fill all fields!";
    loginMsg.style.color = "red";
    return;
  }
  loginSection.style.display = "none";
  quizSection.style.display = "flex";
  loadQuestion();
};

// ENTER KEY NAVIGATION (USER LOGIN)
loginName.addEventListener("keydown", e => e.key === "Enter" && loginAge.focus());
loginAge.addEventListener("keydown", e => e.key === "Enter" && loginDob.focus());
loginDob.addEventListener("keydown", e => e.key === "Enter" && userLoginBtn.click());

// QUIZ DATA
const quiz = [
  ["HTML stands for?", ["HyperText Markup Language","HighText ML","Hyper Tool","None"], 0],
  ["CSS used for?", ["Logic","Styling","DB","API"], 1],
  ["JS runs in?", ["Server","Browser","Compiler","OS"], 1],
  ["AI means?", ["Auto","Artificial Intelligence","Advanced","None"], 1],
  ["Frontend library?", ["React","Node","Mongo","PHP"], 0],
  ["GitHub used for?", ["Mail","Code","Games","Chat"], 1],
  ["Backend?", ["HTML","CSS","Node","Design"], 2],
  ["API full form?", ["App Interface","Application Programming Interface","Advanced","None"], 1],
  ["SQL used for?", ["Styling","Database","Logic","API"], 1],
  ["Not language?", ["Python","HTML","HTTP","Java"], 2]
];

let index = 0;
let score = 0;

function loadQuestion() {
  nextBtn.style.display = "none";
  question.textContent = quiz[index][0];
  progress.textContent = `Question ${index + 1}/10`;

  document.querySelectorAll(".option").forEach((btn, i) => {
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
  magicMsg.textContent = "✨ Magic Activated!";
};

// GREETING
greetBtn.onclick = () => {
  if (greetInput.value)
    greetMsg.textContent = `Hello, ${greetInput.value}! 👋`;
};

// ENTER KEY – GREETING
greetInput.addEventListener("keydown", e => {
  if (e.key === "Enter") greetBtn.click();
});

// LOGOUT
logoutBtn.onclick = () => {
  homeSection.style.display = "none";
  quizSection.style.display = "none";
  loginSection.style.display = "flex";
  adminBadge.style.display = "none";

  // Reset fields
  document.querySelectorAll("input").forEach(i => i.value = "");
};
