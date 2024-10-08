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
document.addEventListener('DOMContentLoaded', (event) => {
    const typed = new Typed('.multiple-text', {
        strings: ['Software Engineer', 'Fullstack Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1300,
        loop: true, 
    });
});


  

  // EmailJS integration
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Please try again later.');
        });
});