import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={46} />
          </a>
          <p className='mt-6 text-base text-white-400 leading-7 font-montserrat sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards. </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div key={icon.alt} className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:cursor-pointer' >
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-6'>
        {footerLinks.map((section) => (
          <div key={section}>
            <h3 className='text-white font-montserrat text-2xl font-bold'>{section.title}</h3>
            <ul key={section}>
              {section.links.map((link) => (
                <li className='hover:text-slate-gray mt-3 text-white-400 leading-normal font-montserrat hover:cursor-pointer'><a href={link.link}>{link.name}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer'>
          <img src={copyrightSign} alt="Copyrights" width={20} height={20}/> 
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & conditions.</p>
      </div>
    </footer>
  )
}

export default Footer
