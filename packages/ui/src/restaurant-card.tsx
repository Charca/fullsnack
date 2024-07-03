import { Restaurant } from '@repo/types'

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className="w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{restaurant.name}</h3>
        <p className="text-gray-500">{restaurant.deliveryTime}</p>
        <div className="flex items-center">
          <span className="text-gray-600">{restaurant.rating}</span>
          <span className="text-gray-500 ml-1">⭐</span>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
