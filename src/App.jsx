import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RouterConfig from './config/routerConfig'

function App() {

  return (
    <>
      <PageContainer>
        <Header />
        < RouterConfig />
      </PageContainer>
    </>
  )
}

export default App
