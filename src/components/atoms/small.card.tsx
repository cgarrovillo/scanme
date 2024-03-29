import React from 'react'
import { View, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

// Styles
import { Colors, Borders, Shadows } from '../../styles'

const styles = StyleSheet.create({
  container: {
    margin: hp('3%'),
    padding: hp('3%'),
    borderRadius: Borders.radius.round,
    backgroundColor: Colors.white,
    shadowColor: Shadows.primary.color,
    shadowOffset: Shadows.primary.offset,
    shadowOpacity: Shadows.primary.opacity,
    shadowRadius: Shadows.primary.radius,
  },
})

interface SmallCardProps {
  children: Element
}

const SmallCard = ({ children }: SmallCardProps) => {
  return <View style={styles.container}>{children}</View>
}

export default SmallCard
