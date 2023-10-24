import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../Page/HomePage'
import Cart1 from '../Cart/card'
import Navigation from '../HomeSection/Navigation'
import Footer from '../../footer/footer'
import Product from '../Product/product'
import ProductDetails from '../ProductDetails/ProductDetails'
import Checkout from '../Checkout/Checkout'
import Order from '../order/order'
import OrderDetails from '../order/OrderDetails'
import PaymentSuccess from '../Payment/PaymentSuccess'

const CustomerRouter = () => {
  return (
    <div>
      <div>
      <Navigation/>
      </div>
      <Routes>
      <Route path='/login' element={<HomePage/>}></Route>
      <Route path='/register' element={<HomePage/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart1/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
        <Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route>


      {/* <Order/> */}
      {/* <OrderDetails/> */}
      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouter
