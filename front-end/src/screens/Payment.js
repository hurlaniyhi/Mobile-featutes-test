import React, {useEffect, useState, useRef} from "react";

import {Text, View, Button, TouchableOpacity} from 'react-native'
import PaystackWebView from "react-native-paystack-webview";
// also make sure you install react-native-webview



const Payment = (props) => {
   
  var transID = ''+Math.floor((Math.random() * 1000000000) + 1)
    return(
        <>
            <PaystackWebView
                buttonText="Pay Now"
                showPayButton={false}
                paystackKey="pk_test_910fb6ac978feb766f4418e67340055a45efdfa6"
                amount={10}
                billingEmail="fintech.request@gmail.com"
                billingMobile="08156170991"
                billingName="Ridwan Olaniyi"
                ActivityIndicatorColor="green"
                onCancel={(e) => {
                // handle response here
                }}
                onSuccess={(res) => {
                   //alert("Successful")
                   console.log(res)
                   props.navigation.navigate("checkbox")
                }}
                autoStart={true}
                refNumber={transID} 
        
             />
             
        </>
    )
}

export default Payment