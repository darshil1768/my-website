// LOGIN FUNCTIONALITY
const loginBtn = document.getElementById('loginBtn');
const loginMsg = document.getElementById('loginMsg');
const loginSection = document.getElementById('loginSection');
const mainContent = document.getElementById('mainContent');

// Input elements
const loginName = document.getElementById('loginName');
const loginAge = document.getElementById('loginAge');
const loginDob = document.getElementById('loginDob');

// Press Enter to navigate between fields
loginName.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        loginAge.focus();
    }
});

loginAge.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        loginDob.focus();
    }
});

loginDob.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        loginBtn.click(); // Trigger login
    }
});

// Login button click
loginBtn.addEventListener('click', () => {
    const name = loginName.value.trim();
    const age = loginAge.value.trim();
    const dob = loginDob.value;

    if (!name || !age || !dob) {
        loginMsg.textContent = "Please fill all fields!";
        loginMsg.style.color = "#e53e3e";
        return;
    }

    if (parseInt(age) < 13) {
        loginMsg.textContent = "You must be at least 13 years old.";
        loginMsg.style.color = "#e53e3e";
        return;
    }

    // Successful login
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

// Enter key triggers Greet Me button
userName.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        greetBtn.click();
    }
});

greetBtn.addEventListener('click', () => {
    const name = userName.value.trim();
    if(name){
        greetMsg.textContent = `Hello, ${name}! Welcome to my website 😊`;
        greetMsg.style.color = '#4f46e5';
        userName.value = "";
    } else {
        greetMsg.textContent = "Please enter your name!";
        greetMsg.style.color = '#e53e3e';
    }
});
