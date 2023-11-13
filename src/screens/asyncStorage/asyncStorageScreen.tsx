import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CustomButton } from 'components/index'

export const AsyncStorageScreen = () => {

    const [username, setUsername] = useState('')
    
    useEffect(() => {
        getUsername()
    }, [])

    const saveUsername = async (username: string) => {
        try {
            await AsyncStorage.setItem('username', username)
            console.log('Kullanıcı adı kaydedildi:', username)
        } catch (error) {
            console.error('Kullanıcı adını kaydetme hatası:', error)
        }
    }

    const getUsername = async () => {
        try {
            const username = await AsyncStorage.getItem('username')
            if (username !== null) {
                setUsername(username)
                console.log('Kullanıcı adı:', username)
            } else {
                console.log('Kullanıcı adı bulunamadı.')
            }
        } catch (error) {
            console.error('Kullanıcı adını alma hatası:', error)
        }
    }

    const removeUsername = async () => {
        try {
            await AsyncStorage.removeItem("username")
            console.log('Kullanıcı Başarıyla Silindi')
        } catch (error) {
            console.error('Kullanıcı Silme hatası:', error)
        }
    }

    return (
        <View>
            <Text style={{ textAlign: "center" }}>
                {username}
            </Text>
            <CustomButton
                onPress={() => saveUsername("Can GEL")}
                title='Kaydet'
            />
            <CustomButton
                onPress={removeUsername}
                title='Sil'
            />
        </View>
    )
}