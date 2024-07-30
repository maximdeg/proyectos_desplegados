export const getCart = () => {
    const saved_cart = localStorage.getItem("cart");
    if (saved_cart) {
        return JSON.parse(saved_cart);
    } else {
        return [];
    }
};

export const saveCartToLocalStorage = (cart) => {
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem("cart", cartJSON);
};

export const updateCart = (product) => {
    const cart = getCart();
    cart.push(product);
    saveCartToLocalStorage(cart);
};
