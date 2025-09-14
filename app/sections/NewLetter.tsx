import Image from 'next/image'
import React from 'react'
import image from '@/public/card.png'

export default function NewLetter() {
    return (
        <div className='flex flex-col gap-8 max-w-[1320px] w-full mx-auto lg:px-0 px-4 lg:my-[80px] my-7'>
            <h3 className='font-sans lg:text-5xl text-3xl text-black text-center font-bold'>Follow products and discounts on Instagram</h3>
            <div className='flex gap-4 items-center flex-wrap'>
                <Image src={image} alt='card' />
                <Image src={image} alt='card' />
                <Image src={image} alt='card' />
                <Image src={image} alt='card' />
                <Image src={image} alt='card' />
                <Image src={image} alt='card' />
            </div>
            <h3 className='font-sans lg:text-5xl text-3xl text-black text-center font-bold mt-4'>Or subscribe to the newsletter</h3>
            <div className='flex gap-3.5 justify-center '>
                <input className='p-2.5 border-b-2 border-black text-[16px] text-[#1e28328b] max-w-xl w-full font-semibold font-sans placeholder:text-[#1e28328b] placeholder:font-semibold outline-none '  placeholder='Email address...'/>
                <button className='p-2.5 border-b-2 border-black text-[#1e28328b] font-semibold font-sans hover:border-2 hover:border-black transition-all cursor-pointer '>Submit</button>
            </div>

        </div>
    )
}
