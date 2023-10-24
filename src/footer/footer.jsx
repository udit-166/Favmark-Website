import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from "../image/logo-png.png"

const Footer = () => {
  return (
    <div>
      <Grid className=' bg-gradient-to-r from-blue-300 to-blue-800 text-white mt-10'
      container sx={{bgcolor:"black", color:"white", py:3}}
      >
         <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5 ps-3' ><img src={logo} className='w-80'/></Typography>
            <div>
            <Button className='pb-5' variant='p' gutterButton>Men's Cloths</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>Women's Cloths</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>Stores</Button>
            </div>
            <div className='pt-7'>
            <a href="#"><i class="fa-brands fa-facebook-f text-blue-800 text-3xl font-semibold ms-3 me-5" ></i></a>
            <a href="#"><i class="fa-brands fa-whatsapp text-blue-800 text-3xl font-semibold ms-3 me-5"></i></a>
            <a href="#"><i class="fa-brands fa-instagram text-blue-800 text-3xl font-semibold ms-3 me-5"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter text-blue-800 text-3xl font-semibold ms-3 me-5"></i></a>
            
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6' >Company</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>About</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>Blog</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>jobs</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>Press</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>Partners</Button>
            </div>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Documentation</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>Guides</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>API Status</Button>
            </div>
           
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Legal</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>Claim</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>Privacy</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButton>Terms</Button>
            </div>
            
        </Grid>
        <Grid className='pt-20' item xs={12}>
            <Typography variant='body2' component={"p"} align='center'>
                &copy; 2023 FavMark Cloths Company
            </Typography>
            <Typography variant='body2' component={"p"} align='center'>
                Owner Name Is Udit Shahi
            </Typography>
            
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
