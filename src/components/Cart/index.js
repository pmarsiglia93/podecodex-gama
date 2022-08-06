import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

import './styles.css';

const ShoppingCart = () => {
    const { cart, setCart } = useContext(CartContext)
    const [messagePay, setMessagePay] = useState('')

    const handlePayment = () => {
        setCart([])
        setMessagePay('Compra realizada com sucesso!')
    }

    const handleDelete = (indexControll) => {
        setCart(prev => prev.filter((item, index) => indexControll !==item))
    }
    console.log(cart)
    return (
        <div className="container-cart">
            
            {cart?.map(item => (
                <div key={item.id} className="card-pokemon">
                    <h3>{item.name}</h3>
                    <span>{item.type}</span>
                    <span>R${item.price},00</span>
                    <img src={item.image}/>
                    <button onClick={()=> handleDelete(item)}>Delete</button>

                </div>
            ))}
            {cart.length > 0 && <button className="finalizar" onClick={() => handlePayment()}>Finalizar Compra</button>}
            {cart.length <= 0 && <h3 className="text">{messagePay}</h3>}
        </div>
    )
    
}

export default ShoppingCart;