import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import Cart from '../pages/CartList'
import ProductsList from '../pages/ProductsList'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<ProductsList/>} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/CartList" element={<Cart />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}