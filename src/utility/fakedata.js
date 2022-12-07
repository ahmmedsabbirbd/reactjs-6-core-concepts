const addData = id => {
    const quantity = localStorage.getItem(id);
    console.log(quantity);
    if(quantity) {
        const tempuraryQuantity = +quantity + 1;
        localStorage.setItem(id, tempuraryQuantity);
    } else {
        localStorage.setItem(id, 1)
    }
}

export { addData }