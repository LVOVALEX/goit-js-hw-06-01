const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const formDataObject = {};

    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    if (formDataObject.email.trim() === '' || formDataObject.password.trim() === '') {
        alert('PLEASE FILL IN ALL FIELDS');
    } else {
        console.log(formDataObject);
        form.reset();
    }
})
