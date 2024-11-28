const form = document.getElementById("validationForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const nameInput = document.getElementById("name")

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const nameError = document.getElementById("nameError")

form.addEventListener("submit", (event) => {
    let valid = true;

    // Clear previous errors
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    nameError.textContent = "";


    const nameValue = nameInput.value;
    const nameRegex = /^([A-Z])/; // At least 8 characters, one capital letter
    if (!nameRegex.test(nameValue)) {
        nameError.textContent = "Enter a valid name";
        valid = false;
    }


    // Email Validation
    const emailValue = emailInput.value;
    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Password Validation
    const passwordValue = passwordInput.value;
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // At least 8 characters, one capital letter
    if (!passwordRegex.test(passwordValue)) {
        passwordError.textContent = "Password must be least 8 characters long and have one cap letter.";
        valid = false;
    }

    // Confirm Password Validation
    const confirmPasswordValue = confirmPasswordInput.value;
    if (passwordValue !== confirmPasswordValue) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});