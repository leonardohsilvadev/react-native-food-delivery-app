import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { icons } from '../../constants'

import { Styles } from './styles'

const HomeHeader = ({ location }) => (
  <View style={Styles.container}>
    <TouchableOpacity style={Styles.touchableNearby}>
      <Image source={icons.nearby} resizeMode='contain' style={Styles.icon} />
    </TouchableOpacity>

    <View style={Styles.locationView}>
      <View style={Styles.locationBackground}>
        <Text style={Styles.locationText}>{location}</Text>
      </View>
    </View>

    <TouchableOpacity style={Styles.touchableBasket}>
        <Image source={icons.basket} resizeMode='contain' style={Styles.icon} />
      </TouchableOpacity>
  </View>
)

export default HomeHeader