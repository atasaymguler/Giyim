import React, { useState } from 'react'
import foto from '../assets/1.png'
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

export default function Header() {

    let [theme, setTheme] = useState(false);

    let changeTheme = () => {
        let root = document.querySelector("#root");
        if (theme) {
            root.style.backgroundColor = "#fff"
            root.style.color = "#636e72"
        }
        else {
            root.style.backgroundColor = "#636e72"
            root.style.color = "#fff"

        }
        setTheme(!theme)
    }

    return (

        <div className='pt-2.5 flex justify-between items-center' >
            <div className='flex items-center gap-1.5 font-mono'>
                <img className='w-[50px] h-[50px] rounded-[50%]' src={foto} />
                <p> Süheyla A.Ş </p>
            </div>
            <div className='flex items-center gap-1.5'>
                <input type='text' placeholder='Aranacak Ürünü Giriniz...' className='outline-none border-b border-b-cyan-500 py-1 px-2' />
                <CiShoppingBasket className='text-[30px]' />
                {
                    theme ? <IoSunnySharp className='text-2xl hover:cursor-pointer' onClick={changeTheme} /> : <FaRegMoon className='text-2xl hover:cursor-pointer' onClick={changeTheme} />
                }
            </div>
        </div>
    )
}
