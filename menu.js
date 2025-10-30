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
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalDiv = document.getElementById('cartTotal');
    
    cartItemsDiv.innerHTML = '';
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${itemTotal}</span>
            <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });
    
    cartTotalDiv.innerHTML = `<strong>Total: $${total}</strong>`;
}