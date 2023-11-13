import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomButton {
    title: string,
    onPress: () => void
}
export const CustomButton: FC<ICustomButton> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={style.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
