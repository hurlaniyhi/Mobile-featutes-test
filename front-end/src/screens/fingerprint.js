import React, { useState, useEffect } from "react";
import { Button, TextInput as Input, View, Text } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';


const fingerprint = () => {


    useEffect(()=>{
       checkDeviceForHardware()
    }, [])

    const checkDeviceForHardware = async () => {
        let compatible = await LocalAuthentication.hasHardwareAsync();
        
        if(compatible){
            let fingerprints = await LocalAuthentication.isEnrolledAsync();
            if(fingerprints){
                let result = await LocalAuthentication.authenticateAsync(
                    {
                        promptMessage: 'Authenticate yourself',
                        cancelLabel: 'cancel biometric',
                        disableDeviceFallback: true, // will not allow the use of pattern as other option
                        //fallbackLabel: "Hide biometric"
                    }
                );

                console.log(result.success);
                if(result.success){
                    alert("You are authenticated")
                }
            }
            else{
                alert("Kindly configure your biometric on your phone")
            }
        }
        else{
            alert("You phone did not support biometric")
        }
      };
    


    return (
        <View style={styles.container}>
        <Input style={styles.inputField} placeholder="Username" autoCompleteType="username"></Input>
        <Input style={styles.inputField} placeholder="Password" autoCompleteType="password" secureTextEntry={true}></Input>
        <Button onPress={checkDeviceForHardware} title="Login"/>
    </View>
    );

}

const styles = {
    container: {
       flex: 1, 
       backgroundColor: "white",
       justifyContent: "flex-start",
       alignItems: "center",
       padding: 10
    },
    inputField: {
        borderWidth: 1,
        borderColor: "black",
        width: 300,
        marginBottom: 10,
        paddingHorizontal: 5
    }
}

export default fingerprint