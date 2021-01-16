import React from 'react'
import { TouchableOpacity, Text, StyleSheet, TextProps } from 'react-native'

import { Colors, Fonts, Shadows } from '../../styles'

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: Colors.dark,
    fontFamily: Fonts.Families.TTCommonsDemiBold,
    fontSize: Fonts.Sizes.p,
    shadowColor: Shadows.text.color,
    shadowOffset: Shadows.text.offset,
    shadowOpacity: Shadows.text.opacity,
    shadowRadius: Shadows.text.radius,
  },
})

interface TextButtonProps extends TextProps {
  children: string
  rest?: any
}

const TextButton = ({ children, rest }: TextButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default TextButton
