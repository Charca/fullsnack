const filters = [
  'Offers',
  'Delivery fee',
  'Under 30 min',
  'Best overall',
  'Rating',
  'Price',
  'Dietary',
  'Sort',
]

const RestaurantAttributeFilter = () => {
  return (
    <div className="flex space-x-4 mt-4 justify-center relative gap-1">
      {filters.map((filter, index) => (
        <button
          key={index}
          className="flex items-center bg-gray-100 py-2 px-4 rounded-full text-sm"
        >
          <span>{filter}</span>
        </button>
      ))}
    </div>
  )
}

export default RestaurantAttributeFilter
