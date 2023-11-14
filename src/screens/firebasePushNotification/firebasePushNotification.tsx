import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NotificationListener, RequestUserPermission } from './pushNotificationHelper'

export const FirebasePushNotification = () => {
    useEffect(() => {
        RequestUserPermission()
        NotificationListener()
    }, [])
    return (
        <View>
            <Text>firebasePushNotification</Text>
        </View>
    )
}
