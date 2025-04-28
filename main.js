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

chatIcon.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
    chatIcon.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    chatWindow.style.display = 'none';
    chatIcon.style.display = 'block';
});

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    chatBody.innerHTML = ''; 
    userInput.value = ''; 
    userInput.focus();
});

sendBtn.addEventListener('click', sendMessage);

async function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.textContent = message;
        userMessage.style.textAlign = 'right';
        userMessage.style.margin = '5px 0';
        userMessage.style.color = '#2980b9';
        chatBody.appendChild(userMessage);
        userInput.value = '';

        try {
            const response = await fetch(`http://127.0.0.1:5000/medical-query?query=${encodeURIComponent(message)}`);
            const data = await response.json();

            const botMessage = document.createElement('div');
            if (data.advice) {
                botMessage.textContent = data.advice;
                botMessage.style.textAlign = 'left';
                botMessage.style.margin = '5px 0';
                botMessage.style.color = '#7f8c8d';
            } else {
                botMessage.textContent = data.message || "Sorry, I couldn't understand your query.";
                botMessage.style.textAlign = 'left';
                botMessage.style.margin = '5px 0';
                botMessage.style.color = '#7f8c8d';
            }

            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight; 
        } catch (error) {
            console.error("Error with API request:", error);
            const botMessage = document.createElement('div');
            botMessage.textContent = "Sorry, there was an error processing your request. Please try again later.";
            botMessage.style.textAlign = 'left';
            botMessage.style.margin = '5px 0';
            botMessage.style.color = '#7f8c8d';
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight; 
        }
    }
}
