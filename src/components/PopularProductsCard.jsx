import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full items-center hover:shadow-lg rounded-2xl pb-6'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px] '/>
      <div className='flex mt-8 justify-start gap-2.5'>
        <img src={star} alt="rating" className='w-[24] h-[24]'/>
        <p className='font-montserrat text-xl text-slate-gray leadiing-normal'>(4.5)</p>
      </div>
        <h3 className='font-palanguin text-2xl leading-normal font-semibold mt-4'>{name}</h3>
        <p className='mt-2 font-montserrat text-xl text-coral-red'>{price}</p>
    </div>
  )
}

export default PopularProductsCard
