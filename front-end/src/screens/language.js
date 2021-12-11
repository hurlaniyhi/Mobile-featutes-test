import React, { useEffect, Component } from 'react'
import {Text, View, TextInput} from 'react-native'
import {i18n, localizedStrings}from "../languages"

const Languages = () => {
    i18n.locale = "ar" // setting to another language when using i18n
   
    return(
        <View>
            <Text>{i18n.t('welcome')}</Text>
            <TextInput style={{borderWidth: 2, borderColor: "black"}}></TextInput>
            <Text>{localizedStrings["es_ES"].subtitle}</Text>
        </View>
    )
}
export default Languages