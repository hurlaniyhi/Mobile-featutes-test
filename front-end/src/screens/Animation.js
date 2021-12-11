import React, {useState, useRef} from 'react';
import {Text, TouchableOpacity, Image, Button} from 'react-native'
import * as Animatable from 'react-native-animatable';
import pics from '../../test/ak.jpg';


const MyAnimation = () => {
    const [fontSize, setFontSize] = useState(null)
    const [changeMe, setChangeMe] = useState(null)
    let manuallAnimation = useRef(null)

    function slideIn(){
        manuallAnimation.SlideInRight()
    }

    return(
        <>
            {/* <Animatable.Text animation="zoomInUp"><Text style={{paddingTop: 10, paddingBottom: 30}}>Zoom me up, Scotty</Text></Animatable.Text> */}
            <Animatable.Text 
                animation="slideInDown" 
                iterationCount={5} 
                direction="alternate"
                //delay={3000}
                //duration={5000}
                style={{paddingTop: 20, paddingBottom: 20}}
                >
                    Up and down you go
            </Animatable.Text>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', fontSize: 35 }}>❤️</Animatable.Text>

            <TouchableOpacity onPress={() => setFontSize((fontSize || 10) + 5 )}>
                <Animatable.Text transition="fontSize" style={{fontSize: fontSize || 10}}>Size me up, Scotty</Animatable.Text>
            </TouchableOpacity>

            <Animatable.View transition={["fontSize"]}>
                <Animatable.Image animation="bounceInRight" duration={2000} source={pics} style = {{width: 180, height: 200}}></Animatable.Image>
                <TouchableOpacity  onPress={() => setFontSize((fontSize || 10) - 5 )}><Text style={{fontSize: fontSize}}>View transition on </Text></TouchableOpacity>
            </Animatable.View>

            <Animatable.Text ref={manuallAnimation} duration={3000}>I will be animated manually</Animatable.Text>
            <TouchableOpacity onPress={() => slideIn}>
                <Button title="Trigger Animation" />
            </TouchableOpacity>
            
        </>
    )
}
export default MyAnimation