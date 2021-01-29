import React from 'react'
import { FlatList, Image, View, TouchableOpacity, Text } from 'react-native'
import { COLORS, icons } from '../../constants'
import { Styles } from './styles'

const Restaurants = ({ item, getCategoryName, currentLocation, navigate }) => (
  <TouchableOpacity
    style={Styles.restaurantsTouchable}
    onPress={() => navigate('Restaurant', { item, currentLocation })}
  >
    <View style={Styles.imageView}>
      <Image source={item.photo} resizeMode='cover' style={Styles.image} />

      <View style={Styles.timeView}>
        <Text style={Styles.durationText}>{item.duration}</Text>
      </View>
    </View>

    <Text style={Styles.nameText}>{item.name}</Text>

    <View style={Styles.ratingView}>
      <Image source={icons.star} style={Styles.icon} />
      <Text style={Styles.ratingCategoryText}>{item.rating}</Text>

      <View style={Styles.categoryPriceView}>
        {item.categories.map(category => (
          <View key={category} style={Styles.categoryView}>
              <Text style={Styles.ratingCategoryText}>{getCategoryName(category)}</Text>
              <Text style={Styles.spacing}>{' '}.{' '}</Text>
          </View>
        ))}

        {
          [1, 2, 3].map(priceRating => (
            <Text
              key={priceRating}
              style={[Styles.priceRatingText,
                { color: priceRating <= item.priceRating ? COLORS.primary : COLORS.darkGray }
              ]}
            >
              $
            </Text>
          ))
        }
      </View>
    </View>
  </TouchableOpacity>
)

const RestaurantList = ({ restaurants, getCategoryName, currentLocation, navigate }) => (
  <FlatList
    data={restaurants}
    keyExtractor={item => String(item.id)}
    renderItem={({ item }) => (
      <Restaurants
        item={item}
        getCategoryName={getCategoryName}
        currentLocation={currentLocation}
        navigate={navigate}
      />
    )}
    contentContainerStyle={Styles.restaurantsContainer}
  />
)

export default RestaurantList