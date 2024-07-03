/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/menu.png"
              className="w-6 h-6"
            />
          </button>
          <Link href="/" className="p-2">
            <h1 className="text-2xl font-bold">FullSnack</h1>
          </Link>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-200 px-3 py-1 rounded-full">
            Delivery
          </button>
          <button className="px-3 py-1 rounded-full">Pickup</button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/marker.png"
              className="w-5 h-5"
            />
            <span>1000 Atlantic Ave</span>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/clock.png"
              className="w-5 h-5"
            />
            <span>Now</span>
          </div>
          <button className="p-2">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
              className="w-6 h-6"
            />
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="relative">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"
              className="w-6 h-6"
            />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </button>
          <button className="px-3 py-1">Log in</button>
          <button className="bg-black text-white px-3 py-1 rounded-full">
            Sign up
          </button>
        </div>
      </div>
    </header>
  )
}
