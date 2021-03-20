import React, { useState, useEffect } from 'react'
import CartItem from "./CartItem.js";

function Cart({listOfProducts}) {
    const initialState = JSON.parse(window.localStorage.getItem('ShoppingItems'));
    const [items, setItems] = useState(initialState || listOfProducts)
    useEffect(() => {
        window.localStorage.setItem('ShoppingItems', JSON.stringify(items));
    }, [items])

    const updateQuantity = (id, quantity) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, quantity }
            } else {
                return item;
            }
        });
        setItems(newItems);
    }

    const totalPrice = items.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0).toFixed(2)

    return (
        <>
            <h1>List of Items</h1>
            <h1>${totalPrice}</h1>
            <ul>
            {items.map((item) =>
                <CartItem key={item.id} {...item} updateQuantity={updateQuantity} />
            )}
            </ul>
        </>
    )
}

export default Cart
