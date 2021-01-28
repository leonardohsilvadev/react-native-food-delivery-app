import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

export const Styles = StyleSheet.create({
  restaurantsTouchable: {
    marginBottom:
    SIZES.padding *2
  },
  imageView: {
    marginBottom: SIZES.padding
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.radius
  },
  durationText: {
    ...FONTS.h4
  },
  nameText: {
    ...FONTS.body2
  },
  ratingView: {
    marginTop: SIZES.padding,
    flexDirection: 'row'
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: COLORS.primary,
    marginRight: 10
  },
  ratingCategoryText: {
    ...FONTS.body3
  },
  categoryPriceView: {
    flexDirection: 'row',
    marginLeft: 10
  },
  categoryView: {
    flexDirection: 'row'
  },
  spacing: {
    ...FONTS.h3,
    color: COLORS.darkGray
  },
  priceRatingText: {
    ...FONTS.body3,
  },
  restaurantsContainer: {
    paddingHorizontal: SIZES.padding *2,
    paddingBottom: 30
  },
  timeView: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: SIZES.width * 0.4,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1
  },
})