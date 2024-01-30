import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section id="contact-us" className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
      <h3 className=' text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign Up for <span className='text-coral-red'>Updates </span> & Neswletter</h3>

      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" className='input' placeholder='subscribe@nike.com' />
        <div className='flex items-center max-sm:justify-end max-sm:w-full'>
          <Button lable="Sign Up" fullwidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
