//Dropdwon
function toggleDropdown() {
    const menu = document.getElementById('dropdowncontent');
    const arrow = document.getElementById('arrow');
    menu.classList.toggle('show');
    arrow.classList.toggle('rotate');
  }

//Slide Bar
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}


// chatbot.js

const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');

// Open chat window
chatIcon.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
    chatIcon.style.display = 'none';
});

// Close chat window
closeBtn.addEventListener('click', () => {
    chatWindow.style.display = 'none';
    chatIcon.style.display = 'block';
});

// Send message
sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.textContent = message;
        userMessage.style.textAlign = 'right';
        userMessage.style.margin = '5px 0';
        userMessage.style.color = '#2980b9';
        chatBody.appendChild(userMessage);
        userInput.value = '';

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.textContent = "Thanks for your message!";
            botMessage.style.textAlign = 'left';
            botMessage.style.margin = '5px 0';
            botMessage.style.color = '#7f8c8d';
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);
    }
}