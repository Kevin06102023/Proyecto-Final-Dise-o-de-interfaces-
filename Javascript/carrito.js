document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} EUR`;
            cartItems.appendChild(li);
            total += parseFloat(item.price);
        });

        cartTotal.textContent = `Total: ${total.toFixed(2)} EUR`;
    }

    function clearCart() {
        cart = [];
        localStorage.removeItem('cart');
        updateCartDisplay();
    }

    clearCartButton.addEventListener('click', clearCart);

    updateCartDisplay();
});
