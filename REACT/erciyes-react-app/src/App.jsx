
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Detail from './pages/Detail'

const App = () => {


  return (
    
  <BrowserRouter>
  <div style={{display:"flex", justifyContent:"space-between", padding:"10px 120px"}}>
    <Link to={"/"}>HOME</Link>
    <Link to={"/products"}>PRODUCTS</Link>
  </div>
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>  
    <Route path='/products/:id' element={<Detail/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App