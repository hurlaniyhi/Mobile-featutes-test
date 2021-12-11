import React, {useState, useRef} from 'react';
import {Text} from 'react-native'
import PhoneInputField from "react-native-phone-number-input";


const PhoneInput = () => {

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef(null);

    return(
        <>
        <Text>Value: {value}</Text>
        <Text style={{paddingBottom: 30}}>Formatted value: {formattedValue}</Text>
        <PhoneInputField
            ref={phoneInput}
            defaultValue={value}
            defaultCode="NG"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
        </>
    )
}

export default PhoneInput