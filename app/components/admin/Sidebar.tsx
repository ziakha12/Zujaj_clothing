"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Sidebar() {
      
      const navItems = [
        {
            name : 'Dashboard',
            path : '/admin/dashboard'
        },
        {
            name : 'Products',
            path : '/admin/dashboard/products'
        },
        {
            name : 'Categories',
            path : '/admin/dashboard/category'
        },
        {
            name : 'Orders',
            path : '/admin/dashboard/orders'
        },
      ]
    
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0">
          <div className="p-6">
            <h1 className="text-2xl font-bold">Zujaj</h1>
            <p className="text-sm text-gray-500 mt-1">E‑commerce dashboard</p>
          </div>

          <nav className="px-4 py-2">
           { navItems.map(item  => (
              <Link
                href={item.path}
                key={item.name}
                className={`w-full text-left px-4 py-2 rounded-md mb-1 hover:bg-gray-100 flex items-center justify-between`}
              >
                <span>{item.name}</span>
                <span className="text-xs text-gray-400">›</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-4">
            <div className="text-xs text-gray-500">Logged in as</div>
            <div className="mt-2 font-medium">Admin • Zia</div>
          </div>
        </aside>
  )
}
