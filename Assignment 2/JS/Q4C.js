document.getElementById('replaceButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const charToReplace = document.getElementById('charToReplace').value;
    const replaceWith = document.getElementById('replaceWith').value;

    if (inputString === '' || charToReplace === '' || replaceWith === '') {
        alert('Please fill in all fields');
        return;
    }

    // Replace all occurrences of charToReplace with replaceWith
    const resultString = inputString.split(charToReplace).join(replaceWith);

    // Display the result
    document.getElementById('result').textContent = `Result: ${resultString}`;
});