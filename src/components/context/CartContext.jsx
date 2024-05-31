import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = sessionStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let product = cart.find(prod => prod.id === item.id);
            product.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, quantity: quantity }]);
        }
    };

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    const countProducts = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0);
    };

    const sumPriceProducts = () => {
        return cart.reduce((acum, item) => acum += item.quantity * item.precio, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, countProducts, sumPriceProducts }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
