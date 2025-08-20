import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slice/productSlice'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export default function ProductDetails() {

    let { selectedProduct, products } = useSelector((store) => store.products)
    let { image, price, title, description } = selectedProduct
    let dispatch = useDispatch()
    let { id } = useParams()

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    useEffect(() => {
        getProductById()
    }, [])

    let [count, setCount] = useState(0)

    const plus = () => {
        setCount(prev => prev + 1)
    }
    const minus = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div className='!mt-10 flex justify-center gap-7'>
            <div >
                <img src={image} />
            </div>
            <div className='text-start font-mono'>
                <p className='text-3xl'> {title} </p>
                <p className='!mt-5'> {description} </p>
                <p className='!mt-5 text-xl font-bold text-[#eb3b5a]'> {price}₺ </p>
                <div className='text-2xl flex !mt-5 items-center gap-2'>
                    <CiCirclePlus onClick={plus} className='hover:cursor-pointer' />
                    <span>{count}</span>
                    <CiCircleMinus onClick={minus} className='hover:cursor-pointer' />
                </div>
            </div>

        </div>
    )
}
