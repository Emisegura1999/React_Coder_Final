import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
const { contadorDeCart } = useContext(CartContext);

return (
    <div>

        <Link className='menu-link' to="/Cart">
            <span className='numerito'>{contadorDeCart()}</span>
            <FaShoppingCart />
        </Link>
    </div>
)

}

export default CartWidget