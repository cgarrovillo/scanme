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
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native'
import {
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import { LayoutComponent, Navigation } from 'react-native-navigation'

import { Colors } from '../styles'
import TextButton from '../components/atoms/text.button'
import Header from '../components/molecules/header'
import InfoCard from '../components/molecules/infoCard'

import ManageScreen from './ManageScreen'

declare const global: { HermesInternal: null | {} }

interface HomeScreenProps {
  componentId: string
}

const HomeScreen = ({ componentId }: HomeScreenProps) => {
  const goToManage = () => {
    Navigation.push(componentId, {
      component: ManageScreen.component,
    })
  }

  return (
    <>
      <SafeAreaView style={styles.safeAreaViewTop} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />

          <InfoCard name="Email" value="christian_prieto@yahoo.com" />

          <TextButton onPress={goToManage}>Manage</TextButton>

          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>YOUR MOOM LOL</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
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
  name: 'dev.christiang.scanme.HomeScreen',
  options: {
    topBar: {
      background: {
        color: Colors.primary,
      },
    },
  },
}
HomeScreen.component = component
export default HomeScreen