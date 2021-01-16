import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { Colors, Fonts, Shadows } from '../../styles'

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: Colors.white,
    fontFamily: Fonts.Families.TTCommonsDemiBold,
    fontSize: Fonts.Sizes.h1,
    shadowColor: Shadows.text.color,
    shadowOffset: Shadows.text.offset,
    shadowOpacity: Shadows.text.opacity,
    shadowRadius: Shadows.text.radius,
  },
})

interface H1Props {
  children: string
  rest?: any
}

const H1 = ({ children, rest }: H1Props) => {
  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  )
}

export default H1