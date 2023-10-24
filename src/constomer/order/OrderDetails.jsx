import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Ordertracker from './Ordertracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='text-left lg:px-20 px-5'>
        <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
      <AddressCard/>
      </div>
      <div className='py-20'>
      <Ordertracker activeStep={3}/>
      </div>
      <Grid className='space-y-5 container'>
        {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>
            <Grid  item xs={6}>
                <div className='flex items-center space-x-4'>
                    <img className=" w-[5rem] h-[5rem] object-cover object-top" src='https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/j/x/v/-original-imaghrnsfvbhrsny.jpeg?q=70'/>
                    <div className='space-y-2 ml-5'>
                        <p>Men Regular Fit Checkered Spread Collar Formal Shirt</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color: White</span> <span>Size: M</span></p>
                        <p>Seller: PETER ENGLAND</p>
                        <p>1599</p>
                    </div>
                </div>
            </Grid>
            <Grid item>
                <Box sx={{color:"deepBlue[500]"}}>
                    <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2' />
                    <span>Rate & Review Product</span>
                </Box>
            </Grid>
        </Grid>)}
        
      </Grid>
    </div>
    
  )
}

export default OrderDetails
