import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackNavigation } from './stackNavigation'
import { TabScreenThree, TabScreenTwo } from 'screens'

export const TabNavigation = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='StackNavigation'
                component={StackNavigation}
            />
            <Tab.Screen
                name='TabScreenTwo'
                component={TabScreenTwo}
            />
            <Tab.Screen
                name='TabScreenThree'
                component={TabScreenThree}
            />
        </Tab.Navigator>
    )
}
