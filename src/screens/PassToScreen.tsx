import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import SystemFontText from '../components/atoms/systemFont.text'

import { Colors, Fonts } from '../styles'

const PassToScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <SystemFontText style={styles.text}>
          Pass device to {'\n'} retailer
        </SystemFontText>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  safeAreaViewBottom: {
    backgroundColor: Colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: Fonts.sizes.h1,
  },
})

export default PassToScreen
