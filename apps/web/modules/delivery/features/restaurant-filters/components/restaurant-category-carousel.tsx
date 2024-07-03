const categories = [
  { name: 'Grocery', icon: '/icons/Grocery.png' },
  { name: 'Fast Food', icon: '/icons/FastFood.png' },
  { name: 'Breakfast', icon: '/icons/Breakfast.png' },
  { name: 'Pizza', icon: '/icons/Pizza.png' },
  { name: 'Healthy', icon: '/icons/Healthy.png' },
  { name: 'Chinese', icon: '/icons/Chinese.png' },
  { name: 'Coffee', icon: '/icons/Coffee.png' },
  { name: 'Happy Hour', icon: '/icons/HappyHour.png' },
  { name: 'Sandwich', icon: '/icons/Sandwich.png' },
  { name: 'Sushi', icon: '/icons/Sushi.png' },
  { name: 'Thai', icon: '/icons/Thai.png' },
  { name: 'Bubble Tea', icon: '/icons/BubbleTea.png' },
  { name: 'Salads', icon: '/icons/Salad.png' },
]

const RestaurantCategoryCarousel = () => {
  return (
    <div className="flex space-x-4 justify-center relative">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={category.icon} alt={category.name} className="w-16 h-16" />
          <span className="text-sm">{category.name}</span>
        </div>
      ))}
      <button className="h-10 w-10 flex justify-center items-center bg-white rounded-full shadow-md absolute right-0 z-10 top-1/2 -translate-y-1/2">
        &gt;
      </button>
    </div>
  )
}

export default RestaurantCategoryCarousel
