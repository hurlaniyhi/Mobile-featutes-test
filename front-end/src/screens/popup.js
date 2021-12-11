import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button } from "react-native";
//import io from "socket.io-client"
import {NavigationEvents} from 'react-navigation'
import Modal from 'react-native-modal'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'

import {AntDesign, FontAwesome} from '@expo/vector-icons'


const PopUp = () => {

  const [isModal, setIsModal] = useState(false)

  
  return (
    
    <View>
        
            <Button title="popup" onPress={()=>setIsModal(!isModal)}/>
        
       <View style={{height: hp("50%")}}>
        <Modal 
        isVisible={isModal}
        onBackdropPress={()=>setIsModal(!isModal)}
        swipeDirection="right"
        animationIn="slideInUp" 
        animationOut="slideOutUp"
        onSwipeComplete={()=>setIsModal(!isModal)}
        style={styles.modal}
        
        > 
        <View style={{bottom: hp("9%")}}>
       <AntDesign name="checkcircle" size={wp("17%")} color = "white" style={{color: "green"}} />
       <FontAwesome name="circle" size={wp("17%")} color="white" style={{position: "absolute", right: wp("1%"), zIndex: -1}}/>
        </View>
          <Text style={{fontSize: wp("7%"), bottom: hp("7%"), color: "green", fontWeight: "bold"}}>Success!</Text>
          <Text style={{fontSize: wp("4%"),color: "#BDBDBD", bottom: hp("3%"), paddingBottom: hp("6%") }}>
            The product has been ordered!
          </Text> 
          <TouchableOpacity style={styles.modaltext}>
              <Text style={{color: "white"}}>OK</Text>
          </TouchableOpacity>
        
        </Modal>
        </View>
    </View>
  )
};  

const styles = StyleSheet.create({
  modaltext: {
    height: hp("6%"),
    backgroundColor: "green",
    width: wp("50%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
    
  }, 
  modal: {
    // justifyContent: "center",
    alignItems: "center",
    // height: 50,
    marginHorizontal: wp("10%"),
    
    
    backgroundColor: "white",
    borderRadius: 30,
    flex: 1,
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5
  }
});

export default PopUp;
