/* eslint-disable prettier/prettier */
import numeral from 'numeral'
import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView, View, Text, ActivityIndicator, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import axios from 'axios';
import styles from '../../constants/styles'
// import Context from '../../context/components/store'
import { DataTable } from 'react-native-paper';
const WorldMap = () => {
    const [lastest, setLastest] = useState([]);
        const [results, setResults] = useState([]);
        const [searchCountries, setSearchCountries] = useState("");
        const [loading, setLoading] = useState([true]);

        useEffect(()=>{
            axios
                .all([
                    axios.get("https://corona.lmao.ninja/v2/all"),
                    axios.get("https://corona.lmao.ninja/v2/countries"),
                ])
                .then((responseArr)=>{
                    setLastest(responseArr[0].data);
                    setResults(responseArr[1].data);
                    setLoading(false);
                })
                .catch((err)=>{
                    console.log(err);
                })
        },[]);

        const date = new Date(parseInt(lastest.updated));
        const lastUpdated = date.toString();

        const countriesLocations = results.map((data, i)=>{
            return (
                <Marker
                key={i}
                coordinate={{ latitude :data.countryInfo.lat , longitude : data.countryInfo.long }}
                // styles={{
                //     color: 'red',
                //     backgroundColor:'#fff',
                //     height: '10px',
                //     width: '10px',
                //     textAlign: 'center'
                // }}
                
                // title= {data.cases.toString()}
                
                >
                  <View style={styles.map.marker.container}>
                <Text style={styles.map.marker.title}>{numeral(data.cases).format('0,0')}</Text>
                <Image style={{height:10,width:20, padding:5}} source={{uri:data.countryInfo.flag}}/>
                    </View>

                </Marker>
            )
        })

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <MapView
            customMapStyle={styles.map.mapStyle}
            // onMapReady={() => setMarkers([...state.mapData])}
            mapType="standard"
            provider="google"
            style={{ flex: 1 }}
            initialRegion={{ 
                latitude:15.9030623,
                longitude: 105.8066925,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >

            {/* {
                markerList.length != 0 ?
                    markerList.map(renderMarkers) : null
            } */}

           {countriesLocations}


        </MapView>
    </SafeAreaView>
    )
}

export {WorldMap}
