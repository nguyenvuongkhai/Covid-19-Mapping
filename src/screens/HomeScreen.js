/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityMap from './tabs/CommunityMap';
import YourMap from './tabs/YourMap';

const topTab = createMaterialTopTabNavigator();
const HomeScreen = () => {
    
  return (
  
  <topTab.Navigator>
       
        <topTab.Screen name='Community' component={CommunityMap}/>
        <topTab.Screen name='YourMap' component={YourMap}/>
  </topTab.Navigator>

  )
}

export default HomeScreen;

const styles = StyleSheet.create({})
