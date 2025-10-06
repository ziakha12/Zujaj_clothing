import Sidebar from '@/app/components/admin/Sidebar'
import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function layout({ children }: { children: React.ReactNode }) {
  return (

    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Toaster />
      <div className="flex">
        <Sidebar />
        {children}
        {/* Main */}
      </div>
    </div>
  )
}

