import React from 'react'
import ServicesCard from '../components/ServicesCard'
import { truckFast, shieldTick, support  } from '../assets/icons'
import { services } from '../constants'

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services
