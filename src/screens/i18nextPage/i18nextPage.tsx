import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import i18n from './i18next'
import { useTranslation } from 'react-i18next'

export const I18nextPage = () => {

    const { t } = useTranslation()

    const toggleButton = () => {
        const newLanguage = i18n.language === 'en' ? 'tr' : 'en';
        i18n.changeLanguage(newLanguage)
    }
    return (
        <View>
            <View style={style.container}>
                <Text style={style.text}>
                    {t('greeting')}
                </Text>
                <Button
                    title='TR-EN'
                    onPress={toggleButton}
                />
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
    },
})