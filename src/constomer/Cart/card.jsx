import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../State/Cart/Action'

const Cart1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart} = useSelector(store=>store);

  const handleCheckOut=()=>{
    navigate("/checkout?step=2")
  }

  useEffect(()=>{
    dispatch(getCart());
  },[cart.updateCartItem,cart.deleteCartItem])

  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div  className='col-span-2'>
          {cart.cart?.cartitems.map((item)=><CartItem item={item}/>)}
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border rounded-md shadow-md text-left p-4'>
          <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
          <hr/>
          <div className='space-y-3 font-semibold mb-8'>
            <div className='flex justify-between pt-3 text-black'>
              <span>Price</span><span>{cart.cart?.totalPrice}</span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
              <span>Discount</span><span className='text-green-500'>{cart.cart?.discount}</span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
              <span>Dilevary Charge</span><span className='text-green-500'>Free</span>
            </div>
            <hr/>
            <div className='flex justify-between pt-3 text-black'>
              <span className='font-bold'>Total Amount</span><span className='text-green-500'>{cart.cart?.totalDiscountedPrice}</span>
            </div>
          </div>
          <Button onClick={handleCheckOut} variant='contained' className='w-full bg-gradient-to-r from-blue-300 to-blue-800' sx={{px:"2rem", py:"0.7rem"}}>Checkout</Button>
          </div>

      </div>
      </div>
      
      
    </div>
  )
}

export default Cart1
