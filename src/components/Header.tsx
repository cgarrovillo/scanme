import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Styles
import { Colors } from '../styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 50,
  },
  text: {
    color: Colors.white,
  },
})

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan.me</Text>
    </View>
  )
}

export default Header
