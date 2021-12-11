import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CheckBox from './src/screens/checkbox'
import Slider from "./src/screens/introSlider"
import Intro from "./src/screens/appIntro"
import PopUp from "./src/screens/popup"
import AutoScroll from "./src/screens/autoScroll"
import Login from "./src/screens/fingerprint"
import Pay from './src/screens/Payment'
import Languages from './src/screens/language'
import DocumentPicker from './src/screens/documentPicker'
import CreateExcel from './src/screens/createExcel'
import DisplayMode from './src/screens/Appearance'
import { AppearanceProvider } from 'react-native-appearance';
import PhoneInput from './src/screens/PhoneInput'
import MyAnimation from './src/screens/Animation'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    checkbox: CheckBox,
    slider: Slider,
    Intro: Intro,
    popup: PopUp,
    scroll: AutoScroll,
    login: Login,
    Payment: Pay,
    Languages,
    document: DocumentPicker,
    Appearance: DisplayMode,
    excel: CreateExcel,
    phoneInput: PhoneInput,
    animation: MyAnimation    
  },
  {
    initialRouteName: "animation",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return(
    <AppearanceProvider>
       <App /> 
    </AppearanceProvider>                   
  )
}
