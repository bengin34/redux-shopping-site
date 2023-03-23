import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, Category,Cart } from "../pages/index"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element= { <Home />} />
        <Route path='/category:id' element= { <Category />} />
        <Route path='/cart' element= { <Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
