import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ProductDetails from '../components/ProductDetails'

export default function RouterConfig() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
        </Routes>
    )
}
