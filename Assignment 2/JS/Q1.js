function validaton()
{
    document.querySelector("button").addEventListener("click", function(event) {
        const userInput = document.querySelector('.username');
        const passInput = document.querySelector('.pass');
        
        const username = userInput.value;
        const password = passInput.value;

        console.log(username);
        console.log(password);
    
        const userValidation = /^[a-zA-Z0-9.]+$/;
        if(!userValidation.test(username))
        {
            alert("Username can only contains letters, numbers and dots");
            event.preventDefault();
            return;
        }

        // Password validation: At least 8 characters long, first letter capital
        const passValidation = /^[A-Z][a-zA-Z0-9@]{7,}$/;
        if (!passValidation.test(password)) {
            alert('Password must be at least 8 characters long and start with a capital letter.');
            event.preventDefault();
            return;
        }

        // If both validations pass
        alert('Form submitted successfully!');

        userInput.value = '';
        passInput.value = '';
    });
}

validaton();