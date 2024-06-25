// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Basic Form Validation (Example)
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Basic validation (replace with your own logic)
  if (contactForm.email.value === '') {
    alert('Please enter your email address.');
  } else {
    // If valid, you could submit the form here (using AJAX, for example)
    alert('Thank you for your message!');
  }
});
