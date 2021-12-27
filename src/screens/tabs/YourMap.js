/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Modal, Pressable, TouchableHighlight, Button, TextInput } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import { format } from 'timeago.js'
import { Formik } from 'formik'
export default function YourMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({ latitude: 0, longitude: 0, });
  const [newPlace, setNewPlace] = useState({ latitude: 0, longitude: 0 });
  const onHandlePress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setNewPlace({ latitude, longitude });
    onChangeModal();
  };
  const onChangeModal = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({
          latitude,
          longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
    Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ latitude, longitude });
      },
      error => {
        console.log(error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0,
      }
    );
  }, []);

  return (
    <View style={styles.container}>

      {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
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
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
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

        {
          newPlace && (
            <Marker
              coordinate={{
                latitude: newPlace.latitude,
                longitude: newPlace.longitude,
              }}
            >
            </Marker>
          )
        }
      </MapView>
      <Modal
        transparent
        visible={isVisible}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={{ color: "black" }}>My Form</Text>
              <TouchableHighlight
                onPress={() => onChangeModal()}
              >
                <Ionicons color="black" name="close" size={30}></Ionicons>
              </TouchableHighlight>
            </View>
            <View style={styles.modalFooter}>
              <TextInput
                style={styles.modalInput}
                placeholder="Text Input"
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Text Input"
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Text Input"
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Text Input"
              />
              <Button
                title="Submit"
                style={{ marginTop: 10 }}
              />
            </View>
          </View>
        </View>
      </Modal>
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 20,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  modalFooter: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  modalInput: {
    width: "90%",
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 3
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
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 10,
    color: "purple"
  },
  text: {
    color: "black",
    fontSize: 10,
  },
  // Character image
  image: {
    width: "100%",
    height: 80,
  },
});