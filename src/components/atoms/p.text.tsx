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
    fontFamily: Fonts.TTCommonsRegular,
    fontSize: Fonts.sizes.p,
  },
})

interface PProps {
  children: string
}

const P = ({ children }: PProps) => {
  return <Text style={styles.text}>{children}</Text>
}

export default P
