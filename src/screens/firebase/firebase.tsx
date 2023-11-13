import { View } from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomInput } from 'components/index'
import { handleCreated, handleLogin, handleSignOut } from './auth'

export const Firebase = () => {

    const [mail, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmailChange = (inputText: string) => {
        setEmail(inputText)
    }

    const handlePasswordChange = (inputText: string) => {
        setPassword(inputText)
    }
    return (
        <View>
            <CustomInput
                placeHolder='Email adresinizi Giriniz.'
                changeText={handleEmailChange}
            />
            <CustomInput
                placeHolder='Şifrenizi Giriniz.'
                changeText={handlePasswordChange}
                secureText={true}
            />
            <CustomButton
                onPress={() => handleCreated(mail, password)}
                title='Kayıt Ol'
            />
            <CustomButton
                onPress={() => handleLogin(mail, password)}
                title='Giriş Yap'
            />
            <CustomButton
                onPress={() => handleSignOut()}
                title='Çıkış Yap'
            />
        </View>
    )
}