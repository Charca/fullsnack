import React from 'react'
import RestaurantCategoryCarousel from './components/restaurant-category-carousel'
import RestaurantAttributeFilter from './components/restaurant-attribute-filter'

const RestaurantFilters = () => {
  return (
    <div className="p-4">
      <RestaurantCategoryCarousel />
      <RestaurantAttributeFilter />
    </div>
  )
}

export default RestaurantFilters
