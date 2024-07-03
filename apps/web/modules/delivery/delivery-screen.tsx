import FeaturedOffersCarousel from './features/featured-offers-carousel/featured-offers-carousel'
import RestaurantCarousel from './features/restaurant-carousel/restaurant-carousel'
import RestaurantFilters from './features/restaurant-filters/restaurant-filters'
import { offers, carousels } from './data'

export function DeliveryScreen() {
  return (
    <>
      <RestaurantFilters />
      <FeaturedOffersCarousel offers={offers} />
      {carousels.map((carousel, index) => (
        <RestaurantCarousel key={index} {...carousel} />
      ))}
    </>
  )
}
