let cart = [];

function addToCart(itemName, price) {
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
    }
    
    updateCart();
}

function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function updateCart() {
    let cartHTML = '';
    let total = 0;
    
    for (let item of cart) {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <span>${item.name} (x${item.quantity})</span>
                <span>$${itemTotal}</span>
                <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
    }
    
    document.getElementById('cartItems').innerHTML = cartHTML;
    document.getElementById('cartTotal').innerHTML = `<strong>Total: $${total}</strong>`;
}