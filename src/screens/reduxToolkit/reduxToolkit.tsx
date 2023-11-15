import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CustomButton, CustomInput } from 'components/index'
import { addName, addSurname } from './features/userSlice'
import { RootState } from './features/store'

export const ReduxToolkit = () => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const dispatch = useDispatch()

    const toogleButton = () => {
        dispatch(addName(name))
        dispatch(addSurname(surname))
    }

    const handleName = (inputText: string) => {
        setName(inputText)
    }

    const handleSurname = (inputText: string) => {
        setSurname(inputText)
    }

    const showName = useSelector((state: RootState) => state.users.userInfo.name)
    const showSurname = useSelector((state: RootState) => state.users.userInfo.surname)

    return (
        <View>
            <CustomInput
                placeHolder='Adınızı Giriniz.'
                changeText={handleName}
            />
            <CustomInput
                placeHolder='Soyadınızı Giriniz.'
                changeText={handleSurname}
            />
            <CustomButton
                title='Kaydet'
                onPress={toogleButton}
            />
            <Text>
                Name:{showName}
            </Text>
            <Text>
                Surame:{showSurname}
            </Text>
        </View>
    )
}