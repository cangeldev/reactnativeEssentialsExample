import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AsyncStorageScreen, Firebase, FirebasePushNotification, HomeScreen } from 'screens'

export const Container = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
        />
        <Stack.Screen
          name='Firebase'
          component={Firebase}
        />
        <Stack.Screen
          name='AsyncStorageScreen'
          component={AsyncStorageScreen}
        />
        <Stack.Screen
          name='FirebasePushNotification'
          component={FirebasePushNotification}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
