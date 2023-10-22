const focusInput = document.querySelector('#validation-input');
focusInput.addEventListener('blur', (event) => {
    const wordLength = focusInput.getAttribute('data-length');
    const stringInput = focusInput.value.trim().length;

    if (stringInput === Number(wordLength)) {
        focusInput.classList.remove('invalid');
        focusInput.classList.add('valid');
    } else {
        focusInput.classList.remove('valid');
        focusInput.classList.add('invalid')
    }
});