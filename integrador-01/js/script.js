const contactForm = document.getElementById('contact-form');
const formTextArea = document.querySelector('#form-message');
const formMaxChars = 200;

formTextArea.addEventListener("keydown", (e) => {
    const messageChars = formTextArea.value.length;
    const charCounterSpan = document.querySelector('#char-counter');

    if (messageChars > formMaxChars) {
        formTextArea.classList.add("is-invalid");
        const feedbackMessage = document.querySelector('#invalid-message');
        feedbackMessage.style.display = "block";
    }

    charCounterSpan.textContent = messageChars;
});


const formReset = () => {

    for (input of contactForm) {
        input.value = "";
        input.classList.remove("is-valid");
        input.classList.remove("is-invalid");

        let divId = input.id.replace(/form/, 'invalid');
        let feedbackDiv = document.getElementById(divId);

        feedbackDiv.style.display = "none";
    }
}


//Como aplicar EncodeURIComponent() acá???

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formName = document.getElementById('form-name');
    const formEmail = document.getElementById('form-email');
    const formMessage = document.getElementById('form-message');

    const inputIsValid = (input) => {
        return input.value.trim().length > 0;
    }

    const emailIsValid = (input) => {
        let value = input.value;
        let regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        return regexp.test(value);
    }

    const messageIsValid = (input) => {
        let value = input.value;
        return value.length > 5 && value.length <= 200;
    }

    const displayValid = (input, id) => {
        input.classList.remove("is-invalid");
        let feedbackDiv = document.getElementById(id);
        feedbackDiv.style.display = "none";

        input.classList.add("is-valid");
    }

    const displayInvalid = (input, id) => {
        input.classList.remove("is-valid");

        let feedbackDiv = document.getElementById(id);
        input.classList.add("is-invalid");
        feedbackDiv.style.display = "block";
    }

    if (inputIsValid(formName)) {
        displayValid(formName, "invalid-name");
    } else {
        displayInvalid(formName, "invalid-name");
    }

    if (emailIsValid(formEmail)) {
        displayValid(formEmail, "invalid-email");
    } else {
        displayInvalid(formEmail, "invalid-email");
    }

    if (messageIsValid(formMessage)) {
        displayValid(formMessage, "invalid-message");
    } else {
        displayInvalid(formMessage, "invalid-message");
    }

});