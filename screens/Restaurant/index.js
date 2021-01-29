import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { FoodInfo, Header } from '../../components'
import { icons } from '../../constants'
import { Styles } from './styles'

const Restaurant = ({ route, navigation: { goBack } }) => {
  const [restaurant, setRestaurant] = React.useState(null)
  const [currentLocation, setCurrentLocation] = React.useState(null)

  React.useEffect(() => {
    let { item, currentLocation } = route.params
    setRestaurant(item)
    setCurrentLocation(currentLocation)
  }, [])

  return (
  <SafeAreaView style={Styles.container}>
    <Header
      iconLeft={icons.back}
      onPressLeft={() => goBack()}
      info={restaurant?.name}
      iconRight={icons.list}
    />

    <FoodInfo
      foods={restaurant?.menu}
    />
  </SafeAreaView>
  )
}

export default Restaurant