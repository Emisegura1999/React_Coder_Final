import React from 'react'
import { useContext } from 'react';
import { CartContext } from './context/CartContext'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { Text, Heading, FormControl, FormLabel, Input, FormHelperText, Button, Box } from '@chakra-ui/react';


const Form = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const { cart } = useContext(CartContext)


    const db = getFirestore()

    const handleSubmit = (e) => {

        e.preventDefault();

        addDoc(ordersCollection, order).then(({id}) =>
            setOrderId(id))

    }

    const order = {
       cliente: { nombre, email, telefono},
       items: cart,
    }

    const ordersCollection = collection(db, "orden")






  return (

    <div>

     <Box bg="#F8C471" p={4} borderRadius="md" mt={4}>
        <Heading noOfLines={1}>
        Complete el siguiente formulario para mandar su pedido!
        </Heading>

        <FormControl isRequired>
            <form action="" onSubmit={handleSubmit}>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <FormLabel>Telefono</FormLabel>
                <Input type="text" placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                <FormHelperText>Nosotros nunca compartiremos tus datos personales.</FormHelperText>

                <Button type='submit' colorScheme='teal' size='md'>
                    Enviar pedido
                </Button>
            </form>
        </FormControl>
        

        <Text>Tu Orden Id es: {orderId}</Text>
     </Box>   
    </div>

  )
}

export default Form
