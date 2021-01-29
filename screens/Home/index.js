import React from 'react'
import { SafeAreaView } from 'react-native'

import { Styles } from './styles'

import { Header, MainCategories, RestaurantList } from '../../components'

import {
  initialCurrentLocation,
  restaurantData,
  categoryData,
} from './data'
import { icons } from '../../constants'

const Home = ({ navigation: { navigate } }) => {
  const [categories, setCategories] = React.useState(categoryData)
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [restaurants, setRestaurants] = React.useState(restaurantData)
  const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

  function onSelectCategory(category) {
    let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
    setRestaurants(restaurantList)
    setSelectedCategory(category)
  }

  function getCategoryName(id) {
    let category = categories.filter(a => a.id === id)
    if (category.length > 0) {
      return category[0].name
    } else {
      return ''
    }
  }

  return (
  <SafeAreaView style={Styles.container}>
    <Header
      iconLeft={icons.nearby}
      info={currentLocation.streetName}
      iconRight={icons.basket}
    />
    <MainCategories
      categories={categories}
      onCategory={onSelectCategory}
      isSelected={selectedCategory}
    />
    <RestaurantList
      restaurants={restaurants}
      getCategoryName={getCategoryName}
      currentLocation={currentLocation}
      navigate={navigate}
    />
  </SafeAreaView>
  )
}

export default Home