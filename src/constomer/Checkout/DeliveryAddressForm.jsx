import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

const DeliveryAddressForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phoneNumber")
        }
        const orderData = {address, navigate};
        console.log("orderData", orderData);
       dispatch(createOrder(orderData))
        console.log("address",address);
    }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
            <div className='p-5 py-5 border-b cursor-pointer text-left'>
                <AddressCard/>
                <Button variant='contained' className='bg-gradient-to-r from-blue-300 to-blue-800' sx={{px:"2rem", py:"0.7rem",mt:"2"}}>Deliver Here</Button>
            </div>
        </Grid>

        <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="firstName" name='firstName' label='First Name' fullWidth autoComplete='given-name'/>
                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="lastName" name='lastName' label='Last Name' fullWidth autoComplete='given-name'/>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required id="address" name='address' label='Address' fullWidth multiline rows={4} autoComplete='given-name'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="city" name='city' label='City' fullWidth autoComplete='given-name'/>
                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="state" name='state' label='States/Province/Region' fullWidth autoComplete='given-name'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="zip" name='zip' label='Zip / Postal Code' fullWidth autoComplete='shipping postal-code'/> 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="phoneNumber" name='phoneNumber' label='Phone Number' fullWidth autoComplete='given-name'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Button type='submit' variant='contained' className='w-full bg-gradient-to-r from-blue-300 to-blue-800' sx={{px:"1.5rem", py:"0.7rem",mt:"2"}}>Deliver Here</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm
