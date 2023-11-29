
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Detail from './components/Detail'

import BasketPage from './components/BasketPage'
import { useContext } from 'react'
import { BasketContext } from './context/BasketContext'

const App = () => {

  const { basket } = useContext(BasketContext)

  const total= basket.reduce((total,i)=> total + i.amount ,0)


  return (
    
  <BrowserRouter>
  <div style={{display:"flex", justifyContent:"space-between", padding:"10px 120px"}}>
    <Link className='btn btn-primary' to={"/"}>HOME</Link>

    <Link className='btn btn-dark'  to={"/products"}>PRODUCTS</Link>
    <Link className='btn btn-danger' to={"/basket"}> BASKET
    <span className='badge bg-warning ms-2 p-2'>{total}</span>
    </Link>
  </div>
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>  
    <Route path='/basket' element={<BasketPage/>}/> 

    <Route path='/products/:id' element={<Detail/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App