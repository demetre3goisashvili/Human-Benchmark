let math = document.querySelector(".fa-square-root-alt")
let mathematic = document.getElementById('mathematic')
let eng = document.querySelector('.fa-book-open')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let box5 = document.getElementById('box5')
let box6 = document.getElementById('box6')
let citizen = document.querySelector('.fa-passport')
let hist = document.querySelector('.fa-landmark')
let chemistry = document.querySelector('.fa-flask')
let typing = document.querySelector('.fa-keyboard')
let icon = document.querySelector('.fa-bolt-lightning')
let h1 = document.getElementById('sl-h1')
let p = document.getElementById('sl-p')
let buttn = document.getElementById('sl-but')


mathematic.addEventListener("click", ()=>{
    window.location.href = 'math.html'
})

box2.addEventListener("click", ()=>{
    window.location.href = 'english.html'
})

box3.addEventListener("click", ()=>{
    window.location.href = 'history.html'
})

box4.addEventListener("click", ()=>{
    window.location.href = 'citizenship.html'
})

box5.addEventListener("click", ()=>{
    window.location.href = 'science.html'
})


document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById('side');
    const menu = document.querySelector(".sidebar"); 

    icon.addEventListener('click', () => {
        if (menu.style.display === 'block') {
            menu.style.display = 'none'; 
        } else {
            menu.style.display = 'block';
        }
    });
});

math.style.opacity = '0.4'
math.style.color = 'rgb(43, 135, 209)'

mathematic.addEventListener("mouseover", () =>{
    math.style.color = 'rgb(255, 147, 69)'
    math.style.opacity = '1'
})

mathematic.addEventListener("mouseout", ()=>{
    math.style.color = 'rgb(43, 135, 209)'
    math.style.opacity = '0.4'
})


box2.addEventListener("mouseover", () =>{
    eng.style.color = 'rgb(255, 147, 69)'
    eng.style.opacity = '1'
})

box2.addEventListener("mouseout", ()=>{
    eng.style.color = 'rgb(43, 135, 209)'
    eng.style.opacity = '0.4'
})


box3.addEventListener("mouseover", () =>{
    hist.style.color = 'rgb(255, 147, 69)'
    hist.style.opacity = '1'
})

box3.addEventListener("mouseout", ()=>{
    hist.style.color = 'rgb(43, 135, 209)'
    hist.style.opacity = '0.4'
})

box4.addEventListener("mouseover", () =>{
    citizen.style.color = 'rgb(255, 147, 69)'
    citizen.style.opacity = '1'
})

box4.addEventListener("mouseout", ()=>{
    citizen.style.color = 'rgb(43, 135, 209)'
    citizen.style.opacity = '0.4'
})

box5.addEventListener("mouseover", () =>{
    chemistry.style.color = 'rgb(255, 147, 69)'
    chemistry.style.opacity = '1'
})

box5.addEventListener("mouseout", ()=>{
    chemistry.style.color = 'rgb(43, 135, 209)'
    chemistry.style.opacity = '0.4'
})

box6.addEventListener("mouseover", () =>{
    typing.style.color = 'rgb(255, 147, 69)'
    typing.style.opacity = '1'
})

box6.addEventListener("mouseout", ()=>{
    typing.style.color = 'rgb(43, 135, 209)'
    typing.style.opacity = '0.4'
})

box6.addEventListener('click',()=>{
    window.location.href = 'typing.html'
})


window.onload = function(){
    h1.style.position = 'relative'
    h1.style.left = '0px'
    h1.style.transition = '0.55s'
    p.style.position = 'relative'
    p.style.left = '0px'
    p.style.transition = '0.55s'
    buttn.style.position = 'relative'
    buttn.style.top = '0px'
    buttn.style.transition = '0.55s'
    icon.style.position = 'absolute'
    icon.style.top = '100px'
    icon.style.transition = '0.55s'
}

let signin = document.getElementById('signin');
let signup = document.getElementById('signup');
let nav = document.querySelector('#nav-2');

let user = localStorage.getItem('name');

if (user && user.trim() !== '') {
    signin.style.display = 'none';
    signup.style.display = 'none';
    nav.innerHTML = `
    <p id="nav-user">${user}</p>
    <button id="nav-out" style="display: none;">Sign out</button>
    `;
} else {
    signin.style.display = '';
    signup.style.display = '';
}

let navUser = document.getElementById("nav-user");
let signOutButton = document.getElementById("nav-out");

if (navUser) {
    navUser.addEventListener("click", () => {
        if (signOutButton.style.display === "none") {
            signOutButton.style.display = "block";
            navUser.style.top = '-7px'
        } else {
            signOutButton.style.display = "none";
            navUser.style.top = '1px'
        }
    });
}

if (signOutButton) {
    signOutButton.addEventListener("click", () => {
        localStorage.clear(); 
        location.reload(); 
    });
}