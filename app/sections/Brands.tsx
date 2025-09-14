import React from 'react'
import Brand1 from '@/public/brand-1.png'
import Brand2 from '@/public/brand-2.png'
import Brand3 from '@/public/brand-3.png'
import Brand4 from '@/public/brand-4.png'
import Brand5 from '@/public/brand-5.png'
import Image from 'next/image'

export default function Brands() {

    const images = [Brand1, Brand2, Brand3, Brand4, Brand5]

  return (
    <div className='flex lg:flex-row flex-wrap flex-col lg:gap-0 gap-5 justify-between items-center max-w-[1320px] w-full lg:my-[80px] my-7 mx-auto'>
       {
        images.map((image, i) => (
            <Image src={image.src} alt="brands" key={i} width={200} height={130}/>
        ))
       }
    </div>
  )
}
