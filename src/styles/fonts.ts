import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { TextStyle } from 'react-native'
import * as Shadows from './shadows'

export const TTCommonsRegular = 'TTCommons-Regular'
export const TTCommonsBold = 'TTCommons-Bold'
export const TTCommonsLight = 'TTCommons-Light'
export const TTCommonsDemiBold = 'TTCommons-DemiBold'

export const sizes = {
  h1: wp('11%'),
  h2: wp('7%'),
  p: wp('5%'),
}

export const h1: TextStyle = {
  fontFamily: TTCommonsDemiBold,
  fontSize: sizes.h1,
  backgroundColor: 'transparent',
  shadowColor: Shadows.text.color,
  shadowOffset: Shadows.text.offset,
  shadowOpacity: Shadows.text.opacity,
  shadowRadius: Shadows.text.radius,
}

export const h2: TextStyle = {
  fontFamily: TTCommonsDemiBold,
  fontSize: sizes.h2,
  backgroundColor: 'transparent',
}

export const p: TextStyle = {
  fontFamily: TTCommonsRegular,
  fontSize: sizes.p,
}
