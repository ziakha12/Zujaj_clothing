"use client"
import Image from 'next/image'
import React from 'react'
import Logo from '@/public/logo.png'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

export default function page() {

    const router = useRouter()


   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const res : any = await fetch("/api/users/login", {
    method: "POST",
    body: formData,
  });
  toast.success('login successfully')
  const data = await res.json();


  if(res.ok) router.push('/admin/dashboard')

  console.log(data);
};



    return (
        <div className='flex items-center justify-center h-screen w-full bg-[#F4F4F5]'>
            <form className='flex flex-col gap-2.5 max-w-96 w-full border border-gray-700 rounded-md p-4' onSubmit={handleSubmit}>
                <Image src={Logo} alt='sorry' width={120} className='text-center flex justify-center mx-auto' />
                <div className='flex flex-col gap-2'>
                    <label className='text-gray-900 text-[16px] font-semibold'>Email</label>
                    <input type='text' name='email' placeholder='Enter your Email' className='outline-none border border-gray-700 rounded py-2 px-4 text-[16px] placeholder:text-[16px] text-gray-800 placeholder:text-gray-800' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-gray-900 text-[16px] font-semibold'>Password</label>
                    <input type='password' name='password' placeholder='Enter your Password' className='outline-none border border-gray-700 rounded py-2 px-4 text-[16px] placeholder:text-[16px] text-gray-800 placeholder:text-gray-800' />
                </div>
                <button type='submit' className='text-white bg-[#1E2832] px-4 py-2 text-[16px] font-sans cursor-pointer hover:scale-[0.9] transition-all'>
                    Login
                </button>
            </form>
        </div>
    )
}
