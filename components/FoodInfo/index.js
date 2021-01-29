import React from 'react'
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native'
import { icons } from '../../constants'
import { Styles } from './styles'

const FoodInfo = ({ foods, scrollX, getOrderQty, onQty }) => (
  <Animated.ScrollView
    horizontal
    pagingEnabled
    scrollEventThrottle={16}
    snapToAlignment='center'
    showsHorizontalScrollIndicator={false}
    onScroll={Animated.event([
      { nativeEvent: { contentOffset: { x: scrollX } } }
    ], { useNativeDriver: false })}
  >
    {foods?.map((food, index) => (
      <View
      key={`menu=${index}`}
        style={Styles.foodContainer}>
        <View style={Styles.photoContainer}>
          <Image source={food.photo} resizeMode='cover' style={Styles.foodPhoto} />

          <View style={Styles.quantityView}>
            <TouchableOpacity
              style={[
                Styles.quantityBackground,
                {
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25
                }
              ]}
              onPress={() => onQty('-', food.menuId, food.price)}
            >
              <Text style={Styles.minorMajor}>-</Text>
            </TouchableOpacity>

            <View style={Styles.quantityBackground}>
              <Text style={Styles.quantityText}>{getOrderQty(food.menuId)}</Text>
            </View>

            <TouchableOpacity
              style={{
                ...Styles.quantityBackground,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25
              }}
              onPress={() => onQty('+', food.menuId, food.price)}
            >
              <Text style={Styles.minorMajor}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.namePriceView}>
          <Text style={Styles.foodNamePrice}>{food.name} - ${food.price.toFixed(2)}</Text>
          <Text style={Styles.foodDescription}>{food.description}</Text>
        </View>

        <View style={Styles.caloriesView}>
          <Image source={icons.fire} style={Styles.icon} />
          <Text style={Styles.caloriesText}>{food.calories.toFixed(2)} cal</Text>
        </View>
      </View>
    ))}
  </Animated.ScrollView>
)

export default FoodInfo