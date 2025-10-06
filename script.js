const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

const nameError = document.getElementById('nameError');
const messageError = document.getElementById('messageError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    nameError.textContent = '';
    messageError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';

    let isValid = true;

    const nameRegex = /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]+$/;
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else if (!nameRegex.test(nameInput.value.trim())) {
        nameError.textContent = 'Name must contain only letters.';
        isValid = false;
    }

    if (messageInput.value.trim().length < 5) {
        messageError.textContent = 'Message must be at least 5 characters.';
        isValid = false;
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.textContent = 'Phone must start with +380 and contain 9 digits.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email.';
        isValid = false;
    }

    if (isValid) {
        const userData = {
            name: nameInput.value.trim(),
            message: messageInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim()
        };
        console.log('User data:', userData);
        alert('Message sent successfully!');
        form.reset();
    }
});
