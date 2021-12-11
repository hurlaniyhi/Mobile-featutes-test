import React, {useState, Component} from 'react'
import {StyleSheet, View, Text, Platform, Image, SafeAreaView, StatusBar} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'

  import {AntDesign, FontAwesome5} from '@expo/vector-icons'


const slides = [
    {
      key: 's1',
      text: 'Best Recharge offers',
      title: 'Mobile Recharge',
      image: {
        uri: "https://imgur.com/7ClQj9M.png"
      },
      backgroundColor: '#00FF00',
    },
    {
      key: 's2',
      title: 'Flight Booking',
      text: 'Upto 25% off on Domestic Flights',
      image: require("../../assets/icon.png"),
      backgroundColor: '#00FF00',
    },
    {
      key: 's3',
      title: 'Great Offers',
      text: 'Enjoy Great offers on our all services',
      image: {
        uri: "https://imgur.com/7ClQj9M.png"
      },
      backgroundColor: '#00FF00',
    },
  ];
  
  export default class App1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showRealApp: false,
      };
    }
   
    _onDone = () => {
      this.setState({ showRealApp: true });
    };
    _onSkip = () => {
      this.setState({ showRealApp: true });
    };
    _renderItem = ({ item }) => {
        return (
            <View style={{backgroundColor: "green", flex: 1}}>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={item.image} style={{marginHorizontal: wp("20%")}}/>
              <Text style={styles.text}>{item.text}</Text>
            </View>
        )
    };

    _renderNextButton = () => {
      return (
        <View style={{justifyContent: "center", alignItems: "center"
        
        }}>
          <FontAwesome5
            name="arrow-circle-right"
            color="rgba(255, 255, 255, .9)"
            size={45}
          />
        </View>
      );
    };

    _renderDoneButton = () => {
      return (
        <View style={styles.buttonCircle}>
          <AntDesign
            name="checkcircle"
            color="rgba(255, 255, 255, .9)"
            size={45}
          />
        </View>
      );
    };

    
  
    render() {
      if (this.state.showRealApp) {
        return (
          this.props.navigation.navigate("checkbox")
        );
      } else {
        return (
            <>
        <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1}}>  
          <AppIntroSlider
            data={slides}
            renderItem={this._renderItem}
            onDone={this._onDone}
            showSkipButton={true}
            onSkip={this._onSkip}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
          />
         
          </SafeAreaView>
          </>
          
        );
      }
    }
  }

  App1.navigationOptions ={
    headerShown: null 
}


const styles = StyleSheet.create({
    text: {
        color: "#fff"
    },
    title: {
        fontSize: 26,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center"
    },
})


