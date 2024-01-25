import React from 'react'
import Item from './Item'
import { Box, SimpleGrid } from '@chakra-ui/react';

const ItemList = ({productos}) => {
  return (
    <Box maxW="1200px" mx="auto" py={8}>
      <SimpleGrid columns={{ base: 1, md: 2}} spacing={8}>
      {
        productos.map((p) => {
          return (
            <Item
                key={p.id}
                nombre={p.nombre}
                descripcion={p.descripcion}
                precio={p.precio}
                id={p.id}
                categoria = {p.categoria}
                img = {p.img}
                contador = {p.contador}
                productos = {p}
             />
          )
        })
      }
      </SimpleGrid>
    </Box>
  )
}

export default React.memo(ItemList)
