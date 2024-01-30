import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"
import { useState } from "react"


const Hero = () => {

  const [currentShoe, setCurrentShoe] = useState(bigShoe1);


  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="mt-10 font-palanquin text-coral-red text-xl ">Our Summer Collections</p>
        <h1 className="mt-10 font-palanguin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10" >The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike </span>
          Shoes
        </h1>
        <p className=" text-slate-gray text-lg pt-5 pb-6">Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
        <Button lable="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">

          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className=" text-[48px] font-montserrat font-bold">{stat.value}</p>
              <p className=" text-[17px] font-palanquin text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={currentShoe} alt="Shoe Collection" width={900} height={500} className="object-contain z-10 px-[30px]" />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[6%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage={setCurrentShoe}
              currentShoe={currentShoe}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
