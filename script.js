// Registration form submission → go to feedback page
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const department = document.getElementById('department').value.trim();
        const year = document.getElementById('year').value;
        const projectTitle = document.getElementById('projectTitle').value.trim();

        if (name && email && department && year && projectTitle) {
            // Redirect to feedback page
            window.location.href = "feedback.html";
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Feedback form submission → change background color with animation
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const feedback = document.getElementById('feedback').value.trim();
        const details = document.getElementById('details').value.trim();

        if (feedback && details) {
            // Change background color with smooth animation
            document.body.style.background = 'linear-gradient(135deg, #00b09b, #96c93d)';
            alert('Thank you for your feedback!');
            feedbackForm.reset();
        } else {
            alert('Please provide your feedback and details.');
        }
    });
}
