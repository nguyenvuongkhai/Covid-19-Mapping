/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import CommunityScreen from '../screens/CommunityScreen'
import PostScreen from '../screens/PostScreen'
import AnnouncementScreen from '../screens/AnnouncementScreen'
import ProfileScreen from '../screens/ProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Icon, Header } from "../components";
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
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
        <Tab.Screen name="Profile" component={ProfileStackScreen} 
          options={{
            headerShown:false
          }}
        />

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

const ProfileStackScreen = ({navigation})=>{
  const {colors} = useTheme()
  return(

    <ProfileStack.Navigator
    options={{
      headerStyle:{
        backgroundColor: colors.background,
        shadowColor: colors.background, // iOs
        elevation: 0, // Android
      },
      headerTintColor: colors.text,
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title:'',
        headerLeft:()=>(
          <View style={{marginLeft: 10}}>
              <Ionicons.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                // onPress={() => navigation.openDrawer()}
              /> 
              </View>
        ),
        headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),

      }}
    />
    <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />

    </ProfileStack.Navigator>
  )

}
