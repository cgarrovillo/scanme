import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'

import { Fonts } from '../../styles'

interface Props {
  children: string | string[]
  style: TextStyle
}

// In simulator: Cmd + D debug menu, Cmd + R reload
const SystemFontText: React.FC<Props> = ({ children, style }) => {
  const styles = StyleSheet.create({
    text: {
      ...Fonts.ios,
      ...style,
    },
  })

  return (
    <Text style={styles.text} {...style}>
      {children}
    </Text>
  )
}

export default SystemFontText
