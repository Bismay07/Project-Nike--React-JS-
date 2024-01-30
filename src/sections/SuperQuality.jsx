import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex flex-1 items-center max-container'>
      <div className='flex flex-1 flex-col'>
        <h1 className="font-mosterrat text-4xl lg:max-w-lg font-bold capitalize">We provide you
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span>
          Shoes
        </h1>
        <p className=" mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously Crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and touch of elegance.</p>
        <p className="  mt-6 lg:max-w-lg info-text"> Our dedication to detail and excellence, ensures your satisfaction</p>
        <div className='mt-11'>
          <Button lable="Show Details" />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="SuperQuality" className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality
