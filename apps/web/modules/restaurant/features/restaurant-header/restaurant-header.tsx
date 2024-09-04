import { MenuSearchBar } from './components/menu-search-bar'
import { RestaurantInformation } from './components/restaurant-information'

export const RestaurantHeader = () => (
  <div className="bg-purple-100 border-purple-600 border-2 p-4 rounded-lg flex flex-col items-center justify-center text-2xl font-mono text-purple-600">
    <h1 className="p-4">RestaurantHeader</h1>
    <div className="flex flex-row w-full justify-between">
      <RestaurantInformation />
      <MenuSearchBar />
    </div>
  </div>
)
