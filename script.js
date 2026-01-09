// Button Magic Message
const magicBtn = document.getElementById('magicBtn');
const magicMsg = document.getElementById('magicMsg');

magicBtn.addEventListener('click', () => {
    magicMsg.textContent = "✨ Ta-da! You clicked the magic button!";
    magicMsg.style.color = '#ffdd57';
});

// Greeting Message
const greetBtn = document.getElementById('greetBtn');
const userName = document.getElementById('userName');
const greetMsg = document.getElementById('greetMsg');

greetBtn.addEventListener('click', () => {
    const name = userName.value.trim();
    if(name) {
        greetMsg.textContent = `Hello, ${name}! Welcome to my website 😊`;
        greetMsg.style.color = '#4f46e5';
    } else {
        greetMsg.textContent = "Please enter your name!";
        greetMsg.style.color = '#e53e3e';
    }
});
