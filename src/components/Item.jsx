import React from 'react'
import {Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Item = ({productos}) => {
  return (
      <Card maxW='sm'>
          <CardBody bg="#F39C12">
              <Stack mt='6' spacing='3'>
                <Center>
                  <Heading size='md'>{productos.nombre}</Heading>
                </Center>
                  <Image src={productos.img} />
              </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <ButtonGroup spacing='2'>
                 <Button>
                    <Link to={`/producto/${productos.id}`}>
                    Ver Detalle
                    </Link>
                 </Button>
              </ButtonGroup>
          </CardFooter>
      </Card>
  )
}

export default Item
