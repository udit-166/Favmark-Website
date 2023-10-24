import React from 'react'
import MainCarousel from '../constomer/HomeSection/MainCarousel'
import HomeSection from '../constomer/HomeSection/HomeSection';
import { mens_kurta } from '../Mens/kurta/kurta';
import { mens_shirts } from '../Mens/shirt/shirts';
import { mensShoesPage1 } from '../Mens/shoes/mens_shoes';
import { women_dress } from '../Womens/dress/dress';
import { saree } from '../Womens/saree/saree';
import { dressPage1 } from '../Womens/dress/dresss';
import { gounsPage1 } from '../Womens/gouns/gouns';

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSection data ={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSection data ={mens_shirts} sectionName={"Men's Shirts"}/>
        <HomeSection data ={mensShoesPage1} sectionName={"Men's Shoes"}/>
        <HomeSection data ={gounsPage1} sectionName={"Womens Trading Dresses"}/>
        <HomeSection data ={saree} sectionName={"women_saree"}/>
      </div>
    </div>
  )
}

export default HomePage;
