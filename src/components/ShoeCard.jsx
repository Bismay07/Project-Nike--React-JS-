import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, currentShoe }) => {
console.log("🚀 ~ ShoeCard ~ currentShoe:", currentShoe);
console.log("🚀 ~ ShoeCard ~ changeBigShoeImage:", changeBigShoeImage);
console.log("🚀 ~ ShoeCard ~ imgURL:", imgURL);

  const clickedImage = imgURL.bigShoe;

  const handleClick = () => {
    if (currentShoe !== clickedImage) {
      changeBigShoeImage(clickedImage)
    }
  }
  
  return (
    <div className={
      `border-2 rounded-xl
    ${currentShoe === clickedImage ? 'border-coral-red' : 'border-transparent'}
    cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick} >
      <div className='flex justify-center items-center rounded-xl bg-card bg-cover bg-center sm:w-40 sm:h-40 max-sm:p-4'>
        <img src={imgURL.thumbnail} width={200} height={200}  
        className='object-contain'/>

      </div>
    </div>
  )
}

export default ShoeCard
