document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const item = { id, name, price };
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${name} ha sido añadido al carrito.`);
        });
    });
});
