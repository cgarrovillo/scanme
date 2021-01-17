import React from 'react'
import { Text, StyleSheet } from 'react-native'

// Styles
import { Colors, Fonts, Shadows } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: Colors.white,
    fontFamily: Fonts.TTCommonsDemiBold,
    fontSize: Fonts.sizes.h1,
    shadowColor: Shadows.text.color,
    shadowOffset: Shadows.text.offset,
    shadowOpacity: Shadows.text.opacity,
    shadowRadius: Shadows.text.radius,
  },
})

interface H1Props {
  children: string
}

const H1 = ({ children }: H1Props) => {
  return <Text style={styles.text}>{children}</Text>
}

export default H1
