const sum =(a, b) => {
    return a + b;
}

const multiple =(a, b) => {
    return a * b;
}

const totalCart = (loCart) => {
    let cart = localStorage.getItem(loCart);
    let totalNumber = 0;
    if(cart) {
        cart = JSON.parse(cart);
        const cartNumber = Object.values(cart)
        totalNumber = cartNumber.reduce((a, b)=> (a + b ), 0);
    }
    return totalNumber;
}

export { 
    sum,
    multiple,
    totalCart as toCart
};