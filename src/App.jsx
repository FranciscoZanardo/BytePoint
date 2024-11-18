import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Chechout/Checkout'
import { ToastContainer } from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark"/>
        
          <Routes>
            <Route path="/" element={<ItemListConteiner titulo={"Nuestros productos"} />} />
            <Route path="/category/:idCategory" element={<ItemListConteiner/>} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App 