import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarosuel } from '../../Images/Carousel';



const items = homeCarosuel.map((item)=><img className='cursor-pointer' role='presentation' src={item.image}/>)

const MainCarousel = () => (
    <AliceCarousel
       disableButtonsControls
       autoPlay
       autoPlayInterval={1000}
       infinite
        items={items}
        disableDotsControls
       
    />
);

export default MainCarousel;