import { Grid } from '@mui/material'
import React from 'react'
import OrderCart from './OrderCart'

const orderStatus=[
    {label:"On The Way" , value:"on_the_way"},
    {label:"Delivered" , value:"delivered"},
    {label:"Cancelled" , value:"cancelled"},
    {label:"Returned" , value:"returned"},
]

const Order = () => {
  return (
    <div className='text-left px-5 lg:px-15'>
      <Grid container sx={{justifyContent: "space-between"}}>
        <Grid item lg={2.5} xs={12}>
            <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                <h1 className='font-bold text-lg'>Filter</h1>
                <div className='space-y-4 mt-10'>
                    <h1 className='font-semibold'>ORDER STATUS</h1>
                    {orderStatus.map((option)=><div className='flex items-center'>
                        <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-300 text-blue-700 focus:ring-blue-700'/>
                        <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>{option.label}</label>
                    </div>)}
                </div>
            </div>
        </Grid>
        <Grid item lg={9} xs={12}>
            <div className='space-y-5'>
          {[1,1,1,1,1,1].map((item)=> <OrderCart/>)}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Order
