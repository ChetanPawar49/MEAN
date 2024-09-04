document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name === '' || address === '' || phone === '') {
        alert('Please fill out all fields');
        return;
    }

    const contact = { name, address, phone };
    addContact(contact);

    document.getElementById('contactForm').reset();
});

function addContact(contact) {
    const contactsDiv = document.getElementById('contacts');

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact';

    const contactInfo = `
        <h3>${contact.name}</h3>
        <p><strong>Address:</strong> ${contact.address}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p class="delete-button">Delete</p>
    `;

    contactDiv.innerHTML = contactInfo;
    contactsDiv.appendChild(contactDiv);

    contactDiv.querySelector('.delete-button').addEventListener('click', function() {
        contactDiv.remove();
    });
}