/**
 * Scan.me App Entry point
 * https://github.com/facebook/react-native
 * @format
 */
import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import ManageScreen from './screens/ManageScreen'

declare const global: { HermesInternal: null | {} }
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Manage" component={ManageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
