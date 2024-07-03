import { Offer } from '../types'

type Props = {
  offer: Offer
}
const FeaturedOfferCard = ({ offer }: Props) => {
  return (
    <div
      className={`w-1/3 ${offer.bgColor} shadow-md rounded-lg overflow-hidden relative`}
    >
      <div className="p-4 w-2/3">
        <h3 className="text-xl font-bold">{offer.promoText || offer.name}</h3>
        <p className="text-gray-700">{offer.description}</p>
        <button className="mt-4 py-2 px-4 bg-white text-black rounded-full shadow">
          {offer.buttonText}
        </button>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={offer.image}
        alt={offer.name}
        className="absolute bottom-0 right-0 w-1/3 h-full object-cover"
      />
    </div>
  )
}

export default FeaturedOfferCard
