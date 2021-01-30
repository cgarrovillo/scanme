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
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'

import { Colors } from '../styles'

import Header from '../components/molecules/header'
import InfoCard from '../components/molecules/infoCard'

const ManageScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
})

export default ManageScreen
