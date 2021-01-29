import React from 'react'
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import { Styles } from './styles'

const RenderDots = ({ restaurant, scrollX }) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width)

  return (
  <View style={Styles.dotsViewContainer}>
    <View
      style={Styles.dotsView}>
        {restaurant?.menu.map((res, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          })

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
            extrapolate: 'clamp'
          })

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.darkGray, COLORS.primary, COLORS.darkGray],
            extrapolate: 'clamp'
          })

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                ...Styles.dot,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor
              }}
            />
          )
        })}
    </View>
  </View>
)
}

const OrderSection = ({ restaurant, scrollX, getBasketItemCount, sumOrder, currentLocation, navigate }) => (
 <View>
   <RenderDots restaurant={restaurant} scrollX={scrollX} />

   <View style={Styles.orderSectionContainer}>
     <View style={Styles.cartView}>
       <Text style={Styles.cartText}>{getBasketItemCount()} Items in cart</Text>
       <Text style={Styles.cartText} >${sumOrder()}</Text>
     </View>

     <View style={Styles.locationCardView}>
       <View style={Styles.sectionView}>
         <Image source={icons.pin} resizeMode='contain' style={Styles.icon} />
         <Text style={Styles.sectionText}>Location</Text>
       </View>

       <View style={Styles.sectionView}>
         <Image source={icons.master_card} resizeMode='contain' style={Styles.icon} />
         <Text style={Styles.sectionText}>0000</Text>
       </View>
     </View>

     <View style={Styles.buttonView}>
       <TouchableOpacity
        style={Styles.buttouTouchable}
        onPress={() => navigate('OrderDelivery', { restaurant, currentLocation })}
      >
        <Text style={Styles.buttonText}>Order</Text>
      </TouchableOpacity>
     </View>
   </View>
   {isIphoneX() && <View style={Styles.iphoneXView} />}
 </View>
)

export default OrderSection