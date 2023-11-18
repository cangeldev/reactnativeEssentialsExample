import { View, StyleSheet } from 'react-native'
import React from 'react'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconA from 'react-native-vector-icons/AntDesign'

export const VectorIcons = () => {
    return (
        <View>
            <IconF
                name="facebook"
                size={24}
                style={style.iconF}
            />
            <IconA
                name="infocirlce"
                size={24}
                style={style.iconA}
            />
        </View>
    )
}

const style = StyleSheet.create({
    iconF: {
        fontSize: 50,
        alignSelf: "center",
        color: "blue"
    },
    iconA: {
        fontSize: 20,
        color: "red"
    }
})