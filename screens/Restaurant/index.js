import React from 'react'
import { Animated, SafeAreaView } from 'react-native'
import { FoodInfo, Header, OrderSection } from '../../components'
import { icons } from '../../constants'
import { Styles } from './styles'

const Restaurant = ({ route, navigation: { navigate, goBack } }) => {
  const [restaurant, setRestaurant] = React.useState(null)
  const [currentLocation, setCurrentLocation] = React.useState(null)
  const [orderItems, setOrderItems] = React.useState([])

  const scrollX = new Animated.Value(0)

  React.useEffect(() => {
    let { item, currentLocation } = route.params
    setRestaurant(item)
    setCurrentLocation(currentLocation)
  }, [])

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice()
    let item = orderList.filter(a => a.menuId === menuId)

    if (action === '+') {
      if (item.length > 0) {
        let newQty = item[0].qty + 1
        item[0].qty = newQty
        item[0].total = item[0].qty * price
      } else {
        const newItem = {
          menuId,
          price,
          qty: 1,
          total: price
        }

        orderList.push(newItem)
      }

      setOrderItems(orderList)
    } else if (action === '-') {
      if (item.length > 0) {
        if (item[0].qty > 0) {
          let newQty = item[0].qty - 1
          item[0].qty = newQty
          item[0].total = newQty * price
        }
      }

      setOrderItems(orderList)
    }
  }

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter(a => a.menuId === menuId)

    if (orderItem.length > 0) return orderItem[0].qty

    return 0
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)
    return itemCount
  }

  function sumOrder() {
   let total = orderItems.reduce((a, b) => a + (b.total || 0), 0) 
   return total.toFixed(2)
  }

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
      scrollX={scrollX}
      getOrderQty={getOrderQty}
      onQty={editOrder}
    />

    <OrderSection
      restaurant={restaurant}
      scrollX={scrollX}
      getBasketItemCount={getBasketItemCount}
      sumOrder={sumOrder}
      currentLocation={currentLocation}
      navigate={navigate}
    />
  </SafeAreaView>
  )
}

export default Restaurant