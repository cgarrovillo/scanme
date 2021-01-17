import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../styles'

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    color: Colors.dark,
    fontFamily: Fonts.Families.TTCommonsRegular,
    fontSize: Fonts.Sizes.p,
  },
})

interface PProps {
  children: string
  rest?: any
}

const P = ({ children, rest }: PProps) => {
  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  )
}

export default P
