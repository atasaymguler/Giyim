import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slice/productSlice'
import Product from './Product'

export default function ProductList() {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    let { products } = useSelector((store) => store.products)

    return (
        <div className='flex items-center justify-center flex-wrap gap-2.5  !mt-8'>

            {
                products && products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }

        </div>
    )
}
