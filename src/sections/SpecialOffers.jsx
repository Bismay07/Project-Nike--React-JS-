import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap max-container items-center gap-10 max-xl:flex-col-reverse'>
      <div className='flex-1'>
        <img src={offer} alt="Offers" height={687} width={773} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h1 className="font-mosterrat text-4xl lg:max-w-lg font-bold capitalize">
          <span className="text-coral-red">Special </span>
          offer
        </h1>
        <p className=" mt-4 info-text"> Embark on a shopping journey redefines your Experience with unbeatable Deals from Premier selection to increadible savings, we offer unparalleled value that sets us apart.</p>
        <p className="  mt-6 info-text"> Navigate of possibilities designed to fulfil your unique desires, surpassing the softest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button lable="Show Now" iconURL={arrowRight}/>
          <Button lable="Learn more" backgroundColor="bg-white" textColor="text-slate-gray" borderColor="border-slate-gray"/>
        </div>
      </div>
      
    </section>
  )
}

export default SpecialOffers
