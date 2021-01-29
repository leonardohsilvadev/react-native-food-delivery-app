import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

import { Styles } from './styles'

const Header = ({ iconLeft, onPressLeft, info, iconRight, onPressRight }) => (
  <View style={Styles.container}>
    <TouchableOpacity style={Styles.iconLeft} onPress={onPressLeft}>
      <Image source={iconLeft} resizeMode='contain' style={Styles.icon} />
    </TouchableOpacity>

    <View style={Styles.locationView}>
      <View style={Styles.locationBackground}>
        <Text style={Styles.locationText}>{info}</Text>
      </View>
    </View>

    <TouchableOpacity style={Styles.iconRight} onPress={onPressRight}>
        <Image source={iconRight} resizeMode='contain' style={Styles.icon} />
      </TouchableOpacity>
  </View>
)

export default Header