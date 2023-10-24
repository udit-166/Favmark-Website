import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from './HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import 'react-alice-carousel/lib/alice-carousel.css';
import { kurtaPage1, mens_kurta } from '../../Mens/kurta/kurta';
import img1 from "./decoration.png";

const HomeSection = ({data , sectionName}) => {
    const [activeIndex,setActiveIndex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: {
            items: 4
        }
    };
    const slidePrev = () => setActiveIndex(activeIndex-1);
    const slideNext = () => setActiveIndex(activeIndex+1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);

    return (
        
        <div className='relative px-4 lg:px-8'>
        <div className='inline-block'>
       <img src={img1} className='w-60 inline'/><span className='text-4xl font-semibold text-gray-800 py-5 ps-1 pe-1 text-center'>{sectionName}</span><img className='w-60 inline' src={img1}/></div>
            <div className='relative p-5 border'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    
                    responsive={responsive}
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                { activeIndex !== items.length-5 && <Button onClick={slideNext} variant='contained' className="z-50 bg-white" sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translatex(50%) rotate(90deg)", bgcolor: "white" }} aria-lable="next">
                <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} /></Button>}
                { activeIndex !== 0 && <Button onClick={slidePrev} variant='contained' className="z-50 bg-white" sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translatex(-50%) rotate(90deg)", bgcolor: "white" }} aria-lable="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} /></Button>}
            </div>
        </div>
    )
}

export default HomeSection
