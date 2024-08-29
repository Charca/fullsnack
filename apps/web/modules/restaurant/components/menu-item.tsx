import React from 'react'

interface MenuItemProps {
  name: string
  price: number
}

export const MenuItem: React.FC<MenuItemProps> = ({ name, price }) => (
  <div className="bg-white p-4 border mb-2">
    <h4>{name}</h4>
    <p>${price}</p>
  </div>
)
