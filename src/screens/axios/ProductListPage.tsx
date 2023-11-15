import { View } from 'react-native'
import React from 'react'
import axios, { AxiosResponse } from 'axios'

export const ProductListPage = () => {

    async function getUsers(): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get('https://northwind.vercel.app/api/products')
            if (response.status === 200) {
                const users = response.data
                const userNames: string[] = users.map((user: any) => user.productName)
                console.log('Product Name:', userNames)
            } else {
                console.error('Beklenmeyen bir durum oluştu. Durum kodu:', response.status)
            }
        } catch (error) {
            console.error('Bir hata oluştu:', error)
        }
    }

    getUsers()

    return (
        <View>

        </View>
    )

}