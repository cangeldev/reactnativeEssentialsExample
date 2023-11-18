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
            <CustomButton
                title='AsyncStorage'
                onPress={() => navigation.navigate("AsyncStorageScreen")}
            />
            <CustomButton
                title='FirebasePushNotification'
                onPress={() => navigation.navigate("FirebasePushNotification")}
            />
            <CustomButton
                title='ReduxToolkit'
                onPress={() => navigation.navigate("ReduxToolkit")}
            />
            <CustomButton
                title='Axios Page'
                onPress={() => navigation.navigate("AxiosPage")}
            />
            <CustomButton
                title='VectorIcons Page'
                onPress={() => navigation.navigate("VectorIcons")}
            />
            <CustomButton
                title='Lottie Page'
                onPress={() => navigation.navigate("LottiePage")}
            />
            <CustomButton
                title='İ18next Multi Language Page'
                onPress={() => navigation.navigate("I18nextPage")}
            />
        </View>
    )
}