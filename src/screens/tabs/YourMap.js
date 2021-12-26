/* eslint-disable prettier/prettier */
import React,{useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, Modal, Pressable, Button, TextInput } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios' 
import {format} from 'timeago.js'
import RNPickerSelect from 'react-native-picker-select';
import {Formik} from 'formik'
export default function YourMap() {

  const [currentPosition,setCurrentPosition] = useState({
    latitude:0,
    longitude:0,
  });
  const [pins,setPins] = useState([]);
  const currentUser = 'Peter';
  const [newPlace,setNewPlace] = useState({
    latitude:0,
    longitude:0,
  });
  const onHandlePress = (e)=>{
    console.log(e.nativeEvent.coordinate);
    const {latitude,longitude}= e.nativeEvent.coordinate;
    setNewPlace({
      latitude,
      longitude,
    })
  }
    useEffect(() => {
    Geolocation.getCurrentPosition(
      position=>{
      const {latitude, longitude} = position.coords;
      setCurrentPosition({
        latitude,
        longitude,
      });
      },
      error=>{
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    )
    Geolocation.watchPosition(
      position => {
          const {latitude,longitude} = position.coords;
          setCurrentPosition({latitude,longitude});
      },
      error => {
        console.log(error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0
      }
    );
    const getPins = async () =>{
      try {
          const res = await axios.get('https://back-end-covid-19-mapping.vercel.app/api/pins')
          setPins(res.data)
      } catch (error) {
        
      }
    }
    getPins()
  }, 
  []);

  return (
    <View style={styles.container}>
    
    {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          // latitude: 21.028511,
          // longitude: 105.804817,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomTapEnabled={false}
        onLongPress={onHandlePress}
        
         //onRegionChangeComplete runs when the user stops dragging MapView
    
      >
        <Marker
          coordinate={{
          latitude:currentPosition.latitude,
          longitude:currentPosition.longitude,
        }}
          pinColor="#fff"
      >
      <Callout tooltip>
        <View>
        <View style={styles.bubble}>
        <Text style={styles.name}>Restaurant</Text>
        </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
        </View>
      </Callout>
      </Marker>

      {pins.map((p)=>(
        <Marker
        key={p._id}
        coordinate={{
          latitude:p.lat,
          longitude:p.long,
        }}
        pinColor={p.username === currentUser ? "blue":"red"}
        >
        <Callout tooltip>
        <View>
        <View style={styles.bubble}>
        <Text style={styles.name}>{p.title}</Text>
        <Text style={styles.text}>{p.desc}</Text>
        <Text style={styles.text}>Created by: {p.username}</Text>
        <Text style={styles.text}>{format(p.createdAt)}</Text>

        </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
        </View>
      </Callout>
        </Marker>
      ))}
      {
        newPlace &&(
          <Marker
            coordinate={{
              latitude: newPlace.latitude,
              longitude: newPlace.longitude,
            }}
          >
          {/* <Formik>
           <View>
           <View style={styles.bubble}>
              <Text style={styles.text}>Title</Text>
              <TextInput style={{
                 height: 40 ,
                margin: 12,
                borderWidth:1,
              }}
                placeholder="type me"
              />
              <Text style={styles.text}>Desc</Text>
              <TextInput style={{
                 height: 20,
                margin: 12,
                borderWidth: 1,
              }}/>
              <Text style={styles.text}>Rating</Text>
              <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: '1', value: 'football' },
                { label: '2', value: 'baseball' },
                { label: '3', value: 'hockey' },
            ]}/>

              <Button title="Add Pin" onPress={(e)=>{console.log("pressed")}}/>
            </View>
               <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
           </View>
          </Formik> */}
          </Marker>

        )
      }
      </MapView>

    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    alignSelf:'center',
    fontSize: 20,
    marginBottom: 10,
    color:"purple"
  },
  text:{
    color: "black",
    fontSize:10,
  },
  // Character image
  image: {
    width: "100%",
    height: 80,
  },
});