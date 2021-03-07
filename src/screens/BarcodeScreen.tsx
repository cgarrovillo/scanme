import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  Dimensions,
} from 'react-native'
import Barcode from 'react-native-barcode-svg'

import { Borders, Colors, Fonts, Shadows } from '../styles'
// import InfoCard from '../components/molecules/infoCard'

const BarcodeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <SafeAreaView style={styles.safeAreaViewTop} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.leftContainer}>
            <View style={styles.topTextContainer}>
              <Text style={[styles.topText, styles.rotate]}>
                Scan this for my email
              </Text>
            </View>
            <View style={[styles.barcodeContainer, styles.rotate]}>
              <Barcode
                value="me@christiang.dev"
                format="CODE128B"
                singleBarWidth={1.5}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  safeAreaViewTop: {
    backgroundColor: Colors.white,
  },
  safeAreaViewBottom: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  rotate: {
    transform: [{ rotate: '90deg' }],
  },
  leftContainer: {
    ...Shadows.primary,
    backgroundColor: Colors.white,
    borderBottomRightRadius: Borders.radius.roundest,
    borderBottomLeftRadius: Borders.radius.roundest,
    flexDirection: 'row',
  },
  topTextContainer: {
    height: height - height * 0.4,
  },
  topText: {
    ...Fonts.ios,
    ...Shadows.text,
    fontSize: Fonts.sizes.h2,
    color: Colors.dark,
    textAlign: 'center',
  },
  barcodeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default BarcodeScreen
