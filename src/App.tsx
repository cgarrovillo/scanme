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
import PassToScreen from './screens/PassToScreen'

declare const global: { HermesInternal: null | {} }

export type RootStackParams = {
  Home: undefined
  Manage: undefined
  PassTo: undefined
}

const Stack = createStackNavigator<RootStackParams>()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="PassTo">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Manage" component={ManageScreen} />
          <Stack.Screen name="PassTo" component={PassToScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
