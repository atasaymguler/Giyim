import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RouterConfig from './config/routerConfig'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux'
import Drawer from '@mui/material/Drawer';
import { calcalute, decrement, increment, setDrawer } from './redux/slice/basketSlice'
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";

function App() {

  let { loading } = useSelector(store => store.products)
  let { drawer, products, totalAmount } = useSelector(store => store.basket)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(calcalute())
  }, [])

  return (
    <>
      <PageContainer>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Header />
        <Drawer
          anchor={"right"}
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {
            products && products.map(product => (
              <div key={product.id} className='flex items-center justify-between gap-3 !p-2'>
                <img className='w-[50px] h-[50px] object-scale-down' src={product.image} />
                <p className='short w-[200px]'>{product.title}  </p>
                <div className='w-[100px] flex items-center gap-1'>
                  <FaRegPlusSquare onClick={() => dispatch(increment(product.id))} className='hover:cursor-pointer' />
                  <p >({product.count})</p>
                  <FaRegMinusSquare onClick={() => dispatch(decrement(product.id))}  className='hover:cursor-pointer' />
                </div>
                <p className='w-[40px]'> {product.price} </p>
                <button> Sil </button>
              </div>
            ))

          }
          <h2 className='!mt-4 text-right !mr-4'> Toplam Tutar : {totalAmount.toFixed(2)} </h2>
        </Drawer>
        < RouterConfig />
      </PageContainer>
    </>
  )
}

export default App
