import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, TextInput, Picker, Button } from "react-native";
import {CheckBox} from 'native-base'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'

//import {Picker} from '@react-native-community/picker';


const CheckboxScreen = () => {

  const [sell, setSell] = useState(false)
  const [buy, setBuy] = useState(false)
  const [userType, setUserType] = useState("")


  
  
  function handleChange(){
      

      if((sell == true && buy == false) || (buy == true && sell == false)){
          setBuy(!buy)
          setSell(!sell)
      }else{
          setSell(!sell)
          
      }

   
  }

  const handleChange2 = async() => {
     
    if((sell == true && buy == false) || (buy == true && sell == false)){
        setBuy(!buy)
        setSell(!sell)
    }
    else{
        setBuy(!buy)
    }


}


const submit= async()=>{

    if(sell == true){
       var type = "seller"
     }
     else if(buy == true){
       var type = "buyer"
     } 
    alert(type)
}


  
  
  return (
    <>
    <View style={styles.input}>
        <CheckBox checked={sell} color="green" onPress={()=>handleChange()} style={styles.box}/>
        <Text style={styles.text}>Seller</Text>

        <CheckBox checked={buy} color="green" onPress={()=>handleChange2()} style={[styles.box, {marginLeft: wp("15%")}]}/>
        <Text style={styles.text}>Buyer</Text>
    </View>
    
    <View style={styles.select}>    
    <Picker 
      selectedValue={userType}
      style={styles.picker}
      onValueChange={(itemValue) =>setUserType(itemValue)}
      placeholder={{label: "Great", value: "yea"}}
    
    >
      <Picker.Item label="Select user type" value=""/>
      <Picker.Item label="Buyer" value="buyer"/>
      <Picker.Item label="Seller" value="seller" />
    </Picker>
    </View>
    <Button title="SUBMIT" onPress={()=> submit()}/>
    </>
  )
};  

const styles = StyleSheet.create({
  text: {
    fontSize: wp("5%"),
    paddingLeft: wp("4%"),
    fontWeight: "bold"

  }, 
  box:{
      height: hp("4%"),
      width: wp("7%"),
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5
  },

  input: {
    marginHorizontal: 15,
    height: hp("7%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
    
  },
  select: {
    height: hp("8%"), 
    width: wp("80%"), 
    marginHorizontal: wp("10%"), 
    borderRadius: 10, 
    borderWidth: 1, 
    //backgroundColor: "whitesmoke", 
    borderColor: "#C3C3C3",
    textAlign: "center",
    marginBottom: hp("10%")
  },
  picker:{ 
    width: wp("80%"), 
    height: hp("8%"), 
  }
});

export default CheckboxScreen;
