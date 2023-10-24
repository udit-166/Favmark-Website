import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { store } from '../../State/store'
import { createPayment } from '../../State/Payment/Action'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {order} = useSelector(store=>store);
  const searchParamas =new URLSearchParams(location.search);
  const orderId = searchParamas.get("order_id");


  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])


  const handleCheckOut=()=>{
    dispatch(createPayment(orderId))
  }

  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard address={order.order?.shippingAddress}/>
      </div>
      <div>
      <div className='lg:grid grid-cols-3 relative'>
        <div  className='col-span-2'>
           {order.order?.orderitems.map((item)=><CartItem item={item}/>)} */
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border rounded-md shadow-md text-left p-4'>
          <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
          <hr/>
          <div className='space-y-3 font-semibold mb-8'>
            <div className='flex justify-between pt-3 text-black'>
              <span>Price</span><span>{order.order?.totalPrice}</span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
              <span>Discount</span><span className='text-green-500'>{order.order?.discount}</span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
              <span>Dilevary Charge</span><span className='text-green-500'>Free</span>
            </div>
            <hr/>
            <div className='flex justify-between pt-3 text-black'>
              <span className='font-bold'>Total Amount</span><span className='text-green-500'>{order.order?.totalDiscountedPrice}</span>
            </div>
          </div>
          <Button variant='contained' className='w-full bg-gradient-to-r from-blue-300 to-blue-800' sx={{px:"2rem", py:"0.7rem"}} onClick={handleCheckOut}>Checkout</Button>
          </div>

      </div>
      </div>
      
      
    </div>
    </div>
  )
}

export default OrderSummary
