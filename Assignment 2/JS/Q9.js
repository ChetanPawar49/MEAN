document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            
            img.onload = function() {
                document.getElementById('imagePreview').innerHTML = `<img src="${img.src}" alt="Image preview">`;
                document.getElementById('width').textContent = img.width;
                document.getElementById('height').textContent = img.height;
            };
        };
        
        reader.readAsDataURL(file);
    }
});