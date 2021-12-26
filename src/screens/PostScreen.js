/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const PostScreen = () => {
  return (
    <View styles={{color:'#000'}}>
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAb9D9zhHDHtwuVopsHMrpVnGCbcRZ3fp0',
        language: 'vi',
      }}
    />
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({})
