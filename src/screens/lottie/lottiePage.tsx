import { View, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export const LottiePage = () => {

    return (
        <View>
            <LottieView
                source={require('../../assets/lottie/cat.json')}
                autoPlay
                loop
                style={style.lottieStyle}
            />
        </View>
    )
}
const style = StyleSheet.create({
    lottieStyle: {
        width: "50%",
        height: "50%",
        alignSelf: "center"
    }
})