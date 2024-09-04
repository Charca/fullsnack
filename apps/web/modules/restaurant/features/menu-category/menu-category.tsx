import React from 'react'
import { MenuItem } from './components/menu-item'

export const MenuCategory = () => (
  <div className="bg-purple-100 border-purple-600 border-2 p-4 rounded-lg flex flex-col items-center justify-center text-2xl font-mono text-purple-600">
    <h1 className="py-8">MenuCategory</h1>
    <div className="grid grid-cols-2 gap-4 w-full">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  </div>
)
