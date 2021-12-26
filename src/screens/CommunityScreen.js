/* eslint-disable prettier/prettier */
import React,{useContext} from 'react'
import { View, Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../constants/styles'
// import SearchBar from '../components/SearchBar'
// import DataItem from '../components/DataItem'
import { Analyze, Detail, WorldMap } from './Community'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import SegmentedControl from '@react-native-community/segmented-control';
const topTab = createMaterialTopTabNavigator();
// const pages = ['Analyze','WorldMap']
// const Stack = createStackNavigator()
// import Context from '../context/components/store'
const CommunityScreen = () => {
    // const { state} = useContext(Context);
  // let navi = null;
  return (
    // <SafeAreaView style={styles.container}>
    // <View style={{padding:5}}>
    //   <SegmentedControl
    //   // values={[state.language.analyze, state.language.world]}
    //   values={['Analyze','WorldMap']}
    //   selectedIndex={0}
    //   onChange={event => navi.navigate(pages[event.nativeEvent.selectedSegmentIndex])}
    //   tintColor='#5E72E4'
    //   backgroundColor='#fff'
    //   textColor="#5E72E4"
    //   />
    // </View>

    // <NavigationContainer ref={ref => navi = ref}>
    // <Stack.Navigator>
    //                 <Stack.Screen
    //                     name="Analyze"
    //                     component={Analyze}
    //                     options={{
    //                         headerShown: false
    //                     }}
    //                 />
    //                 <Stack.Screen
    //                     name="Detail"
    //                     component={Detail}
    //                     options={{
    //                         headerShown: false
    //                     }}
    //                 />
    //                 <Stack.Screen
    //                     name="WorldMap"
    //                     component={WorldMap}
    //                     options={{
    //                         headerShown: false
    //                     }}
    //                 />
    //             </Stack.Navigator>
    // </NavigationContainer>

       
    // {/* <DataItem/> */}
    // </SafeAreaView>
    <topTab.Navigator>
    <topTab.Screen name='Analyze' component={Analyze}/>
    <topTab.Screen name='WorldMap' component={WorldMap}/>
    </topTab.Navigator>
  )
}

export default CommunityScreen;
