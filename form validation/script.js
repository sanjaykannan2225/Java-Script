function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");

    nameError.innerHTML = "";
    emailError.innerHTML = "";

    let isValid = true;

    // Name validation
    let namePattern = /^[A-Za-z]+$/;

    if (!name.match(namePattern)) {
        nameError.innerHTML = "⚠️ Name should contain only letters";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[a-z0-9@.]+$/;

    if (!email.match(emailPattern)) {
        emailError.innerHTML = "⚠️ Email should be small letters & digits only";
        isValid = false;
    }

    return isValid;
}