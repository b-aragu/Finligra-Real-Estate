document.querySelector('.search-bar button').addEventListener('click', function() {
    let searchQuery = document.querySelector('.search-bar input').value.trim();
    
    if (searchQuery === '') {
        alert("Please enter a location or property type.");
    } else {
        alert("Searching for properties in: " + searchQuery);
        // Implement actual search logic as needed
    }
});

// Extended property data with more details
const allProperties = [
    {
        image: 'property1.webp',
        title: 'Luxury Villa',
        price: 75000000,
        location: 'Nairobi, Kenya',
        bedrooms: 5,
        bathrooms: 4,
        size: '4500 sq. ft'
    },
    {
        image: 'property2.webp',
        title: 'Modern Apartment',
        price: 32000000,
        location: 'Mombasa, Kenya',
        bedrooms: 3,
        bathrooms: 2,
        size: '1800 sq. ft'
    },
    {
        image: 'property3. 🛋️🏞',
        title: 'Cozy Cottage',
        price: 45000000,
        location: 'Naivasha, Kenya',
        bedrooms: 4,
        bathrooms: 3,
        size: '3000 sq. ft'
    },
    {
        image: 'property4.jpeg',
        title: 'Penthouse Suite',
        price: 120000000,
        location: 'Nairobi, Kenya',
        bedrooms: 6,
        bathrooms: 5,
        size: '6000 sq. ft'
    }
];

// Dynamically generate property cards with more details
function generateDetailedPropertyCards(properties) {
    const propertiesGrid = document.querySelector('.properties-grid');
    propertiesGrid.innerHTML = ''; // Clear existing cards

    properties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>KSH ${property.price.toLocaleString()}</p>
            <p>Location: ${property.location}</p>
            <p>${property.bedrooms} Bedrooms, ${property.bathrooms} Bathrooms</p>
            <p>Size: ${property.size}</p>
        `;
        propertiesGrid.appendChild(card);
    });
}

// Call the function to generate detailed property cards
generateDetailedPropertyCards(allProperties);

document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Basic validation (can be enhanced)
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission (in a real scenario, you would send this data to the server)
    alert(`Thank you, ${name}! Your inquiry has been submitted.`);
    
    // Reset the form
    document.getElementById('inquiryForm').reset();
});
