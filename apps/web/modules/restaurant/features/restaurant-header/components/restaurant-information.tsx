import { Restaurant } from '../../../models/types'

export const RestaurantInformation = ({
  restaurant,
}: {
  restaurant: Restaurant
}) => (
  <div className="bg-green-100 border-green-600 text-green-600 border-2 p-4 rounded-lg flex flex-col items-center justify-center text-2xl font-mono">
    <h1>RestaurantInformation</h1>
    <ul className="flex flex-col gap-2 mt-4 text-base w-full">
      <li>Name: {restaurant.name}</li>
      <li>Logo URL: {restaurant.logoUrl}</li>
      <li>Rating: {restaurant.rating}</li>
    </ul>
  </div>
)
