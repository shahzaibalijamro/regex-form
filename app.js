const username = document.querySelector('.username');
const email = document.querySelector('.email');
const age = document.querySelector('.age');
const password = document.querySelector('.password');
const CNIC = document.querySelector('.CNIC');
const form = document.querySelector('.form');

const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const cnicRegex = /^\d{13}$/;
const ageRegex = /^(1[89]|[2-5][0-9]|60)$/;

form.addEventListener('submit', event => {
    event.preventDefault();
    if (usernameRegex.test(username.value)) {
        // console.log(username.value);
    }else{
        alert('Username must be 4-15 characters long, and must not contain whitespaces.')
    }
    if (emailRegex.test(email.value)) {
        // console.log(email.value);
    }else{
        alert('email must contain the @ and the .')
    }
    if (passwordRegex.test(password.value)) {
        // console.log(password.value);
    }else{
        alert('password does not meet the requirements.')
    }
    if (cnicRegex.test(CNIC.value)) {
        // console.log(CNIC.value);
    }else{
        alert('CNIC does not meet the requirements.')
    }
    if (ageRegex.test(age.value)) {
        // console.log(age.value);
    }else{
        alert('age should be 18-60.')
    }
    if (usernameRegex.test(username.value) && emailRegex.test(email.value) && passwordRegex.test(password.value) && cnicRegex.test(CNIC.value) && ageRegex.test(age.value)) {
        console.log(username.value);
        console.log(email.value);
        console.log(password.value);
        console.log(CNIC.value);
        console.log(age.value);
    }
})