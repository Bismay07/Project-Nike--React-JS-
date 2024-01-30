import React from 'react'

const ServicesCard = ({ imgURL, label, subtext }) => {
    return (
        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-3xl rounded-[20px] px-10 py-16'>
            <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
                <img src={imgURL} alt={label} width={24} height={24}/>
            </div>
            <h3 className='font-palanguin text-3xl font-bold mt-8 leading-normal'>{label}</h3>
            <p className='font-montserrat text-lg text-slate-gray mt-4 leading-normal break-words'>{subtext}</p>
        </div>
    )
}

export default ServicesCard
