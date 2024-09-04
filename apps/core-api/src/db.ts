export const restaurants = [
  {
    id: '1',
    attributes: {
      name: 'Taco Bell',
      description:
        'Taco Bell is a fast food restaurant that serves tacos and other Mexican-inspired dishes.',
      logoUrl: '/taco-bell-logo.png',
      heroImageUrl: '/taco-bell-hero.jpg',
      deliveryFee: 2.99,
      deliveryTime: [10, 30],
      offersDelivery: true,
      offersPickup: true,
      offersGroupOrders: true,
      businessHours: ['08:00', '22:00'],
      rating: 4.5,
      numRatings: 100,
    },
    relationships: {
      categories: ['1', '2'],
      reviews: [
        {
          id: '1',
          rating: 4.5,
          comment: 'Great tacos!',
          date: '2024-01-01',
          user: {
            id: '1',
            name: 'John Doe',
          },
        },
        {
          id: '2',
          rating: 4.0,
          comment: 'The burritos are pretty good.',
          date: '2024-01-02',
          user: {
            id: '2',
            name: 'Jane Doe',
          },
        },
        {
          id: '3',
          rating: 3,
          comment: 'Both the tacos and the burritos are okay.',
          date: '2024-01-03',
          user: {
            id: '3',
            name: 'John Smith',
          },
        },
      ],
    },
  },
  {
    id: '2',
    attributes: {
      name: 'McDonalds',
      description:
        'McDonalds is a fast food restaurant that serves burgers and other American-inspired dishes.',
      logoUrl: '/mcdonalds-logo.png',
      heroImageUrl: '/mcdonalds-hero.jpg',
      deliveryFee: 3.99,
      deliveryTime: [10, 30],
      offersDelivery: true,
      offersPickup: true,
      offersGroupOrders: true,
      businessHours: ['08:00', '22:00'],
      rating: 4.5,
      numRatings: 100,
    },
    relationships: {
      categories: ['1', '3'],
      reviews: [
        {
          id: '4',
          rating: 4.5,
          comment: 'Great burgers!',
          date: '2024-01-01',
          user: {
            id: '1',
            name: 'John Doe',
          },
        },
        {
          id: '5',
          rating: 4.0,
          comment: 'The fries are pretty good.',
          date: '2024-01-02',
          user: {
            id: '2',
            name: 'Jane Doe',
          },
        },
        {
          id: '6',
          rating: 3,
          comment: 'Both the burgers and the fries are okay.',
          date: '2024-01-03',
          user: {
            id: '3',
            name: 'John Smith',
          },
        },
      ],
    },
  },
  {
    id: '3',
    attributes: {
      name: 'Chick-fil-A',
      description:
        'Chick-fil-A is a fast food restaurant that serves chicken sandwiches and other American-inspired dishes.',
      logoUrl: '/chick-fil-a-logo.png',
      heroImageUrl: '/chick-fil-a-hero.jpg',
      deliveryFee: 4.99,
      deliveryTime: [10, 30],
      offersDelivery: true,
      offersPickup: true,
      offersGroupOrders: true,
      businessHours: ['08:00', '22:00'],
      rating: 4.5,
      numRatings: 100,
    },
    relationships: {
      categories: ['1', '3', '4'],
      reviews: [
        {
          id: '7',
          rating: 4.5,
          comment: 'Great chicken sandwiches!',
          date: '2024-01-01',
          user: {
            id: '1',
            name: 'John Doe',
          },
        },
        {
          id: '8',
          rating: 4.0,
          comment: 'The chicken nuggets are pretty good.',
          date: '2024-01-02',
          user: {
            id: '2',
            name: 'Jane Doe',
          },
        },
        {
          id: '9',
          rating: 3,
          comment:
            'Both the chicken sandwiches and the chicken nuggets are okay.',
          date: '2024-01-03',
          user: {
            id: '3',
            name: 'John Smith',
          },
        },
      ],
    },
  },
]

export const restaurantCategories = [
  {
    id: '1',
    name: 'Fast Food',
  },
  {
    id: '2',
    name: 'Mexican',
  },
  {
    id: '3',
    name: 'American',
  },
  {
    id: '4',
    name: 'Chicken',
  },
]

export const menuItemCategories = {
  '1': [
    {
      id: '1',
      name: 'Featured Items',
    },
    {
      id: '2',
      name: 'Tacos',
    },
    {
      id: '3',
      name: 'Burritos',
    },
    {
      id: '4',
      name: 'Quesadillas',
    },
  ],
  '2': [
    {
      id: '1',
      name: 'Featured Items',
    },
    {
      id: '5',
      name: 'Burgers',
    },
    {
      id: '6',
      name: 'Fries',
    },
  ],
  '3': [
    {
      id: '1',
      name: 'Featured Items',
    },
    {
      id: '6',
      name: 'Fries',
    },
    {
      id: '7',
      name: 'Sandwiches',
    },
    {
      id: '8',
      name: 'Nuggets',
    },
  ],
}

