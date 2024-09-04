document.getElementById('compareButton').addEventListener('click', function() {
    const str1 = document.getElementById('string1').value.trim();
    const str2 = document.getElementById('string2').value.trim();

    let resultText = '';

    if (str1.length === str2.length) {
        resultText += 'The strings are of the same length.<br>';
    } else {
        resultText += 'The strings are of different lengths.<br>';
    }

    if (str1 === str2) {
        resultText += 'The strings are identical in content.<br>';
    } else {
        resultText += 'The strings are different in content.<br>';
    }

    document.getElementById('result').innerHTML = resultText;
});