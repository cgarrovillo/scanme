/**
 * Scan.me App Entry point
 * https://github.com/facebook/react-native
 * @format
 */
import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from './screens/HomeScreen'
import ManageScreen from './screens/ManageScreen'
import RotateDeviceScreen from './screens/RotateDeviceScreen'
import BarcodeScreen from './screens/BarcodeScreen'

declare const global: { HermesInternal: null | {} }

export type RootStackParams = {
  Home: undefined
  Manage: undefined
  PassTo: undefined
  Barcode: undefined
}

const Stack = createStackNavigator<RootStackParams>()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Manage" component={ManageScreen} />
          <Stack.Screen name="PassTo" component={RotateDeviceScreen} />
          <Stack.Screen name="Barcode" component={BarcodeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
