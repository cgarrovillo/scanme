/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Colors } from '../styles'

import Header from '../components/molecules/header'
import InfoCard from '../components/molecules/infoCard'
import TextButton from '../components/atoms/text.button'
import { RootStackParams } from '../App'

declare const global: { HermesInternal: null | {} }

// In simulator: Cmd + D debug menu, Cmd + R reload
const HomeScreen = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primary}
        translucent
      />
      <SafeAreaView style={styles.safeAreaViewTop} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <InfoCard name="Email" value="christian_prieto@yahoo.com" />

          <TextButton onPress={() => navigation.navigate('Manage')}>
            Manage
          </TextButton>

          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  safeAreaViewTop: {
    backgroundColor: Colors.primary,
  },
  safeAreaViewBottom: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export type HomeScreenProp = StackNavigationProp<RootStackParams, 'Home'>
type Props = {
  navigation: HomeScreenProp
}

export default HomeScreen