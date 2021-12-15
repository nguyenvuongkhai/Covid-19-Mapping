/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen'
import CommunityScreen from '../screens/CommunityScreen'
import PostScreen from '../screens/PostScreen'
import AnnouncementScreen from '../screens/AnnouncementScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Icon, Header } from "../components";
const Tab = createBottomTabNavigator();
// const CustomTabBarButton = ({children, onPress})=>{
//   <TouchableOpacity
//   style={{
//     top: -30,
//     justifyContent:'center',
//     alignItems: 'center',
//     ...styles.shadow
//   }}
//   onPress={onPress}>
//   <View style={{
//     width:70,
//     height:70,
//     borderRadius:35,
//     backgroundColor:'#5E72E4'
//   }}>
//     {children}
//   </View>

//   </TouchableOpacity>
// }

function Tabs() {


    return (
        
        <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        headerShown:true,
        tabBarStyle:{
          position:'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor:'#ffffff',
          height:90,
          borderRadius:15,
          ...styles.shadow,
        },
        tabBarIcon:({focused,color,size,})=>{
          const route = useRoute();
          let iconName ;
        
        if(route.name =='Home'){
          iconName = focused 
          ? 'home'
          : 'home-outline' ;
        } else if (route.name === 'Community') {
              iconName = focused 
              ? 'earth' 
              : 'earth-outline';
         } else if (route.name === "Post") {
              iconName = focused 
              ? 'add-circle' 
              : 'add-circle-outline';
        } else if (route.name === 'Notification') {
              iconName = focused 
              ? 'notifications' 
              : 'notifications-outline';
        } else if (route.name === 'Profile') {
              iconName = focused 
              ? 'person-circle' 
              : 'person-circle-outline';
        }
        return <View style={{alignItems: 'center', justifyContent: 'center', top:4}}>
          <Ionicons name={iconName} size={size} color={color} />
          <Text style={{color:focused?'#5E72E4':'#172B4D', fontSize:12}}>
             {route.name}
          </Text>
        </View>;
        },
        tabBarActiveTintColor: '#5E72E4',
        tabBarInactiveTintColor: '#172B4D',

      }}
      >
        <Tab.Screen name="Home" children={HomeScreen}
        options={{
          title:'C19M',
          headerStyle:{
            backgroundColor:'#ffff',
          },
          headerTintColor:'#5E72E4',
          headerTitleStyle:{
            fontWeight:'bold',
          },
          // headerTitle:(props)=> <SearchBar {...props}/>
        }}
        />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Post" component={PostScreen}/>
        <Tab.Screen name="Notification" component={AnnouncementScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>

    
    );
  }

  const styles = StyleSheet.create({
    shadow:{
      shadowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation:5
    }
  });

export default Tabs;