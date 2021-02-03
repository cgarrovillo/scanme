import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { TextStyle } from 'react-native'
import * as Shadows from './shadows'

export const TTCommonsRegular = 'TTCommons-Regular'
export const TTCommonsBold = 'TTCommons-Bold'
export const TTCommonsLight = 'TTCommons-Light'
export const TTCommonsDemiBold = 'TTCommons-DemiBold'
export const InterSemiBold = 'Inter-SemiBold'

export const sizes = {
  h1: wp('11%'),
  h2: wp('9%'),
  h3: wp('7%'),
  p: wp('5%'),
}

export const h1: TextStyle = {
  ...Shadows.primary,
  fontFamily: TTCommonsDemiBold,
  fontSize: sizes.h1,
  backgroundColor: 'transparent',
}

export const h2: TextStyle = {
  fontFamily: TTCommonsDemiBold,
  fontSize: sizes.h2,
  backgroundColor: 'transparent',
}

export const h3: TextStyle = {
  fontFamily: TTCommonsDemiBold,
  fontSize: sizes.h3,
  backgroundColor: 'transparent',
}

export const p: TextStyle = {
  fontFamily: TTCommonsRegular,
  fontSize: sizes.p,
}

export const ios: TextStyle = {
  fontFamily: InterSemiBold,
  letterSpacing: -1.75,
}
