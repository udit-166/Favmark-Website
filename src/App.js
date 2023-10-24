import logo from './logo.svg';
import './App.css';
import Navigation from './constomer/HomeSection/Navigation';
import MainCarousel from './constomer/HomeSection/MainCarousel';
import HomePage from './Page/HomePage';
import Footer from './footer/footer';
import Product from './constomer/Product/product';
import ProductDetails from './constomer/ProductDetails/ProductDetails';
import Cart1 from './constomer/Cart/card';
import Checkout from './constomer/Checkout/Checkout';
import Order from './constomer/order/order';
import OrderDetails from './constomer/order/OrderDetails';
import { Route, Router, Routes } from 'react-router-dom';
import CustomerRouter from './constomer/Router/CustomerRouter';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<CustomerRouter/>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
