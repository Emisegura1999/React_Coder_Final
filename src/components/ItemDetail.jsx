import React, { useContext } from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Image } from '@chakra-ui/react';
import ItemCount from './ItemCount';





const ItemDetail = ({ productos }) => {

 
//const {id} = useParams()
//console.log(id)

  return (
    
    <Card maxW='sm'>
      <CardBody bg="#F39C12">
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{productos.nombre}</Heading>
          <Text>{productos.categoria}</Text>
          <Text>{productos.descripcion}</Text>
          <Image src={productos.img} />
          <Text color='blue.600' fontSize='2xl'> 
            ${productos.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <ItemCount item={productos} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
