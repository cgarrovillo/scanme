import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../styles'

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    color: Colors.dark,
    fontFamily: Fonts.Families.TTCommonsDemiBold,
    fontSize: Fonts.Sizes.h2,
  },
})

interface H2Props {
  children: string
  rest?: any
}

const H2 = ({ children, rest }: H2Props) => {
  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  )
}

export default H2
