document.getElementById('capitalizeButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value.trim();
    if (inputString.length === 0) {
        document.getElementById('result').innerHTML = 'Please enter a string.';
        return;
    }

    // Capitalize the first letter
    const capitalizedString = inputString.charAt(0).toUpperCase() + inputString.slice(1);

    // Display the result
    document.getElementById('result').innerHTML = `Result: ${capitalizedString}`;
});