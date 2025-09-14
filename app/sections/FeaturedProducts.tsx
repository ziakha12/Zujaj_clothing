"use client"
import React from 'react'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'

export default function FeaturedProducts() {
    
    

  return (
    <section className='flex flex-col gap-8 max-w-[1320px] w-full mx-auto lg:px-0 px-4 lg:my-[80px] my-7'>
       <h3 className='font-sans lg:text-5xl text-3xl text-black text-center font-bold'>Or subscribe to the newsletter</h3>
       <div className='flex justify-between items-center'>
        <div className='flex gap-9 items-center'>
            <Link href={{
                query : {product : 'allproducts'}   
            }} className='text-[#808080] font-sans text-[16px] font-normal'>All products</Link>
            <Link href={'/'}  className='text-[#808080] font-sans text-[16px] font-normal'>T-shirt</Link>
            <Link  href={'/'} className='text-[#808080] font-sans text-[16px] font-normal'>Hoodies</Link>
            <Link  href={'/'} className='text-[#808080] font-sans text-[16px] font-normal'>Jackets</Link>
        </div>
        <button className='text-white bg-[#1E2832] px-4 py-2 text-[16px] font-sans cursor-pointer hover:scale-[0.9] transition-all'>
            <i className="ri-filter-2-line"></i> Filter
        </button>
       </div>
       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-3.5 space-y-5.5'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
       </div>
    </section>
  )
}
