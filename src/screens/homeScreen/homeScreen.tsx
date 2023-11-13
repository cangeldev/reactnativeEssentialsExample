import { View } from 'react-native'
import React from 'react'
import { CustomButton } from 'components/index'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
    
    const navigation = useNavigation<any>()

    return (
        <View>
            <CustomButton
                title='Firebase Page'
                onPress={() => navigation.navigate("Firebase")}
            />
        </View>
    )
}