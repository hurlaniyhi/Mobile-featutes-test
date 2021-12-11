import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';


function DisplayMode(){

    const colorScheme = useColorScheme();
    alert(colorScheme)
    const TextColor = colorScheme === "light" ? styles.lightText : styles.darkText


    return(
        <View>
            <Text style={TextColor}>Ridwan Olaniyi</Text>
        </View>
    )
}

export default DisplayMode


const styles = StyleSheet.create({
    lightText: {
        color: "black"
    },
    darkText: {
        color: "green"
    }
})