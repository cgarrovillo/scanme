import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import Barcode from 'react-native-barcode-svg'

import { Borders, Colors, Fonts, Shadows } from '../styles'
import InfoCard from '../components/molecules/infoCard'

const BarcodeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <SafeAreaView style={styles.safeAreaViewTop} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.topContainer}>
            <View style={styles.topTextContainer}>
              <Text style={styles.topText}>Scan this for my email</Text>
            </View>
            <View style={styles.barcodeContainer}>
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

const styles = StyleSheet.create({
  safeAreaViewTop: {
    backgroundColor: Colors.white,
  },
  safeAreaViewBottom: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  topContainer: {
    ...Shadows.primary,
    backgroundColor: Colors.white,
    paddingVertical: hp('11%'),
    borderBottomLeftRadius: Borders.radius.roundest,
    borderBottomRightRadius: Borders.radius.roundest,
  },
  topTextContainer: {
    paddingHorizontal: wp('20%'),
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
