import {
  fetchRestaurant,
  fetchRestaurantCategories,
  fetchRestaurantReviews,
} from '../lib/api'

import { Ratings, Restaurant } from './types'

export async function getRestaurant(id: string): Promise<Restaurant> {
  const restaurant = await fetchRestaurant(id)
  const { attributes, relationships } = restaurant

  const categories = await fetchRestaurantCategories(relationships.categories)
  const reviews = relationships.reviews.map((review) => ({
    rating: review.rating,
    comment: review.comment,
    date: review.date,
    userName: review.user.name,
  }))

  return {
    id: restaurant.id,
    ...attributes,
    categories: categories.map((c) => c.name),
    reviews,
  }
}

export async function getRestaurantRatings(id: string): Promise<Ratings> {
  const restaurant = await fetchRestaurant(id)
  const reviews = await fetchRestaurantReviews(id)
  const { attributes } = restaurant

  return {
    rating: attributes.rating,
    numRatings: attributes.numRatings,
    reviews: reviews.map((review) => ({
      rating: review.rating,
      comment: review.comment,
      date: review.date,
      userName: review.user.name,
    })),
  }
}
