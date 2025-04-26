import React from 'react'
import Product from './Components/Product'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ProductView from './Components/ProductView'

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Product/>} />
     <Route path='/product/:productId' element={<ProductView/>} />
     
    </Routes>
    </BrowserRouter>
  )
}

export default App
