export type RestaurantResponse = {
  id: string
  attributes: {
    name: string
    description: string
    logoUrl: string
    heroImageUrl: string
    deliveryFee: number
    deliveryTime: [number, number]
    offersDelivery: boolean
    offersPickup: boolean
    offersGroupOrders: boolean
    businessHours: [string, string]
    rating: number
    numRatings: number
  }
  relationships: {
    categories: string[]
    reviews: ReviewResponse[]
  }
}

export type MenuResponse = {
  categories: MenuCategoryResponse[]
  items: MenuItemResponse[]
}

export type RestaurantCategoryResponse = {
  id: string
  name: string
}

type ReviewResponse = {
  id: string
  rating: number
  comment: string
  date: string
  user: {
    id: string
    name: string
  }
}

type MenuCategoryResponse = {
  id: string
  name: string
}

type MenuItemResponse = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
}
