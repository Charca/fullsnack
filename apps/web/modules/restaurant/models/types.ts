export type Restaurant = {
  id: string
  name: string
  description: string
  categories: string[]
  logoUrl: string
  heroImageUrl: string
  deliveryFee: number
  deliveryTime: [number, number]
  rating: number
  numRatings: number
  reviews: CustomerReview[]
}

export type CustomerReview = {
  rating: number
  comment: string
  date: string
  userName: string
}
