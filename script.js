function addToCart(item) {
    alert(`${item} added to cart!`);
}

// Add event listeners to forms
document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for signing up!');
});

document.getElementById('partnerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for partnering with us!');
});

function toggleMenu() {
    const nav = document.querySelector('.navbar nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('show');
    hamburger.classList.toggle('active');
}

