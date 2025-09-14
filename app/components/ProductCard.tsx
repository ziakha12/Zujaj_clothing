import Image from 'next/image'
import React from 'react'
import productImage from '@/public/top-product.png'

export default function ProductCard() {
  return (
    <div className='flex flex-col gap-2'>
      <Image src={productImage} alt='top-product'/>
      <h6 className='text-[16px] font-sans font-semibold text-[black] px-4'>Adicolor Classics Joggers</h6>
      <div className='flex justify-between items-center px-4'>
        <span className='text-[#808080]'>Dress</span>
        <span className='text-black text-[16px] font-semibold font-sans'>$63.85</span>
      </div>
    </div>
  )
}
