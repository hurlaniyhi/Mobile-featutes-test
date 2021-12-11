import React, {useEffect, useState} from 'react';
import { Button, TextInput as Input, View, StyleSheet, Text } from "react-native";
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'


const CreateExcel = () => {
    const [region, setRegion] = useState({latitude: null, longitude: null, compass: null});



    const getPermission = async () => {
        try{
          await requestPermissionsAsync();  
          const sub = await watchPositionAsync({     
            accuracy: Accuracy.BestForNavigation, 
            timeInterval: 1000, 
            distanceInterval: 10 
         
          }, (location) =>{
              setRegion({
                  latitude: location.coords.latitude, 
                  longitude: location.coords.longitude,
                  compass: getCompass(location.coords.latitude, location.coords.longitude)
                })
            }  
          )
    
        } catch (e){
          console.log(e)
        }
      }
    useEffect(()=>{
       getPermission()
    }, [])

    const getCompass = (latitude, longitude) =>{
        let phiK = 21.4 * Math.PI / 180.0;
        let lambdaK = 39.8 * Math.PI/180.0;
        let phi = latitude*Math.PI/180.0;
        let lambda = longitude*Math.PI/180.0;
        let psi = 180.0/Math.PI * Math.atan2(Math.sin(lambdaK-lambda),Math.cos(phi)*Math.tan(phiK)-Math.sin(phi)*Math.cos(lambdaK-lambda));
        console.log({compass: psi})
        return Math.round(psi);
    }


    return(
        <View>
            <Text style={{fontSize: 25, color: "green"}}>الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</Text>
            <View style={styles.compassContainer}>
                <View style= {[styles.obj, {transform: [{rotate: `${region.compass || 0}deg`}]}]}></View>
                <Text style={styles.circle}></Text>
            </View>
            <Button title="Create excel file"/>
        </View>
    )
}

const styles = StyleSheet.create({
    obj:{
        //transform: [{rotate: "-133deg"}],
        height: 60,
        backgroundColor: 'blue',
        width: 20
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: 'yellow',
    },
    compassContainer: {
        backgroundColor: "green",
        height: 120,
        position: "absolute",  
        left: wp('50%'),
        top: wp('50%'),
        width: wp('10%'),
        //transform: [{translateX: -50}, {translateY: -50}]

    }
})
export default CreateExcel