let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typing Text
const typed = new Typed('.multiple-text', {
    strings: ['Cybersecurity Enthusiast', 'Aspiring Ethical Hacker' , 'Freelancer'],
    typeSpeed: 90,
    backSpeed: 80,
    backDelay: 2000,
    loop: true,
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