
'use client'

import React, { useState } from 'react'

export default function DashboardPage() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('Overview')

  const stats = [
    { label: 'Revenue', value: '$24,580', change: '+8.2%' },
    { label: 'Orders', value: '1,312', change: '+3.6%' },
    { label: 'Customers', value: '4,210', change: '+1.1%' },
    { label: 'Products', value: '198', change: '-0.4%' },
  ]

  const products = [
    { id: 1, title: 'Wireless Headphones', price: '$79', stock: 120, status: 'active' },
    { id: 2, title: 'Running Shoes', price: '$99', stock: 45, status: 'low' },
    { id: 3, title: 'Smart Watch', price: '$149', stock: 0, status: 'out' },
    { id: 4, title: 'Sunglasses', price: '$29', stock: 210, status: 'active' },
  ]

  const filtered = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))

  return (

        <main className="flex-1 p-6">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">{active}</h2>
              <p className="text-sm text-gray-500">Welcome back — here’s what’s happening with your store today.</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="border border-gray-200 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">New Product</button>
            </div>
          </div>

          {/* Stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map(s => (
              <div key={s.label} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500">{s.label}</div>
                <div className="mt-2 flex items-baseline justify-between">
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className={`text-sm ${s.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{s.change}</div>
                </div>
                <div className="mt-3 text-xs text-gray-400">Compared to last 30 days</div>
              </div>
            ))}
          </section>

          {/* Main content split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Orders / Activity */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Recent Orders</h3>
                  <div className="text-sm text-gray-500">Showing 1–5</div>
                </div>

                <table className="w-full text-left text-sm">
                  <thead className="text-xs text-gray-500 border-b">
                    <tr>
                      <th className="py-2">Order</th>
                      <th className="py-2">Customer</th>
                      <th className="py-2">Total</th>
                      <th className="py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 font-medium">#1024</td>
                      <td className="py-3">Ayesha Khan</td>
                      <td className="py-3">$129.00</td>
                      <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Paid</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">#1023</td>
                      <td className="py-3">Ali Raza</td>
                      <td className="py-3">$59.00</td>
                      <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">#1022</td>
                      <td className="py-3">Sara</td>
                      <td className="py-3">$249.00</td>
                      <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Refunded</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
                <h3 className="font-medium mb-2">Top Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.map(p => (
                    <div key={p.id} className="p-3 border rounded-md flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-sm">Img</div>
                      <div className="flex-1">
                        <div className="font-medium">{p.title}</div>
                        <div className="text-xs text-gray-500">{p.price} • {p.stock} in stock</div>
                      </div>
                      <div className="text-sm">
                        <button className="text-xs px-3 py-1 rounded-md border">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Analytics & Products table */}
            <aside className="space-y-6">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h4 className="font-medium mb-3">Visitors (last 7d)</h4>
                {/* Simple sparkline made with SVG */}
                <div className="w-full h-28">
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                    <polyline fill="none" stroke="#6366f1" strokeWidth="1.5" points="0,20 10,15 20,10 30,12 40,8 50,6 60,8 70,5 80,12 90,9 100,7" />
                  </svg>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm overflow-auto">
                <h4 className="font-medium mb-3">Products</h4>
                <table className="w-full text-left text-sm">
                  <thead className="text-xs text-gray-500 border-b">
                    <tr>
                      <th className="py-2">Product</th>
                      <th className="py-2">Price</th>
                      <th className="py-2">Stock</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filtered.map(p => (
                      <tr key={p.id}>
                        <td className="py-2">{p.title}</td>
                        <td className="py-2">{p.price}</td>
                        <td className="py-2">{p.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filtered.length === 0 && <div className="text-xs text-gray-400 mt-3">No products match your search.</div>}
              </div>
            </aside>
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center text-xs text-gray-400">© {new Date().getFullYear()} ShopAdmin — Built with Next.js + Tailwind</footer>
        </main>
  )
}
