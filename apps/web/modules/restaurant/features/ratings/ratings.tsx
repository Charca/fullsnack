import React from 'react'
import { CustomerReview } from './components/customer-review'

export const Ratings = () => (
  <div className="bg-purple-100 border-purple-600 border-2 p-4 rounded-lg flex flex-col items-center justify-center text-2xl font-mono text-purple-600">
    <h1 className="py-8">Ratings</h1>
    <div className="grid grid-cols-2 gap-4 w-full">
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
    </div>
  </div>
)
