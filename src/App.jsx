
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Product from './components/Product'
import Detail from './components/Detail'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Checkout from './components/Checkout'


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path="/product" element={<Product/>} />
       <Route path='/detail/:id' element={<Detail/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path="/checkout" element={<Checkout />} />
     </Routes>
     <Footer/>
   </BrowserRouter>
  )
}

export default App
