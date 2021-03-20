import React from 'react'

function CartItem({id, name, price, quantity, updateQuantity}) {
    const subtractOne = () => updateQuantity(id, quantity - 1)
    const addOne = () => updateQuantity(id, quantity + 1)
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>
                <button disabled={quantity <= 0} onClick={subtractOne}>-</button>
                    {quantity}
                <button onClick={addOne}>+</button>
            </div>
            <div>${price}</div>
        </div>
    )
}

export default CartItem
