import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slice/productSlice'

export default function ProductList() {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    let { products, loading } = useSelector((store) => store.products)
    console.log(products,loading);

    return (
        <div>

        </div>
    )
}
