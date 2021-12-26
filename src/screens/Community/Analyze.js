// /* eslint-disable prettier/prettier */
// import React,{useState, useContext, useEffect} from 'react';
// import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
// import { SearchBar,DataItem } from '../../components'
// import {createList} from '../../utils/functions'
// import styles from '../../constants/styles'
// import Context from '../../context/components/store'
// import { MainLoader } from '../../components/Loader';
// const Analyze = props => {

//     const
//     [loading, setLoading] = useState(true),
//     [dataList, setDataList] = useState([]),
//     { state, dispatch } = useContext(Context),
//     [originalList, setOriginalList] = useState([])

//     const fetchData = async () => {
//         setLoading(true)
    
//         let statusList = await createList()
    
//         dispatch({ type: "SET_DATA", mapData: statusList[0] })
    
//         setOriginalList(statusList)
//         setDataList(statusList[0])
//         setLoading(false)
//       }
    
//       useEffect(() => { fetchData() }, [])
    
//       const searchByName = text => {
//         let filteredList = originalList[0].filter(item => {
//           const itemData = item.country.toUpperCase()
//           const textData = text.toUpperCase()
    
//           return itemData.indexOf(textData) > -1
//         })
    
//         setDataList(filteredList)
//       }
    
//        const renderListHeader = () => {
//         return (
//           <View style={styles.main.header}>
//             <Text style={styles.main.sortTitle}>{state.language.sort.label}: </Text>
    
//             <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setDataList([...originalList[1].reverse()])}>
//               <Image source={require('../../assets/sort.png')} style={[styles.main.sort.image, { tintColor: 'orange' }]} />
//               <Text style={[styles.main.sort.title, { color: 'orange' }]}>{state.language.sort.sort[0]}</Text>
//             </TouchableOpacity>
    
//             <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setDataList([...originalList[2].reverse()])}>
//               <Image source={require('../../assets/sort.png')} style={[styles.main.sort.image, { tintColor: 'red' }]} />
//               <Text style={[styles.main.sort.title, { color: 'red' }]}>{state.language.sort.sort[1]}</Text>
//             </TouchableOpacity>
    
//             <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setDataList([...originalList[3].reverse()])}>
//               <Image source={require('../../assets/sort.png')} style={[styles.main.sort.image, { tintColor: 'green' }]} />
//               <Text style={[styles.main.sort.title, { color: 'green' }]}>{state.language.sort.sort[2]}</Text>
//             </TouchableOpacity>
//           </View>
//         )
//       }
    
//        const renderCountries = ({ item }) => <DataItem item={item} onPress={() => props.navigation.navigate('Detail', { data: JSON.stringify(item) })} />
    
//        const renderSeperator = () => <View style={styles.main.seperator} />
    
//       const renderEmpty = () => {
//         return (
//           loading ?
//             <View style={{ flex: 1 }} />
//             :
//             <View style={styles.center}>
//               <Image source={require('../../assets/search.png')} style={styles.main.noResult.image} />
//               <Text style={styles.main.noResult.title}>{`Aramanıza uygun sonuç yok\nYa da ne mutlu ki o ülkede vaka yok.`}</Text>
//             </View>
//         )
//       }
    
//       // const changeLanguage = () => {
//       //   // It will work only for iOS. Can be converted for Android as modal.
//       //   ActionSheetIOS.showActionSheetWithOptions({
//       //     options: ['Vazgeç', 'Türkçe', 'English'],
//       //     cancelButtonIndex: 0,
//       //     // tintColor: 'rgb(242, 63, 52)',
    
//       //   },
//       //     (index) => {
//       //       if (index === 1)
//       //         dispatch({ type: "CHANGE_LANG", selectedLang: 'tr' })
    
//       //       else if (index === 2)
//       //         dispatch({ type: "CHANGE_LANG", selectedLang: 'en' })
    
//       //     }
//       //   )
//       // }
    
//     return (
//       <SafeAreaView>
//           <SearchBar/>
//           {
//         loading && !dataList.length ?
//           <MainLoader />
//           :
//           <FlatList
//             data={dataList}
//             refreshing={loading}
//             initialNumToRender={10}
//             onRefresh={fetchData}
//             renderItem={renderCountries}
//             ListEmptyComponent={renderEmpty}
//             ListHeaderComponent={renderListHeader}
//             contentContainerStyle={{ flexGrow: 1 }}
//             ItemSeparatorComponent={renderSeperator}
//             keyExtractor={(_, index) => index.toString()}
//           />
//           }
//       </SafeAreaView>
//     )
// }

// export {Analyze}
import React from 'react'
import { View, Text } from 'react-native'

const Analyze = () => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export {Analyze}
