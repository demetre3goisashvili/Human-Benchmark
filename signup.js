const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const form = document.getElementById('form');
const name1 = document.getElementById('name');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');

btn2.addEventListener('mouseover', () => {
    btn.style.background = 'hsl(0, 7%, 97%)';
    btn.style.color = 'gray';
    btn2.style.background = 'linear-gradient(#00BFFF,rgb(43, 135, 209),#4169E1)'; 
    btn2.style.color = 'white';
});

btn2.addEventListener('mouseout', () => {
    btn.style.background = 'linear-gradient(#00BFFF,rgb(43, 135, 209),#4169E1)'; 
    btn.style.color = ''; 
    btn2.style.background = 'hsl(0, 7%, 97%)';
    btn2.style.color = 'gray'; 
});

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();  

        if (password.value !== repeatPassword.value) {
            alert("Password and repeat password must be the same.");
        } else {
            localStorage.setItem('name', name1.value);
            localStorage.setItem('password', password.value);
            
            alert('Registration successful!');
            window.location.href = "sign in.html"; 
        }
    });
}

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


