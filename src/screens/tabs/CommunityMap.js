import React from 'react';
import MapView, {Geojson} from 'react-native-maps';
import countries from './Data/countries.json';
import VNRegion from './Data/VNProvince.json'
import VNDistrict from './Data/VNDistrict.json'
const CommunityMap = props => (
  <MapView
    mapType="standard"
    provider="google"
    style={{ flex: 1 }}
  >
    <Geojson 
      geojson={VNDistrict} 
      strokeColor="#808080"
      fillColor='#fff'
      strokeWidth={2}
    />
  </MapView>
);
export default CommunityMap;


// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const CommunityMap = () => {
//     return (
//         <View>
//             <Text>Show me</Text>
//         </View>
//     )
// }

// export default CommunityMap

// const styles = StyleSheet.create({})
