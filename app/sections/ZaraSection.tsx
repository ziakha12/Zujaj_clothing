import React from 'react'
import logo from '@/public/logo.png'
import zara from '@/public/zara-pic.png'
import { url } from 'inspector'
import Image from 'next/image'

export default function ZaraSection() {
    return (
        <section className='bg-black flex justify-center h-[700px] overflow-hidden lg:px-0 px-4 lg:my-[80px] my-7'>
            <div className=" flex items-center justify-between gap-10">
                <div className='lg:w-1/2 w-full'>
                 <Image src={zara} alt='sorry' className='h-[1200px] w-[1200px]'/>
                </div>
                <div className='lg:w-1/2 w-full flex justify-center  flex-col gap-10'>
                    <Image src={logo} alt='logo' className='h-[100px]'/>
                    <p className='text-white font-sans text-3xl w-[65%] font-light leading-12' >Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.</p>
                        <button className='bg-white text-black text-xl font-sans font-medium px-5 py-3 w-fit hover:scale-[0.9] transition-all cursor-pointer'><i className="ri-shopping-cart-2-fill"></i> See Collections</button>
                </div>
            </div>
        </section>
    )
}
