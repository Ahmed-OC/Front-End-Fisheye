
const form_submit = document.querySelector(".modal form")

form_submit.addEventListener("submit",(event) => validate(event))

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
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