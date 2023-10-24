import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeSectionCard = ({product}) => {

  const navigate  = useNavigate();

  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[17rem] mx-3 -hover:transform-.4s'>
        
        <div className='h-[16rem] w-[14rem]'>
        <img className='object-cover cbject-top w-full h-full' src={product.imageUrl}/>
    </div>
    <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'></h3>
        {product.brand}
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
    </div>
    </div>
  )
}

export default HomeSectionCard
