// script.js
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop();
        document.getElementById('fileExtension').textContent = `File extension: ${fileExtension}`;
    } else {
        document.getElementById('fileExtension').textContent = 'No file selected.';
    }
});