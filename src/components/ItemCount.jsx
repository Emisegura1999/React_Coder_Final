import React, { useState, useContext } from 'react';
import { Button } from '@chakra-ui/react';
import Swal from 'sweetalert2';
import { CartContext } from './context/CartContext';

const ItemCount = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const agregarAlCart = () => {
    const itemAgregado = { ...item, contador };
    console.log(itemAgregado);

    const nuevoCart = [...cart];
    const estaEnElCart = nuevoCart.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCart) {
      estaEnElCart.contador += contador;
    } else {
      nuevoCart.push(itemAgregado);
    }
    setCart(nuevoCart);

    
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      text: `${itemAgregado.nombre} se ha añadido al carrito.`,
    });
  };

  return (
    <div className='divDeContador'>
      <p className='pDeContador'>{contador}</p>
      <Button colorScheme='teal' size='m' onClick={restar} className='botonRestar'>
        -
      </Button>
      <Button onClick={agregarAlCart} className='botonAgregarCarrito'>
        Agregar al carrito
      </Button>
      <Button colorScheme='teal' size='m' onClick={sumar} className='botonSumar'>
        +
      </Button>
    </div>
  );
};

export default ItemCount;
