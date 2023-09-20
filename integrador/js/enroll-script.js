const enrollForm = document.getElementById('enroll-form');



enrollForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formName = document.getElementById('enroll-form-name');
    const formStudentName = document.getElementById('enroll-form-student-name');
    const formEmail = document.getElementById('enroll-form-email');
    const formPhone = document.getElementById('enroll-form-phone');
    const formMessage = document.getElementById('enroll-form-message');

    const inputIsValid = (input) => {
        return input.value.trim().length > 0;
    }

    const emailIsValid = (input) => {
        let value = input.value;
        let regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        return regexp.test(value);
    }

    const phoneIsValid = (input) => {
        let value=input.value;
        let regexp = /[0-9]{2}-[0-9]{4}-[0-9]{4}/
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
        displayValid(formName, "enroll-invalid-name");
    } else {
        displayInvalid(formName, "enroll-invalid-name");
    }

    if (inputIsValid(formStudentName)) {
        displayValid(formStudentName, "enroll-invalid-student-name");
    } else {
        displayInvalid(formStudentName, "enroll-invalid-student-name");
    }

    if (emailIsValid(formEmail)) {
        displayValid(formEmail, "enroll-invalid-email");
    } else {
        displayInvalid(formEmail, "enroll-invalid-email");
    }

    if(phoneIsValid(formPhone)) {
        displayValid(formPhone, "enroll-invalid-phone");
    } else {
        displayInvalid(formPhone,"enroll-invalid-phone");
    }

    if (messageIsValid(formMessage)) {
        displayValid(formMessage, "invalid-enroll-message");
    } else {
        displayInvalid(formMessage, "invalid-enroll-message");
    }

});