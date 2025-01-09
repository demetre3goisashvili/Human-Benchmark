let p = document.getElementById('box-txt');
const btn = document.getElementById('btn');
let words = "As the sun began to set over the distant mountains, the wind picked up, rustling the golden leaves of the ancient oak trees while birds chirped loudly in the background, signaling the end of another peaceful day in the quiet village random dog out place palace design programming";
let input = document.getElementById('inp');
let display = document.getElementById('display')
let currentWordIndex = 0;  
let score = 0;
let gameStarted = false;
let splited = words.split(' ');
let txt1 = document.getElementById('head-txt')
let txt2 = document.getElementById('header-txt')
let time = document.getElementById('time')
let box = document.querySelector('.box')
let alert = document.getElementById('alert')
let alertScore = document.getElementById('alert-score')
let alertBtn = document.getElementById('alert-btn')


function displayRandomWord() {
    currentWordIndex = Math.floor(Math.random() * splited.length);  
    p.textContent = splited[currentWordIndex]; 
}

function check(){
    let userWord = input.value;
    if(userWord === splited[currentWordIndex]) {  
        score++;  
        display.textContent = score
        input.value = '';  
        displayRandomWord();  
    }
}

input.addEventListener('input', check);

btn.addEventListener('click',()=>{
    let count = 60; 
    let countDown = setInterval(() => {
        if (count < 60) {
            time.textContent = count; 
            time.style.left = '100px'; 
        }

        if (count === 0) { 
            clearInterval(countDown); 
            alert.style.display = 'block'
            alertScore.textContent = score
            alertBtn.addEventListener('click',()=>{
            alert.style.display = 'none'
            })
        } else {
            count--; 
        }
    }, 1000); 

    txt1.style.display = 'none'
    txt2.style.display = 'none'
    time.style.display = 'inline'
    if(!gameStarted){
        score = 0
        gameStarted = true;
        display.textContent = 0
        btn.textContent = 'restart'
        displayRandomWord()
        time.style.position = 'relative'
        time.style.left = '60px'
        time.style.top = '100px'
        box.style.position = 'relative'
        box.style.left = '2px'
        box.style.width = '80%'
        box.style.top = '160px'
        input.style.position = 'relative'
        input.style.left = '20px'
        input.style.top = '190px'
        btn.style.position = 'relative'
        btn.style.left = '-160px'
        btn.style.top = '260px'

    } else{
        score = 0
        display.textContent = 0
        displayRandomWord()
    }

})


document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById('side');
    const menu = document.querySelector(".sidebar"); // Use querySelector for a single element

    icon.addEventListener('click', () => {
        // Check the current display style of the menu
        if (menu.style.display === 'block') {
            menu.style.display = 'none'; // Hide the menu
        } else {
            menu.style.display = 'block'; // Show the menu
        }
    });
});


let signin = document.getElementById('signin');
let signup = document.getElementById('signup');
let nav = document.querySelector('#nav-2');

let user = localStorage.getItem('name');


if (user && user.trim() !== '') {
    signin.style.display = 'none';
    signup.style.display = 'none';
    nav.innerHTML = `<p id="nav-user">${user}</p>`;
} else {
    signin.style.display = '';
    signup.style.display = '';
}