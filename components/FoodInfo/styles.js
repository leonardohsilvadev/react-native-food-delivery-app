import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

export const Styles = StyleSheet.create({
  foodContainer: {
    alignItems: 'center'
  },
  photoContainer: {
    height: SIZES.height * 0.35
  },
  foodPhoto: {
    width: SIZES.width,
    height: '100%'
  },
  quantityView: {
    position: 'absolute',
    bottom: -20,
    width: SIZES.width,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  quantityBackground: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minorMajor: {
    ...FONTS.body1
  },
  quantityText: {
    ...FONTS.h2
  },
  namePriceView: {
    width: SIZES.width,
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: SIZES.padding * 2
  },
  foodNamePrice: {
    marginVertical: SIZES.padding,
    textAlign: 'center',
    ...FONTS.h2
  },
  foodDescription: {
    ...FONTS.body3
  },
  caloriesView: {
    flexDirection: 'row',
    marginTop: SIZES.padding
  },
  icon: {
    width: SIZES.padding * 2,
    height: SIZES.padding * 2,
    marginRight: SIZES.padding
  },
  caloriesText: {
    ...FONTS.body3,
    color: COLORS.darkGray
  }
})