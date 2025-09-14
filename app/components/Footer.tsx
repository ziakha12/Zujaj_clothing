import Image from 'next/image'
import React from 'react'
import cards  from '@/public/cards.png'

export default function Footer() {
  return (
    <section className='w-full bg-[#1E2832] p-3.5'> 
      <div className='flex justify-between items-center lg:max-w-[1320px] w-full mx-auto text-white'>
        <span>© 2025 Zujaj Clothing.</span>
        <Image src={cards} alt='cards'/>
        <div className='flex gap-3 items-center'>
            <i className="ri-facebook-fill text-xl"></i>
            <i className="ri-instagram-fill text-xl"></i>
            <i className="ri-twitter-fill text-xl"></i>
        </div>
      </div>

    </section>
  )
}
