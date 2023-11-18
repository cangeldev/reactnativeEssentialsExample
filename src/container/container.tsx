import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AsyncStorageScreen, AxiosPage, Firebase, FirebasePushNotification, HomeScreen, LottiePage, ReduxToolkit, VectorIcons } from 'screens'

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
        <Stack.Screen
          name='ReduxToolkit'
          component={ReduxToolkit}
        />
        <Stack.Screen
          name='AxiosPage'
          component={AxiosPage}
        />
        <Stack.Screen
          name='VectorIcons'
          component={VectorIcons}
        />
        <Stack.Screen
          name='LottiePage'
          component={LottiePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
