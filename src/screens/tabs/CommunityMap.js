import React from 'react';
import MapView, { Geojson } from 'react-native-maps';
import countries from './Data/countries.json';
import VNRegion from './Data/VNProvince.json'
import VNDistrict from './Data/VNDistrict.json'
const CommunityMap = props => (
  <MapView
    mapType="standard"
    provider="google"
    style={{ flex: 1 }}
  >
    {/* <Geojson 
      geojson={VNDistrict} 
      strokeColor="#808080"
      fillColor='#fff'
      strokeWidth={2}
    /> */}

    {VNDistrict.features.map((feature, index) => {
      const insertedObject = {
        features: [feature]
      };

      if (feature.properties.Ten_Tinh === 'Đà Nẵng' && feature.properties.Ten_Huyen === "Ngu Hanh Son") {
        return <Geojson
          key={feature.properties.OBJECTID}
          geojson={insertedObject}
          fillColor={'orange'}
          strokeColor='gray'
          strokeWidth={2}
        />
      }
      if (feature.properties.Ten_Tinh === 'Đà Nẵng' && feature.properties.Ten_Huyen === "Lien Chieu") {
        return <Geojson
          key={feature.properties.OBJECTID}
          geojson={insertedObject}
          fillColor={'red'}
          strokeColor='gray'
          strokeWidth={2}
        />
      }
      if (feature.properties.Ten_Tinh === 'Đà Nẵng' && feature.properties.Ten_Huyen === "Hai Chau") {
        return <Geojson
          key={feature.properties.OBJECTID}
          geojson={insertedObject}
          fillColor={'green'}
          strokeColor='gray'
          strokeWidth={2}
        />
      }
      if (feature.properties.Ten_Tinh === 'Đà Nẵng' && feature.properties.Ten_Huyen === "Cam Le") {
        return <Geojson
          key={feature.properties.OBJECTID}
          geojson={insertedObject}
          fillColor={'green'}
          strokeColor='gray'
          strokeWidth={2}
        />
      }
      if (feature.properties.Ten_Tinh === 'Đà Nẵng' && feature.properties.Ten_Huyen === "Thanh Khe") {
        return <Geojson
          key={feature.properties.OBJECTID}
          geojson={insertedObject}
          fillColor={'green'}
          strokeColor='gray'
          strokeWidth={2}
        />
      }
      if (feature.properties.Ten_Tinh === 'Đà Nẵng' && feature.properties.Ten_Huyen === "Hoa Vang") {
        return <Geojson
          key={feature.properties.OBJECTID}
          geojson={insertedObject}
          fillColor={'yellow'}
          strokeColor='gray'
          strokeWidth={2}
        />
      }
      if (feature.properties.Ten_Tinh === 'Đà Nẵng' && feature.properties.Ten_Huyen === "Son Tra") {
        return <Geojson
          key={feature.properties.OBJECTID}
          geojson={insertedObject}
          fillColor={'green'}
          strokeColor='gray'
          strokeWidth={2}
        />
      }
      return <Geojson
        key={feature.properties.OBJECTID}
        geojson={insertedObject}
        fillColor={'pink'}
        strokeColor='gray'
        strokeWidth={2}
      />
    })}
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
