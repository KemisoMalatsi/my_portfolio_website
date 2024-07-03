let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.Onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Fullstack Developer', 'Freelancer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true, 
  });