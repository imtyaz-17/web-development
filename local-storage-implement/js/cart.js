const getInputvalueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addProduct = () => {
    const product = getInputvalueById('product-name-field');
    const quantity = getInputvalueById('product-quantity-field');
    addProductsToDisplay(product, quantity);


    //localStorage.setItem(product, quantity); //simple way

    saveItemToLocalStorage(product, quantity);
}

const getShoppingCartFromLoacalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};

    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}
const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLoacalStorage();
    // add product to the Object as property 
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    //set local storage
    localStorage.setItem('cart', cartStringified);

}
const addProductsToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLoacalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        addProductsToDisplay(product, quantity);
    }
}
displayStoredProducts();