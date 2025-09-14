
import Image from 'next/image'
import React from 'react'
import BannerImage from '@/public/banner-img.png'
import flowers from '@/public/flowes.png'

export default function Banner() {
  return (
    <div className='relative z-1'>
    <div className='max-w-[1320px] w-full flex flex-col lg:flex-row mt-[61px] items-center mx-auto px-4 '>
      <div className='lg:w-1/2 w-full flex flex-col gap-6 lg:gap-[30px] text-center lg:text-left'>
        <h2 className='text-3xl lg:text-[70px] font-light text-black'>
          Collections
        </h2>
        <p className='font-light capitalize text-lg lg:text-[30px] leading-relaxed text-black'>
          you can explore and shop many different collections
          from various brands here.
        </p>
        <button className='bg-[#1E2832] py-3 lg:py-4 flex gap-2 items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0 px-6 text-white rounded-md font-normal text-base lg:text-[25px] cursor-pointer transition-all hover:border hover:border-[#1E2832] hover:bg-transparent hover:text-[#1E2832]'>
          <i className="ri-shopping-bag-fill"></i>
          <span>Shop Now</span>
        </button>
      </div>
      <div className='lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end'>
        <Image src={BannerImage} alt='banner' className='max-w-full h-auto' />
      </div>

     
    </div>
     <div className='absolute z-0 bottom-30 w-full'>
        <Image src={flowers} alt='flowers' className='w-full'/>
      </div>
    </div>
  )
}

