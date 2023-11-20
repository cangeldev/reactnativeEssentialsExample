import { View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNavigation } from './tabNavigation'
import { DrawerScreenTwo } from 'screens'

export const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator >
            <Drawer.Screen
                name='TabNavigation'
                component={TabNavigation}
            />
            <Drawer.Screen
                name='DrawerScreenTwo'
                component={DrawerScreenTwo}
            />
        </Drawer.Navigator>
    )
}
