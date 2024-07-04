
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('active');
    navbar.classList.remove('active');
};

// Typing Text

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Fullstack Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1300,
    loop: true, 
  });
  