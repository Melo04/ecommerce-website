import './App.css';
import React, {useState, useEffect} from 'react';
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
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg">
        <HashLoader
            color={"#BFFFBF"}
            loading={loading}
            size={100}
          />
        <HashLoader
            color={"#BFFFBF"}
            loading={loading}
            size={100}
          />
        <HashLoader
            color={"#BFFFBF"}
            loading={loading}
            size={100}
          />
        </div>
      )
    : 
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
    }
    </>
  );
}

export default App;
