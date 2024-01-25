import {React, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'

const ItemCount = ({item}) => {

    const {cart, setCart} = useContext(CartContext)

    const [contador, setContador] = useState(1)

    const sumar = () => {
      if (contador < 10) {
        setContador(contador + 1)
      } 
    }

    const restar = () => {
      if (contador > 0) {
        setContador(contador - 1)
      } 
    }

    const agregaralCart = () => {
      const itemAgregado = {...item, contador}
      console.log(itemAgregado);

      const nuevoCart = [...cart];
      const estaEnElCart = nuevoCart.find((producto) => producto.id === itemAgregado.id);

      
     if (estaEnElCart) {
      estaEnElCart.contador += contador;
     }else {
      nuevoCart.push(itemAgregado);
     }
     setCart(nuevoCart);



     
  }

  return (
    <div className='divDeContador'>

        <p className='pDeContador'>{contador}</p>

        <Button colorScheme='teal' size='m' onClick = {restar} className='botonRestar'>-</Button>

        <Button onClick = {agregaralCart} className='botonAgregarCarrito'>Agregar al carrito</Button>

        <Button colorScheme='teal' size='m' onClick = {sumar} className='botonSumar'>+</Button>



    </div>


  )
}


export default ItemCount