import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, precioTotalCart, vaciarCart, eliminarProducto, agregaralCart } = useContext(CartContext);

  function formatNumber(precioTotalCart) {
    return new Intl.NumberFormat().format(precioTotalCart);
  }

  return (
    <Box bg="teal.500" color="white" p={4} borderRadius="md">
      <Heading fontSize="2xl" mb={4}>
        Carrito
      </Heading>

      {cart.map((p) => (
        <Box key={p.id} mb={4} p={4} bg="white" borderRadius="md" boxShadow="md">
          <Heading color="teal.500" size="md" mb={2}>
            {p.nombre}
          </Heading>
          <Text color="gray.600" mb={2}>
            Precio unitario: ${p.precio}.-
          </Text>
          <Text color="gray.600">Cantidad: {p.contador} unidades</Text>
          <Button colorScheme="red" mt={4} onClick={() => eliminarProducto(p.id)}>
            Eliminar
          </Button>
        </Box>
      ))}

      <Heading fontSize="xl" mt={4}>
        Precio total: {formatNumber(precioTotalCart())}
      </Heading>

      <Button mt={4} colorScheme="red" onClick={vaciarCart}>
        Vaciar Carrito
      </Button>

      <Link to="/carrito/pedido">
        <Button mt={4} colorScheme="green" ml={4}>
          Confirmar compra
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;