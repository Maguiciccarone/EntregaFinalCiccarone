import { Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CheckOut from './components/CheckOut/CheckOut';

const App = () => {

  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='checkout' element={<CheckOut />} />
      </Routes>
    </CartProvider>

  )

}

export default App
