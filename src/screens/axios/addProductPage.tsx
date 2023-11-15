import { View, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { CustomButton, CustomInput } from 'components/index'

export const AddProductPage = () => {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')

    const handleButton = async () => {
        try {
            if (!productName || !price) {
                Alert.alert('Ürün adı ve fiyatı gereklidir.')
                return;
            }

            const yeniUrun = {
                productName,
                price: parseFloat(price),
            }

            await axios.post('https://northwind.vercel.app/api/products', yeniUrun)

            Alert.alert('Yeni ürün eklendi!')
        } catch (error) {
            console.error('Hata:', error);
            Alert.alert('İşlem sırasında bir sorun oluştu.')
        }
    }

    return (
        <View>
            <CustomInput
                placeHolder="Ürün Adı"
                changeText={setProductName}
            />
            <CustomInput
                placeHolder="Birim Fiyatı"
                changeText={setPrice}
            />
            <CustomButton
                title="Kaydet"
                onPress={handleButton}
            />
        </View>
    )
}
