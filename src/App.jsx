import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import ItemCount from './components/Contador/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner titulo={"Bienvenidos a BytePoint"} />} />
          <Route path="/category/:idCategory" element={<ItemListConteiner/>} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 