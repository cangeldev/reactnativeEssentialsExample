import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigation } from 'navigation/drawerNavigation'

export const Container = () => {

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
}
