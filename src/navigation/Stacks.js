/* eslint-disable prettier/prettier */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Tabs from '../navigation/Tabs'
import { NavigationContainer } from '@react-navigation/native';
const RootStack = createStackNavigator();

const Stacks = ({navigation}) => (
    <NavigationContainer>
         <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="Main" component={Tabs}/>
        </RootStack.Navigator>
    </NavigationContainer>
    
);

export default Stacks;