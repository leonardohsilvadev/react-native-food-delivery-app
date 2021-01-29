import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

export const Styles = StyleSheet.create({
  orderSectionContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  cartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
    borderBottomColor: COLORS.lightGray2,
    borderBottomWidth: 1
  },
  cartText: {
    ...FONTS.h3
  },
  locationCardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3
  },
  sectionView: {
    flexDirection: 'row'
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkGray
  },
  sectionText: {
    marginLeft: SIZES.padding,
    ...FONTS.h4
  },
  buttonView: {
    padding: SIZES.padding * 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTouchable: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: SIZES.radius
  },
  buttonText: {
    color: COLORS.white,
    ...FONTS.h2
  },
  iphoneXView: {
    position: 'absolute',
    bottom: -34,
    left: 0,
    right: 0,
    height: 34,
    backgroundColor: COLORS.white
  },
  dotsViewContainer: {
    height: 30
  },
  dotsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.padding
  },
  dot: {
    borderRadius: SIZES.radius,
    marginHorizontal: 6,
  },
})