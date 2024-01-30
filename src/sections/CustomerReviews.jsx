import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className=''>
      <h3 className='text-center text-4xl font-palanguin font-bold'>What our <span className='text-coral-red'>Customers  </span>say?</h3>
      <p className='m-auto my-6 flex justify-center items-center font-monsterrat text-slate-gray text-center max-w-lg'>Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
