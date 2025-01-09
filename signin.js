const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const loginPassword = document.getElementById('pass');
const loginName = document.getElementById('name');
const form2 = document.getElementById('form2');

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

btn.style.transition = '0.5s'
btn2.style.transition = '0.5s'



if (form2) {
    form2.addEventListener('submit', function(e2) {
        e2.preventDefault();  

        const storedName = localStorage.getItem('name');
        const storedPassword = localStorage.getItem('password');

        if (loginName.value === storedName && loginPassword.value === storedPassword) {
            window.location.href = "home.html";
        } else {
            alert("Invalid login credentials Please try again");
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



