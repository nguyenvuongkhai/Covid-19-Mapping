/* eslint-disable prettier/prettier */  
import React from 'react';
import{View,Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
// import Example from './src/Example';
// import { NavigationContainer } from "@react-navigation/native";
// import Tabs from './src/navigation/Tabs';
import Stacks from './src/navigation/Stacks'
// import HomeScreen from './src/screens/HomeScreen'

const App = ()=>{
  React.useEffect(()=>{
    SplashScreen.hide();
  })
  return (
    <Stacks/>
  )
}

export default App;