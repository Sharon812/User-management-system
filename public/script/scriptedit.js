const formm = document.getElementById("validationFormm");
const emailInputt = document.getElementById("editUserEmail");
const nameInputt = document.getElementById("editUserName");
const emailErrorr = document.getElementById("emailErrorr");
const nameErrorr = document.getElementById("nameErrorr");

formm.addEventListener("submit", (event) => {
    let valid = true;

    // Clear previous errors
    emailErrorr.textContent = "";
    nameErrorr.textContent = "";

    // Name Validation
    const nameValuee = nameInputt.value; // Trim spaces
    const nameRegexx =/^([A-Z])/; // Starts with uppercase, allows letters & spaces, min length 3
    if (!nameRegexx.test(nameValuee)) {
        nameErrorr.textContent = "Enter a valid name (e.g., 'John Doe').";
        valid = false;
    }

    // Email Validation
    const emailValuee = emailInputt.value.trim(); // Trim spaces
    const emailRegexx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email regex
    if (!emailRegexx.test(emailValuee)) {
        emailErrorr.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
});
