
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

const accord = document.querySelector('.accordion-header button')

if (!accord.classList.contains('collapsed')) {
    accord.style.backgroundColor = "rgb(91, 88, 88)";
}

const startbtn = document.querySelector('#getStartedBtn');
const emailinput = document.querySelector('.emailinput input')

const startbtnEnd = document.querySelector('#getStartedBtn-end');
const emailinputEnd = document.querySelector('#homeform-end input')

//For focusing the email input if submitted empty - START
startbtn.addEventListener('click', (evt) => {
    if (emailinput.value === "") {
        evt.preventDefault()
        emailinput.focus();
    }
})

//For focusing the email input if submitted empty - END
startbtnEnd.addEventListener('click', (evt) => {
    if (emailinputEnd.value === "") {
        evt.preventDefault()
        emailinputEnd.focus();
    }
})


const navlink = document.querySelector('.singinform .navlogo');