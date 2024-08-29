import React from 'react'

export const RestaurantOptions: React.FC = () => (
  <div className="flex space-x-4 mb-4">
    <button className="bg-green-500 text-white px-4 py-2 rounded">
      Delivery
    </button>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Pickup</button>
  </div>
)
