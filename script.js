const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const lastName = document.querySelector('#last-name');
const pwd = document.querySelector('#pwd');
const confirmPwd = document.querySelector('#confirm-pwd');

form.addEventListener('submit', e => {
    e.preventDefault();
    validInputs();

})

const setError = (element, message) => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success')
}

const setSuccess = element => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = '';
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhoneNumber = phoneNumber => {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(phoneNumber);
}

const validInputs = () => {

    const firstNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const lastNameValue = lastName.value.trim();
    const pwdValue = pwd.value.trim();
    const confirmPwdValue = confirmPwd.value.trim();

    if (firstNameValue === '') {
        setError(firstName, '*First name is required');
    } else {
        setSuccess(firstName);
    }

    if (emailValue === '') {
        setError(email, '*Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '*Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (!isValidPhoneNumber(phoneNumberValue)) {
        setError(phoneNumber, '*Provide a valid phone number');
    } else {
        setSuccess(phoneNumber);
    }

    if (lastNameValue === '') {
        setError(lastName, '*Last Name is required');
    } else {
        setSuccess(lastName);
    }

    if (pwdValue === '') {
        setError(pwd, '*Password is required');
    } else if (pwdValue.length < 8) {
        setError(pwd, '*Password must be at least 8 character.')
    } else {
        setSuccess(pwd);
    }

    if (confirmPwdValue === '') {
        setError(confirmPwd, '*Please confirm your password');
    } else if (confirmPwdValue !== pwdValue) {
        setError(confirmPwd, `*Passwords doesn't match`);
    } else {
        setSuccess(confirmPwd);
    }

}