export const menuItems = {
  '1': [
    {
      id: '1',
      name: 'Chicken Quesadilla',
      description: 'A delicious chicken quesadilla.',
      categories: ['1', '4'],
      price: 6.99,
      imageUrl: '/menu/chicken-quesadilla.jpg',
      likePercent: 90,
      numLikes: 150,
    },
    {
      id: '2',
      name: 'Crunchy Taco',
      description: 'A delicious crunchy taco.',
      categories: ['1', '2'],
      price: 2.49,
      imageUrl: '/menu/crunchy-taco.jpg',
      likePercent: 80,
      numLikes: 100,
    },
    {
      id: '3',
      name: 'Chicken Burrito',
      description: 'A delicious chicken burrito.',
      categories: ['1', '3'],
      price: 8.99,
      imageUrl: '/menu/chicken-burrito.jpg',
      likePercent: 80,
      numLikes: 100,
    },
  ],
  '2': [
    {
      id: '4',
      name: 'Cheeseburger',
      description: 'A delicious cheeseburger.',
      categories: ['5'],
      price: 5.99,
      imageUrl: '/menu/cheeseburger.jpg',
      likePercent: 80,
      numLikes: 100,
    },
    {
      id: '5',
      name: 'Big Mac',
      description: 'A delicious big mac.',
      categories: ['1', '5'],
      price: 5.99,
      imageUrl: '/menu/big-mac.jpg',
      likePercent: 80,
      numLikes: 100,
    },
    {
      id: '6',
      name: 'Medium Fries',
      description: 'Crispy and delicious fries.',
      categories: ['6'],
      price: 2.99,
      imageUrl: '/menu/fries.jpg',
      likePercent: 80,
      numLikes: 100,
    },
  ],
  '3': [
    {
      id: '7',
      name: 'Chicken Sandwich',
      description: 'A delicious chicken sandwich.',
      categories: ['1', '7'],
      price: 6.99,
      imageUrl: '/menu/chicken-sandwich.jpg',
      likePercent: 80,
      numLikes: 100,
    },
    {
      id: '8',
      name: 'Chicken Nuggets',
      description: 'Delicious chicken nuggets.',
      categories: ['8'],
      price: 6.99,
      imageUrl: '/menu/chicken-nuggets.jpg',
      likePercent: 80,
      numLikes: 100,
    },
    {
      id: '9',
      name: 'Medium Curly Fries',
      description: 'Crispy and delicious curly fries.',
      categories: ['1', '6'],
      price: 2.99,
      imageUrl: '/menu/curly-fries.jpg',
      likePercent: 80,
      numLikes: 100,
    },
  ],
}

export const reviews = {
  '1': [
    {
      id: '10',
      rating: 4.5,
      date: '2024-01-01',
      user: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '11',
      rating: 5.0,
      comment: 'Very quick delivery!',
      date: '2024-01-02',
      user: {
        id: '2',
        name: 'Jane Doe',
      },
    },
    {
      id: '12',
      rating: 5.0,
      comment: 'The quesadilla was delicious!',
      date: '2024-01-03',
      user: {
        id: '3',
        name: 'John Smith',
      },
    },
    {
      id: '13',
      rating: 4.0,
      date: '2024-01-04',
      user: {
        id: '4',
        name: 'Jane Smith',
      },
    },
  ],
  '2': [
    {
      id: '14',
      rating: 4.5,
      date: '2024-01-01',
      user: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '15',
      rating: 5.0,
      comment: 'The fries were delicious!',
      date: '2024-01-01',
      user: {
        id: '2',
        name: 'Jane Doe',
      },
    },
    {
      id: '16',
      rating: 4.0,
      comment: 'The cheeseburger was okay.',
      date: '2024-01-03',
      user: {
        id: '3',
        name: 'John Smith',
      },
    },
    {
      id: '17',
      rating: 5.0,
      comment: 'Love a good Big Mac!',
      date: '2024-01-03',
      user: {
        id: '3',
        name: 'John Smith',
      },
    },
  ],
  '3': [
    {
      id: '18',
      rating: 4.5,
      comment: 'The chicken sandwich was delicious!',
      date: '2024-01-01',
      user: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '19',
      rating: 5.0,
      comment: 'The chicken nuggets were amazing!',
      date: '2024-01-01',
      user: {
        id: '2',
        name: 'Jane Doe',
      },
    },
    {
      id: '20',
      rating: 4.0,
      comment: 'The curly fries were okay.',
      date: '2024-01-03',
      user: {
        id: '3',
        name: 'John Smith',
      },
    },
    {
      id: '21',
      rating: 5.0,
      comment: 'Super friendly staff!',
      date: '2024-01-01',
      user: {
        id: '1',
        name: 'John Doe',
      },
    },
  ],
}
