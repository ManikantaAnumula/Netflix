
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false)
})

const startbtn = document.querySelector('#getStartedBtn');
const emailinput = document.querySelector('.emailinput input')

//For focusing the email input if submitted empty.
startbtn.addEventListener('click', (evt) => {
    if (emailinput.value === "") {
        evt.preventDefault()
        emailinput.focus();
    }
})

