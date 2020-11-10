const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get value from the inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Please write down your username');
    } else {
        //add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        //show error
        //add error class
        setErrorFor(email, 'Please write down your email');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Your email is not valid')
    } else {
        //add success class
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        //show error
        //add error class
        setErrorFor(password, 'Please write down your password');
    } else {
        //add success class
        setSuccessFor(password);
    }
    if (password2Value === '') {
        //show error
        //add error class
        setErrorFor(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, 'You have written down another password')
    } else {
        //add success class
        setSuccessFor(password2);
    }
    if (usernameValue !=='' && emailValue !=='' && passwordValue !== '' && password2Value !== '' && password2Value === passwordValue && isEmail(emailValue)) {
        alert('You have passed the validation');
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
