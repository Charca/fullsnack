import Image from 'next/image'
import { Button } from '@repo/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold pb-4">This is the home screen</h1>
      <p className="text-xl">
        Go to{' '}
        <Link href="/delivery" className="text-blue-500 underline">
          Delivery
        </Link>
      </p>
    </div>
  )
}
