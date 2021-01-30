import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { Colors, Borders, Fonts, Shadows } from '../../styles'

const styles = StyleSheet.create({
  container: {
    ...Shadows.primary,
    backgroundColor: Colors.primary,
    paddingVertical: hp('12%'),
    borderBottomLeftRadius: Borders.radius.roundest,
    borderBottomRightRadius: Borders.radius.roundest,
  },
  text: {
    ...Fonts.h1,
    ...Shadows.text,
    color: Colors.white,
    textAlign: 'center',
  },
})

interface Props {
  children?: string
}

const Header: React.FC<Props> = ({ children = 'Scan.me' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default Header
