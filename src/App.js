import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Collab from './pages/Collab';
import Cart from './pages/Cart';
import { ShopContextProvider } from './components/Colab/Menu/shop-context';
import SingleItem from './components/Colab/Menu/SingleItem';

function App() {
  return (
    <>
    <ShopContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/products" element={<Products/>} exact/>
          <Route path="/collaboration" element={<Collab/>} exact/>
          <Route path="/products/:productId" element={<SingleItem/>} exact/>
          <Route path="/contact" element={<Contact/>} exact/>
          <Route path="/signin" element={<Signin/>} exact/>
          <Route path="/cart" element={<Cart/>} exact/>
          </Routes>
      </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;
