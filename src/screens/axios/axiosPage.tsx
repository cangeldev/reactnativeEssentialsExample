import { View } from 'react-native'
import React from 'react'
import { AddProductPage } from './addProductPage'
import { ProductListPage } from './ProductListPage'

export const AxiosPage = () => {

    return (
        <View>
            <AddProductPage />
            <ProductListPage />
        </View>
    )
}
