// LOGIN FUNCTIONALITY
const loginBtn = document.getElementById('loginBtn');
const loginMsg = document.getElementById('loginMsg');
const loginSection = document.getElementById('loginSection');
const mainContent = document.getElementById('mainContent');

loginBtn.addEventListener('click', () => {
    const name = document.getElementById('loginName').value.trim();
    const age = document.getElementById('loginAge').value.trim();
    const dob = document.getElementById('loginDob').value;

    if (!name || !age || !dob) {
        loginMsg.textContent = "Please fill all fields!";
        loginMsg.style.color = "#e53e3e"; // red error
        return;
    }

    // Optional: Validate age >= 13
    if (parseInt(age) < 13) {
        loginMsg.textContent = "You must be at least 13 years old to enter.";
        loginMsg.style.color = "#e53e3e";
        return;
    }

    // Successful login
    loginMsg.textContent = `Welcome, ${name}!`;
    loginMsg.style.color = "#4f46e5";

    // Hide login section and show main content
    loginSection.style.display = 'none';
    mainContent.style.display = 'block';

    // Animate skill bars
    const skillFills = document.querySelectorAll('.skill-fill');
    skillFills.forEach(fill => {
        const width = fill.getAttribute('data-skill');
        fill.style.width = width;
    });
});

// MAGIC BUTTON
const magicBtn = document.getElementById('magicBtn');
const magicMsg = document.getElementById('magicMsg');

magicBtn.addEventListener('click', () => {
  magicMsg.textContent = "✨ Ta-da! You clicked the magic button!";
});

// GREETING BUTTON
const greetBtn = document.getElementById('greetBtn');
const userName = document.getElementById('userName');
const greetMsg = document.getElementById('greetMsg');

greetBtn.addEventListener('click', () => {
  const name = userName.value.trim();
  if(name){
    greetMsg.textContent = `Hello, ${name}! Welcome to my website 😊`;
    greetMsg.style.color = '#4f46e5';
  } else {
    greetMsg.textContent = "Please enter your name!";
    greetMsg.style.color = '#e53e3e';
  }
});
