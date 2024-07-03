import FeaturedOfferCard from './components/featured-offer-card'
import { Offer } from './types'

type Props = {
  offers: Offer[]
}

const FeaturedOffersCarousel = ({ offers }: Props) => {
  return (
    <div className="p-4">
      <div className="flex gap-4 relative">
        <button className="h-10 w-10 flex justify-center items-center bg-white rounded-full shadow-md absolute -left-6 z-10 top-1/2 -translate-y-1/2">
          &lt;
        </button>
        {offers.map((offer, index) => (
          <FeaturedOfferCard key={index} offer={offer} />
        ))}
        <button className="h-10 w-10 flex justify-center items-center bg-white rounded-full shadow-md absolute -right-6 z-10 top-1/2 -translate-y-1/2">
          &gt;
        </button>
      </div>
    </div>
  )
}

export default FeaturedOffersCarousel
