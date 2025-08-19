import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

export default function RouterConfig() {
    // ? Bu aşamada yaptığımız şey ; Home componenti içerisin de ProductList componentini çağırdık , RouterConfig componentin de url yönlendirmesi yaptık ve App içerisin de RouterConfig componentini çağırdık ama çalışmadı çünkü projenin çalıştığı component yani main'de BrowserRouter'i ekledik.
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}
