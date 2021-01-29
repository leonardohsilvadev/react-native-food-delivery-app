import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
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
  <View style={Styles().categoriesView}>
    <Text style={Styles().categoriesTitle}>Main</Text>
    <Text style={Styles().categoriesTitle}>Categories</Text>

    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={Styles().listContainer}
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