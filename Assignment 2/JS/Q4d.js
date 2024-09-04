document.getElementById("sortButton").addEventListener("click", function() {
    const input = document.getElementById("inputWords").value;

    if(input.trim() === '')
    {
        alert("Please enter some words.");
        return;
    }

    const wordArray = input.trim().split(/\s+/).sort((a, b) => a.localeCompare(b));

    document.getElementById('result').textContent = `Sorted Words: ${wordArray}`;
});