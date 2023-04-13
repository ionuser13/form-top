const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordAlert = document.querySelector('.passwordAlert')

function passValidation() {
    const passwordValue = password.value;
    const confPassValue = confirmPassword.value;
    if(confPassValue !== passwordValue) {
        passwordAlert.style.display = 'block'
        confirmPassword.classList.add('error');
    } else {
        passwordAlert.style.display = 'none'
        confirmPassword.classList.remove('error');
    }
}
