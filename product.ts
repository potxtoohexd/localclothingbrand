// Initialize an empty cart array
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCartDisplay();
    showCartModal();
}

// Function to update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to show the cart modal
function showCartModal() {
    const cartModalBody = document.getElementById('cart-modal-body');
    cartModalBody.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(product => {
        const productRow = document.createElement('div');
        productRow.className = 'd-flex justify-content-between';
        productRow.innerHTML = `<span>${product.name}</span><span>$${product.price.toFixed(2)}</span>`;
        cartModalBody.appendChild(productRow);
        totalPrice += product.price;
    });

    const totalRow = document.createElement('div');
    totalRow.className = 'd-flex justify-content-between font-weight-bold border-top pt-2';
    totalRow.innerHTML = `<span>Total</span><span>$${totalPrice.toFixed(2)}</span>`;
    cartModalBody.appendChild(totalRow);

    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
}

// Event listeners for "Add to cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.dataset.name;
        const productPrice = parseFloat(this.dataset.price);
        addToCart(productName, productPrice);
    });
});
