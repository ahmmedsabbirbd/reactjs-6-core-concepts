const addData = id => {
    let cart = {};
    
    if(localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    const quantity = cart[id];
    if(quantity) {
        cart[id] = quantity + 1;
    } else {   
        cart[id] = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeData = id => { 
    let cart = localStorage.getItem('cart');
    if(cart) {
        cart = JSON.parse(cart);

        if(cart[id]) {
            delete cart[id];
        }
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

const deleteCart = ()=> {
    localStorage.removeItem('cart');
}

export { addData, removeData, deleteCart }