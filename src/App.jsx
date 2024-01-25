import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Form from './components/Form'
import CartProvider from './components/context/CartContext'

const App = () => {


  return (
    <CartProvider>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route exact path='/categoria/:id'element={<ItemListContainer />} />
        <Route exact path='/producto/:id'  element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/carrito/pedido' element={<Form />} />

      </Routes>

    </BrowserRouter>
    </CartProvider>
  )

}

export default App