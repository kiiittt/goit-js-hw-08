import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const textArea = document.querySelector('[name="message"]');

form.addEventListener('submit', onFormSubmit);

const throttledEmailInput = throttle(onEmailInput, 500);
const throttledTextAreaInput = throttle(onTextAreaInput, 500);

email.addEventListener('input', throttledEmailInput);
textArea.addEventListener('input', throttledTextAreaInput);

populateEmail();
populateTextArea();

function onFormSubmit (event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    localStorage.removeItem('feedback-form-email');
};

function onEmailInput(event) {
    const emailAdress = event.currentTarget.value;
    localStorage.setItem('feedback-form-email', emailAdress);
};

function onTextAreaInput(event) {
    const message = event.currentTarget.value;
    localStorage.setItem('feedback-form-state', message);   
};

function populateEmail() {
    const savedEmail = localStorage.getItem('feedback-form-email');
    if (savedEmail) {
        console.log(savedEmail);
        email.value = savedEmail;
    }
}

function populateTextArea() {
    const savedMessage = localStorage.getItem('feedback-form-state');
    if (savedMessage) {
        console.log(savedMessage);
        textArea.value = savedMessage;
    }
};
