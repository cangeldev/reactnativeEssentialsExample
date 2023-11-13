import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AsyncStorage, Firebase, HomeScreen } from 'screens'

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
          name='AsyncStorage'
          component={AsyncStorage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
