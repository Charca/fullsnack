import React from 'react'
import { RestaurantHeader } from './components/restaurant-header'
import { MenuSearchBar } from './components/menu-search-bar'
import { RestaurantInformation } from './components/restaurant-information'
import { RestaurantOptions } from './components/restaurant-options'
import { MenuCategories } from './components/menu-categories'
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
      <MenuSearchBar />
      <RestaurantInformation />
      <RestaurantOptions />
      <div className="flex">
        <MenuCategories />
        <div className="w-3/4 pl-4">
          <Promotions />
          <FeaturedItemsCarousel />
          <RatingsSummary />
          <MenuCategory
            title="Picked for you"
            items={[
              { name: 'Item 1', price: 9.99 },
              { name: 'Item 2', price: 12.99 },
            ]}
          />
          <Ratings />
        </div>
      </div>
      <Footnotes />
    </div>
  )
}
