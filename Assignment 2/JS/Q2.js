function toggleDetails(bookId) {
    const details = document.getElementById(bookId);
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function submitOrder(event) {
    event.preventDefault();
    const response = document.getElementById('response');
    const selectedBook = document.querySelector('input[name="book"]:checked');
    if (selectedBook) {
        response.textContent = `Order Confirmed for ${selectedBook.value}`;
        response.style.color = 'green';
        document.getElementById('orderForm').reset();
    } else {
        response.textContent = 'Please select a book to order';
        response.style.color = 'red';
    }
}