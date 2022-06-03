/* eslint-disable no-undef */
const form_submit = document.querySelector(".modal form")
const contactButton = document.querySelector(".contact_button")
const closeContactButton = document.querySelector(".close-contact")


form_submit.addEventListener("submit",(event) => validate(event))
contactButton.addEventListener('click', () => displayModal())
closeContactButton.addEventListener('click', () => closeModal())

function displayModal() {
	modal.style.display = "block";
    modal.querySelector('#firstName').focus()
    document.addEventListener('keydown', closeModalKeyHandler)
}

function closeModal() {
    modal.style.display = "none";
    contactButton.focus()
    document.removeEventListener('keydown', closeModalKeyHandler)
}


function validate(e){
    e.preventDefault();
    const first = document.getElementById("firstName").value
    const last = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const message = document.getElementById('yourMessage').value
    console.log(first,last,email,message)
    modal.getElementsByTagName('form')[0].reset()
    closeModal()
    return false
}

function closeModalKeyHandler(e) {
    if (e.key === "Escape") {
        closeModal()
    }
}