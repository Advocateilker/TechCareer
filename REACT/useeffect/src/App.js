
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Detail from './components/Detail'
import Post from './components/Post'

const App = () => {


  return (
    
  <BrowserRouter>
  <div style={{display:"flex", justifyContent:"space-between", padding:"10px 120px"}}>
    <Link className='btn btn-primary' to={"/"}>HOME</Link>
    <Link className='btn btn-secondary'  to={"/posts"}>POSTS</Link>
    <Link className='btn btn-dark'  to={"/products"}>PRODUCTS</Link>
  </div>
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>  
    <Route path='/posts' element={<Post/>}/> 
    <Route path='/products/:id' element={<Detail/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App