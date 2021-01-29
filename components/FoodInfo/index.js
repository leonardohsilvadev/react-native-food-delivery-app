import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { icons } from '../../constants'
import { Styles } from './styles'

const FoodInfo = ({ foods }) => (
  <Animated.ScrollView
    horizontal
    pagingEnabled
    scrollEventThrottle={16}
    snapToAlignment='center'
    showsHorizontalScrollIndicator={false}
    onScroll={() => {}}
  >
    {foods?.map((food, index) => (
      <View
      key={`menu=${index}`}
        style={Styles.foodContainer}>
        <View style={Styles.photoContainer}>
          <Image source={food.photo} resizeMode='cover' style={Styles.foodPhoto} />

          <View style={Styles.quantityView}>
            <TouchableOpacity
              style={[ Styles.quantityBackground, { borderTopLeftRadius: 25, borderBottomLeftRadius: 25 }]}
            >
              <Text style={Styles.minorMajor}>-</Text>
            </TouchableOpacity>

            <View style={Styles.quantityBackground}>
              <Text style={Styles.quantityText}>5</Text>
            </View>

            <TouchableOpacity
              style={{ ...Styles.quantityBackground, borderTopRightRadius: 25, borderBottomRightRadius: 25 }}
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