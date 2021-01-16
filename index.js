/**
 * Top-level Entry point for React Native.
 * This file holds most configuration options for React-Native-Navigation
 * @format
 */

import { Navigation } from 'react-native-navigation'
import HomeScreen from './src/pages/HomeScreen'
import ManageScreen from './src/pages/ManageScreen'

/**
 * Register components with their unique name, and
 * listen to the appLaunched event and call .setRoot
 * https://wix.github.io/react-native-navigation/docs/app-launch
 * */
Navigation.registerComponent(HomeScreen.component.name, () => HomeScreen)
Navigation.registerComponent(ManageScreen.component.name, () => ManageScreen)

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: HomeScreen.component,
          },
        ],
      },
    },
  })
})
