import React from 'react'
import { View, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

// Styles
import { Colors, Borders } from '../../styles'

// Components
import { LogoBig } from './logo'

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

const Header = () => {
  return (
    <View style={styles.container}>
      <LogoBig />
    </View>
  )
}

export default Header
