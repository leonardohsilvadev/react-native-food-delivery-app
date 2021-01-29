import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50
  },
  iconLeft: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center'
  },
  icon: {
    width: 30,
    height: 30
  },
  locationView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  locationBackground: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius
  },
  locationText: {
    ...FONTS.h3
  },
  iconRight: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center'
  }
})