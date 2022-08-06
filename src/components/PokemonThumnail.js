import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';


const PokemonThumnail = ({ id, name, image, type, price }) => {   
    const {cart, setCart} = useContext(CartContext)

    function addPokemonCart ()  {
        setCart(cart => [...cart,{
            id,
            name,
            image,
            type,
            price
        }])
    }

    return (
        <div className='thumb-container'>
            <div className='number'>
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className='detail-wrapper'>
                <h3 className={`color--${type}`}>{name}</h3>
                <small>Type: {type}</small>
                <small>{price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}</small>

                <button className={`btn-comprar bg--${type}`} onClick={addPokemonCart}>Comprar</button>
            </div>
        </div>
    )
}

export default PokemonThumnail