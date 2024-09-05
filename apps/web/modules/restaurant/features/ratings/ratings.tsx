import React from 'react'
import { CustomerReview } from './components/customer-review'
import { getRestaurantRatings } from '../../models/restaurant'

export const Ratings = async () => {
  const ratings = await getRestaurantRatings('1')

  return (
    <div className="bg-purple-100 border-purple-600 border-2 p-4 rounded-lg flex flex-col items-center justify-center text-2xl font-mono text-purple-600">
      <h1>Ratings</h1>
      <ul className="flex flex-col gap-2 p-4 text-base w-full">
        <li>Rating: {ratings.rating}</li>
        <li>Number of Ratings: {ratings.numRatings}</li>
      </ul>
      <div className="grid grid-cols-2 gap-4 w-full">
        {ratings.reviews.map((review, i) => (
          <CustomerReview key={i} {...review} />
        ))}
      </div>
    </div>
  )
}
