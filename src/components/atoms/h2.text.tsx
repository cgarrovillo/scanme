import React from 'react'
import { Text, StyleSheet } from 'react-native'

// Styles
import { Colors, Fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'left',
    color: Colors.dark,
    fontFamily: Fonts.TTCommonsDemiBold,
    fontSize: Fonts.sizes.h2,
  },
})

interface H2Props {
  children: string
}

const H2 = ({ children }: H2Props) => {
  return <Text style={styles.text}>{children}</Text>
}

export default H2
