/* eslint-disable prettier/prettier */
import numeral from 'numeral'
import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView, View, Text, ActivityIndicator, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import axios from 'axios';
import styles from '../../constants/styles'
import { DataTable } from 'react-native-paper';
// import  MapMarker  from '../../components/MapMaker'

const DefaultMap = props => {
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
                <Image source={{uri:data.countryInfo.flag}}/>
                    </View>

                </Marker>
            )
        })

  
    // const [markerList, setMarkers] = useState([]),
    // { state, dispatch } = useContext(Context),

    // renderMarkers = (c, i) => <MapMarker key={i} data={c} />

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                customMapStyle={styles.map.mapStyle}
                // onMapReady={() => setMarkers([...state.mapData])}
                mapType="standard"
                provider="google"
                style={{ flex: 1 }}
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

export default DefaultMap;