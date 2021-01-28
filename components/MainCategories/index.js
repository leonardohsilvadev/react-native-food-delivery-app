import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import { Styles } from './styles'

const TouchableCategory = ({ item, onCategory, isSelected }) => (
  <TouchableOpacity
    style={Styles(isSelected).categoryTouchable}
    onPress={onCategory}
  >
    <View style={Styles(isSelected).iconContainer}>
      <Image source={item.icon} resizeMode='contain' style={Styles().icon} />
    </View>

    <Text style={Styles(isSelected).categoryName}>{item.name}</Text>
  </TouchableOpacity>
)

const MainCategories = ({ categories, onCategory, isSelected }) => (
  <View style={{ padding: SIZES.padding * 2 }}>
    <Text style={{ ...FONTS.h1 }}>Main</Text>
    <Text style={{ ...FONTS.h1 }}>Categories</Text>

    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingHorizontal: SIZES.padding * 2 }}
      renderItem={({ item }) => (
        <TouchableCategory
          item={item}
          onCategory={() => onCategory(item)}
          isSelected={isSelected?.id === item.id}
        />
      )}
    />
  </View>
)

export default MainCategories