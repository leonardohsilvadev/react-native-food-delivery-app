import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

export const Styles = (isSelected) => StyleSheet.create({
  categoriesView: {
    padding: SIZES.padding * 2
  },
  categoriesTitle: {
    ...FONTS.h1
  },
  listContainer: {
    paddingHorizontal: SIZES.padding * 2
  },
  categoryTouchable: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.padding,
    backgroundColor: isSelected ? COLORS.primary : COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isSelected ? COLORS.white : COLORS.lightGray
  },
  icon: {
    width: 30,
    height: 30
  },
  categoryName: {
    marginTop: SIZES.padding,
    color: isSelected ? COLORS.white : COLORS.black,
    ...FONTS.body5
  }
})