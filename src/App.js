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
          <Route path="/ecommerce-website" element={<Home/>} exact/>
          <Route path="/ecommerce-website/about" element={<About/>} exact/>
          <Route path="/ecommerce-website/products" element={<Products/>} exact/>
          <Route path="/ecommerce-website/collaboration" element={<Collab/>} exact/>
          <Route path="/ecommerce-website/products/:productId" element={<SingleItem/>} exact/>
          <Route path="/ecommerce-website/contact" element={<Contact/>} exact/>
          <Route path="/ecommerce-website/signin" element={<Signin/>} exact/>
          <Route path="/ecommerce-website/cart" element={<Cart/>} exact/>
          </Routes>
      </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;
