document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();
            var formMessage = document.getElementById('formMessage');

            if (name && email && message) {
                // Simulate form submission (replace with AJAX for real use)
                formMessage.textContent = 'Thank you for your message, ' + name + '! We will get back to you soon.';
                contactForm.reset();
            } else {
                formMessage.textContent = 'Please fill in all fields.';
            }
        });
    }
});