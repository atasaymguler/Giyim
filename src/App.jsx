import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <PageContainer>
        <Header />
        <ProductList />
      </PageContainer>
    </>
  )
}

export default App
