import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex flex-1 justify-center items-center flex-col'>
      <img src={imgURL} alt={customerName} className='object-cover rounded-full h-[120px] w-[120px]'/>
      <p className='font-monsterrat mt-6 justify-center items-center max-w-lg text-center text-slate-gray'>{feedback}</p>
      <div className='flex flex-1 gap-2 justify-center items-center mt-3'>
        <img src={star} alt="star" />
        <p className='font-montserrat text-xl text-slate-gray'>{rating}</p>
      </div>
      <h1 className='font-palanguin mt-3 text-3xl font-bold'>{customerName}</h1>

    </div>
  )
}

export default ReviewCard
