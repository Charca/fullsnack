import React from 'react'
import { MenuItem } from '../../components/menu-item'

interface MenuCategoryProps {
  title: string
  items: Array<{ name: string; price: number }>
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items }) => (
  <div className="mb-4">
    <h3>{title}</h3>
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </div>
)
