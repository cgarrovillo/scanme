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
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { LayoutComponent } from 'react-native-navigation'

import { Colors } from '../styles'
import Header from '../components/molecules/header'
import InfoCard from '../components/molecules/infoCard'

declare const global: { HermesInternal: null | {} }

const ManageScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaViewTop} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header>Manage</Header>

          <InfoCard name="Email" value="christian_prieto@yahoo.com" />
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
    flex: 1,
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

// React Navigation
const component: LayoutComponent = {
  name: 'dev.christiang.scanme.ManageScreen',
  options: {
    topBar: {
      background: {
        color: Colors.primary,
      },
    },
  },
}
ManageScreen.component = component
export default ManageScreen
