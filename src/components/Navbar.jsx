import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Spacer, Box} from '@chakra-ui/react'



const Navbar = () => {
  return (
   <Box backgroundColor='orange'>
    <div>

              <Flex>
                   <Box p='4' >
                   <Link to={"/"}>
                     <p>TecnoStore</p>
                   </Link>
                   </Box>
                   <Spacer />

                   <Menu>
        <MenuButton>
          Categoria
        </MenuButton>
        <MenuList>
          <Link to={'/Categoria/Notebooks'}>
            <MenuItem>Notebooks</MenuItem>
          </Link>
          <Link to={'/Categoria/Monitores'}>
            <MenuItem>Monitores</MenuItem>
          </Link>
          <Link to={'/Categoria/Perifericos'}>
            <MenuItem>Perifericos</MenuItem>
          </Link>
        </MenuList>
                 </Menu> 
                     <Spacer />
                   <Box p='4' >
                    <Link to={'/cart'}>
                      <CartWidget />
                    </Link>
                   </Box>
              </Flex>
    </div>
  </Box> 
  )
}

export default Navbar