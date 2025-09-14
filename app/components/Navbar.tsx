import Image from 'next/image'
import React from 'react'
import Logo from '@/public/logo.png'
export default function Navbar() {
  return (
    <div className='max-w-[1320px] w-full flex flex-col gap-[30px] mx-auto ' >
      <div className='flex w-full justify-between items-center'>
        <Image alt='logo' src={Logo} height={90} width={150}  className=''/>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1.5 cursor-pointer'>
              <i className="ri-user-fill text-[20px]"></i>
            </div>
            <div className='flex items-center gap-1.5 cursor-pointer ھہطعر'>
              <i className="ri-shopping-bag-fill text-[20px]"></i>
            </div>
        </div>
      </div>
      <div className='w-full h-[2px] bg-[#E3E3E3]'></div>
      {/* <nav className=''>
        <ul className='flex items-center justify-between list-none text-[16px] font-light'>
            <li>Clothing & Shoes</li>
            <li>Home & Living</li>
            <li>Wedding & Party</li>
            <li>Toys & Entertainment</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
      </nav> */}
    </div>
  )
}
