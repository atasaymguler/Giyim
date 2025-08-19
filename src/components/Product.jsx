import React from 'react'

export default function Product({ product }) {
    let { id, title, image, price } = product
    return (
        <div className='w-[250px] h-[300px] !mt-3 !p-2 flex flex-col justify-between items-center shadow-lg rounded-lg transition ease-in duration-500'>
            <div>
                <img className='w-[250px] h-[150px] object-scale-down ' src={image} />
            </div>
            <div className='text-center'>
                <p className='short '> {title} </p>
                <p > {price}₺ </p>
            </div>
            <div className='!mb-2'>
                <button className='bg-amber-300 hover:cursor-pointer transition ease-in duration-500 hover:bg-amber-500 !py-1 !px-2 rounded-lg'> Detaya Git </button>
            </div>
        </div>
    )
}
