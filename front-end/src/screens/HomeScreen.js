import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import io from "socket.io-client"
import {NavigationEvents} from 'react-navigation'
import AutoScroll from "./autoScroll"


const HomeScreen = () => {

  const [chat, setChat] = useState("")
  const [sms, setSms] = useState([])

  function websocket(){
   
    socket = io("http://192.168.43.159:3000") // make the connection to the backend
    
    socket.on ("chat message", msg => {     // receive a message from the backend
      
      setSms(msg)
      console.log(sms)
  })

  }

  useEffect(() => {
    websocket()   
  }, []);

  function sendChat(){
    this.socket.emit("chat message", {chat: chat, user: "ridwan"})   // send a chat to the backend
    setChat("")
  }

  var show = sms.map(the_chat => (
     <Text key={the_chat} style = {{paddingHorizontal: 15, paddingVertical: 10}}>
       {the_chat}
       </Text>)
  )

  
  return (
    
    <View>
      <TextInput 
      style={styles.input} 
      autoCorrect={false} 
      value={chat} 
      onChangeText={(newValue) => setChat(newValue)}  
      onSubmitEditing={sendChat}
      />
    {show}   

    <AutoScroll />
    </View>
  )
};  

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }, 
  input: {
    marginHorizontal: 15,
    borderWidth: 1,
    height: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollContainer: {
    flex: 1
  },
  sliderContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 80,
    alignSelf: 'center'
  },
  sliderBtn: {
    height: 13,
    width: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  sliderBtnSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  sliderBtnContainer: {
    flexDirection: 'row', marginBottom: 24
  },
});

export default HomeScreen;
