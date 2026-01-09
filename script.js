const loginBtn = document.getElementById('loginBtn');
const loginMsg = document.getElementById('loginMsg');

loginBtn.addEventListener('click', () => {
    const name = document.getElementById('loginName').value.trim();
    const age = document.getElementById('loginAge').value.trim();
    const dob = document.getElementById('loginDob').value;

    if (!name || !age || !dob) {
        loginMsg.textContent = "Please fill all fields!";
        loginMsg.style.color = "#e53e3e"; // red for error
        return;
    }

    if (parseInt(age) < 13) {
        loginMsg.textContent = "You must be at least 13 years old!";
        loginMsg.style.color = "#e53e3e";
        return;
    }

    // Success message
    loginMsg.textContent = `Welcome, ${name}!`;
    loginMsg.style.color = "#ffffff";

    // Optional: clear inputs
    document.getElementById('loginName').value = "";
    document.getElementById('loginAge').value = "";
    document.getElementById('loginDob').value = "";
});


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
  magicMsg.textContent = "✨ Letss Gooo...! You clicked the magic button!";
});

// GREETING BUTTON
const greetBtn = document.getElementById('greetBtn');
const userName = document.getElementById('userName');
const greetMsg = document.getElementById('greetMsg');

greetBtn.addEventListener('click', () => {
  const name = userName.value.trim();
  if(name){
    greetMsg.textContent = `Hello, ${name}! Welcome to my Portfolio 😊`;
    greetMsg.style.color = '#4f46e5';
  } else {
    greetMsg.textContent = "Please enter your Beautiful name!";
    greetMsg.style.color = '#e53e3e';
  }
});


