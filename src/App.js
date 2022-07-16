import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import data from "./data/data";
import Navbar from "./components/js/Navbar";
import Footer from "./components/js/Footer";
import Home from "./pages/js/Home";
import Laptops from "./pages/js/Laptops";
import Smartphones from "./pages/js/Smartphones";
import Cameras from "./pages/js/Cameras";
import Cart from "./pages/js/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item){
    let isNew = true;
    cart.forEach(elem =>{
      if(elem.id === item.id){
        isNew = false;
      }
    });

    if(isNew){
      setCart([...cart,item]);
    }
  }

  function removeFromCart(item){
    const cartUpdated = cart.filter(elem =>{
      return elem.id !== item.id
    });
    console.log(cartUpdated);
    setCart(cartUpdated);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path="/electronite" element={<Home addToCart={addToCart} data={data}/>}></Route>
            <Route path="/laptops" element={<Laptops addToCart={addToCart} data={data}/>}></Route>
            <Route path="/smartphones" element={<Smartphones addToCart={addToCart} data={data}/>}></Route>
            <Route path="/cameras" element={<Cameras addToCart={addToCart} data={data}/>}></Route>
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
