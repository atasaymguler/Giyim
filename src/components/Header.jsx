import React, { useState } from 'react'
import foto from '../assets/1.png'
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slice/basketSlice';
import { getSearchProducts } from '../redux/slice/productSlice';

export default function Header() {

    let [theme, setTheme] = useState(false);

    let changeTheme = () => {
        let root = document.querySelector("#root");
        if (theme) {
            root.style.backgroundColor = "#fff"
            root.style.color = "black"
        }
        else {
            root.style.backgroundColor = "#636e72"
            root.style.color = "#fff"

        }
        setTheme(!theme)
    }

    let navigate = useNavigate()

    let { products } = useSelector(store => store.basket)

    let dispatch = useDispatch()

    const searchProduct = (e) => {

        let title = e.target.value.toLowerCase().trim()
        dispatch(getSearchProducts(title))
    }

    return (

        <div className='!pt-2.5 flex justify-between items-center' >
            <div className='flex items-center gap-1.5 font-mono'>
                <img onClick={() => navigate("/")} className='w-[50px] h-[50px] rounded-[50%] hover:cursor-pointer' src={foto} />
                <p> Süheyla A.Ş </p>
            </div>
            <div className='flex items-center gap-1.5'>
                <input type='text' onChange={searchProduct} placeholder='Aranacak Ürünü Giriniz...' className='outline-none border-b border-b-cyan-500 py-1 px-2' />
                <Badge onClick={() => dispatch(setDrawer())} className='hover:cursor-pointer' badgeContent={products.length} color="primary">
                    <CiShoppingBasket className='text-2xl' />
                </Badge>
                {
                    theme ? <IoSunnySharp className='text-xl hover:cursor-pointer' onClick={changeTheme} /> : <FaRegMoon className='text-xl hover:cursor-pointer' onClick={changeTheme} />
                }
            </div>
        </div>
    )
}
