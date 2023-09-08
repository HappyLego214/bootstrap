const passwordValid = document.querySelector('#inputPassword');
const emailValid = document.querySelector('#inputEmail');
const firstNameValid = document.querySelector('#inputFirstName');
const lastNameValid = document.querySelector('#inputLastName');

const btnSubmit = document.querySelector('#submitForm');

const namesRegex = /^[A-Z]+$/i;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

btnSubmit.addEventListener('click', () => {
    console.log(passwordValid.value);
    if (passwordRegex.test(passwordValid.value) == true) {
        passwordValid.classList.remove('invalidEntry');
        passwordValid.classList.add('validEntry');
        passwordValid.placeholder = "";
    } else {
        passwordValid.classList.remove('validEntry');
        passwordValid.classList.add('invalidEntry');
        passwordValid.placeholder = "Invalid Password";
    }

    if (emailRegex.test(emailValid.value) == true) {
        emailValid.classList.remove('invalidEntry');
        emailValid.classList.add('validEntry');
        emailValid.placeholder = "";
    } else {
        emailValid.classList.remove('validEntry');
        emailValid.classList.add('invalidEntry');
        emailValid.placeholder = "Invalid Email";
    }

    if (namesRegex.test(firstNameValid.value) == true) {
        firstNameValid.classList.remove('invalidEntry');
        firstNameValid.classList.add('validEntry');
        firstNameValid.placeholder = "";
    } else {
        firstNameValid.classList.remove('validEntry');
        firstNameValid.classList.add('invalidEntry');
        firstNameValid.placeholder = "Invalid First Name";
    }

    if (namesRegex.test(lastNameValid.value) == true) {
        lastNameValid.classList.remove('invalidEntry');
        lastNameValid.classList.add('validEntry');
        lastNameValid.placeholder = "";
    } else {
        lastNameValid.classList.remove('validEntry');
        lastNameValid.classList.add('invalidEntry');
        lastNameValid.placeholder = "Invalid Last Name";
    }
});