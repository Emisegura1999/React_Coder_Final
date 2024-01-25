import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const contadorDeCart = () => {
      return cart.reduce ((acc, p) => acc + p.contador, 0);
      
    }

    const precioTotalCart = () => {
      return cart.reduce ((acc, p) => acc + p.precio * p.contador, 0)
    }

    const vaciarCart = () => {
      setCart([])
    }

    const eliminarProducto = (id) => {
      setCart(cart.filter((p) => p.id !== id));
    }

    return(
        <CartContext.Provider value={{cart, setCart, contadorDeCart, precioTotalCart, vaciarCart, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
