import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />}/>  
      </Routes>
    </>
  )

}

export default App
