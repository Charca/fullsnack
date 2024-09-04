import React from 'react'
import { RestaurantHeader } from './features/restaurant-header/restaurant-header'
import { RestaurantOptions } from './features/restaurant-options/restaurant-options'
import { MenuCategories } from './features/menu-categories/menu-categories'
import { Footnotes } from './components/footnotes'
import { Promotions } from './features/promotions/promotions'
import { FeaturedItemsCarousel } from './features/featured-items-carousel/featured-items-carousel'
import { RatingsSummary } from './features/ratings-summary/ratings-summary'
import { MenuCategory } from './features/menu-category/menu-category'
import { Ratings } from './features/ratings/ratings'

export function RestaurantScreen() {
  return (
    <div className="container mx-auto p-4">
      <RestaurantHeader />
      <div className="flex py-4">
        <MenuCategories />
        <div className="w-3/4 pl-4 flex flex-col gap-4">
          <RestaurantOptions />
          <Promotions />
          <FeaturedItemsCarousel />
          <RatingsSummary />
          <MenuCategory />
          <MenuCategory />
          <Ratings />
        </div>
      </div>
      <Footnotes />
    </div>
  )
}
