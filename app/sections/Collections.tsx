import Image from 'next/image'
import React from 'react'
import collection1 from '@/public/collection-1.png'
import collection2 from '@/public/collection-2.png'

export default function Collections() {
    return (
        <div className='max-w-[1320px] w-full mx-auto lg:px-0 px-4 lg:my-[80px] my-7 relative'>
            <div className='flex lg:flex-row flex-col items-center gap-2'>
                <div className='flex lg:flex-row flex-col items-center lg:w-1/2 w-full h-fit'>
                    <Image src={collection1} alt='collection1' className=' shadow rounded-md' />
                </div>
                <div className='flex lg:w-1/2 w-full   flex-col items-center gap-2'>
                    <div className='flex flex-row gap-2 w-full items-center'>
                        <Image src={collection2} alt='collection1' className='w-1/2 shadow rounded-md' />
                        <Image src={collection2} alt='collection1' className='w-1/2 shadow rounded-md' />
                    </div>
                    <div className='flex flex-row gap-2 w-full items-center'>
                        <Image src={collection2} alt='collection1' className='w-1/2 shadow rounded-md' />
                        <Image src={collection2} alt='collection1' className='w-1/2 shadow rounded-md' />
                    </div>
                </div>
            </div>
            <div className='lg:block hidden absolute -rotate-90 -left-[22%] top-[50%] text-4xl font-regular text-black'>
                Explore new and popular styles
            </div>
        </div>
    )
}
