import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

export default function Hero() {
  return (
    <div className='bg-[#F4F4F5] pt-[30px] pb-[60px] w-full mx-auto'>
      <Navbar/>
      <Banner/>
    </div>
  )
}
