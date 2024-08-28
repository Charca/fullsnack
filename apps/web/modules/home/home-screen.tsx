'use client'
import { useRouter } from 'next/navigation'

export function HomeScreen() {
  const router = useRouter()

  return (
    <div className="p-4 md:p-8">
      <div className="absolute inset-0 flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/landing-bg.webp"
          alt="Food background"
          className="w-full h-full object-cover rounded-lg absolute"
        />
        <div className="text-white pl-10 w-full h-full z-10 bg-black bg-opacity-40 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Order delivery near you
          </h1>

          <div className="flex flex-col md:flex-row gap-2 max-w-4xl">
            <input
              type="text"
              placeholder="Enter delivery address"
              className="flex-grow p-3 rounded-lg text-black"
            />
            <select className="p-3 rounded-lg text-black">
              <option>Deliver now</option>
              <option>Schedule for later</option>
            </select>
            <button
              className="bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800"
              onClick={() => {
                router.push('/delivery')
              }}
            >
              Search here
            </button>
          </div>

          <p className="mt-4">
            <a href="#" className="text-white underline">
              Or Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
