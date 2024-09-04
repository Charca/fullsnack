import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {
  restaurants,
  restaurantCategories,
  menuItemCategories,
  menuItems,
  reviews,
} from './db'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/restaurants', (c) => {
  return c.json(restaurants)
})

app.get('/restaurants/:restaurantId', async (c) => {
  const { restaurantId } = c.req.param()
  const restaurant = restaurants.find((r) => r.id === restaurantId)

  if (!restaurant) {
    return c.status(404)
  }

  return c.json(restaurant)
})

app.get('/restaurants/:restaurantId/menu', async (c) => {
  const { restaurantId } = c.req.param()
  const restaurant = restaurants.find((r) => r.id === restaurantId)
  if (!restaurant) {
    return c.status(404)
  }

  const categories =
    menuItemCategories[restaurantId as keyof typeof menuItemCategories]
  const items = menuItems[restaurantId as keyof typeof menuItems]

  return c.json({
    categories,
    items,
  })
})

app.get('/restaurants/:restaurantId/reviews', async (c) => {
  const { restaurantId } = c.req.param()
  const restaurant = restaurants.find((r) => r.id === restaurantId)
  if (!restaurant) {
    return c.status(404)
  }

  return c.json(reviews[restaurantId as keyof typeof reviews])
})

app.get('/categories', async (c) => {
  const { ids } = c.req.query()
  const categoryIds = ids?.split(',')
  const categories =
    categoryIds && categoryIds.length > 0
      ? restaurantCategories.filter((c) => categoryIds.includes(c.id))
      : restaurantCategories

  return c.json(categories)
})

const port = 3002
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
