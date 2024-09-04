document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('error');
    const email = emailInput.value.trim();

    // Simple email validation regex
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValid.test(email)) {
        errorElement.textContent = "Email is valid!";
        errorElement.style.color = "#06D001";
    } else {
        errorElement.textContent = "Please enter a valid email address.";
        errorElement.style.color = "red";
    }
});