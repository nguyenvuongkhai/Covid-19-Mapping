/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import styles from '../constants/styles'

const SearchBar = props => {
    return (
        <View style={{ flexDirection:'row'}}>
            <View style={{ flexDirection:'row', alignItems: 'center'}}>
                <Image
                    style={styles.searchBar.icon.image}
                    source={require('../assets/globe.png')}
                />

            </View>

            <View style={styles.searchBar.container}>
                <TextInput
                    style={styles.searchBar.inputStyle}
                    placeholder={props.label}
                    placeholderTextColor={styles.searchBar.placeholderTextColor}
                    onChangeText={props.onSearch}
                />
                <Image source={require('../assets/search.png')} style={styles.searchBar.logo}/>
            </View>
            <TouchableOpacity style={{ paddingHorizontal: 3, justifyContent: 'center' }} onPress={props.changeLang}>
                <Image source={require('../assets/globe.png')} style={styles.searchBar.langImage} />
            </TouchableOpacity>

        </View>
    )
}

export {SearchBar}


