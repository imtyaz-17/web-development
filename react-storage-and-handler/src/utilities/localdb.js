// use local storage
const addToDb = _id => {
    let shoppingCart;

    // get the shopping cart 
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }

    // add quantity
    const quantity = shoppingCart[_id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[_id] = newQuantity;
        // localStorage.setItem(_id, newQuantity);
    } else {
        // localStorage.setItem(_id, 1);
        shoppingCart[_id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb = _id => {
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = JSON.parse(storedCart);
    if (_id in shoppingCart) {
        delete shoppingCart[_id]; localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}
export { addToDb, removeFromDb, deleteShoppingCart };