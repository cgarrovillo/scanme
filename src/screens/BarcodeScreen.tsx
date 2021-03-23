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
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.leftContainer}>
            <View style={[styles.rotate]}>
              <Barcode
                value="me@christiang.dev"
                format="CODE128B"
                singleBarWidth={1.5}
              />
            </View>
            <View>
              <Text style={[styles.leftText, styles.rotate]}>
                Use the store's barcode scanner to scan my email
              </Text>
            </View>
          </View>

          <View>
            <Text style={[styles.rightText, styles.rotate]}>Or...</Text>
          </View>

          <View style={styles.rightContainer}>
            <View>
              <Text style={[styles.rightText, styles.rotate]}>
                christian_prieto@yahoo.com
              </Text>
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
  scrollView: {
    display: 'flex',
    flexDirection: 'column',
  },
  rotate: {
    // transform: [{ rotate: '90deg' }, { translateX: 200 }],
    transform: [{ rotate: '90deg' }],
  },
  leftContainer: {
    ...Shadows.primary,
    backgroundColor: Colors.white,
    borderBottomRightRadius: Borders.radius.roundest,
    borderBottomLeftRadius: Borders.radius.roundest,
    height: height - height * 0.3,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  leftText: {
    ...Fonts.ios,
    fontSize: Fonts.sizes.h2,
    color: Colors.dark,
    textAlign: 'center',
  },
  rightText: {
    ...Fonts.ios,
    ...Shadows.text,
    fontSize: Fonts.sizes.h2,
    color: Colors.white,
    textAlign: 'center',
    marginVertical: 70,
  },
  rightContainer: {
    height: height - height * 0.1,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    paddingVertical: 50,
  },
})

export default BarcodeScreen
