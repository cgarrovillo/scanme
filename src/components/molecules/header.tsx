import React from 'react'
import { View, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { Colors, Borders } from '../../styles'

import H1 from '../atoms/h1.text'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: hp('12%'),
    borderBottomLeftRadius: Borders.radius.roundest,
    borderBottomRightRadius: Borders.radius.roundest,
  },
  text: {
    color: Colors.white,
  },
})

interface Props {
  children?: string
}

const Header: React.FC<Props> = ({ children = 'Scan.me' }) => {
  return (
    <View style={styles.container}>
      <H1>{children}</H1>
    </View>
  )
}

export default Header
