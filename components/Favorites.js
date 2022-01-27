import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'

const favorites = [
    {
        id:'001',
        icon:<Icon name="home" type="font-awesome-5" iconStyle={{color:'#eee',padding:2,fontSize: 25}}/>,
        location:'Home',
        lat:50.9183161,
        lng:-114.0547683,
        description:'Midridge Drive Southeast, Calgary, AB, Canada',
        destination:'Midridge Drive Southeast'
    },
    {
        id:'002',
        icon:<Icon name="building" type="font-awesome-5" iconStyle={{color:'#eee',padding:2,fontSize: 25}}/>,
        location:'Work',
        lat: 51.04571309999999,
        lng:-114.0728195,
        description:'Eighth Avenue Place, 8 Avenue Southwest, Calgary, AB, Canada',
        destination:'Eighth Avenue Place'
    },
    {
        id:'003',
        icon:<Icon name="dog" type="font-awesome-5" iconStyle={{color:'#eee',padding:2,fontSize: 25}}/>,
        location:'Dog Park',
        lat:50.96961289999999,
        lng:-114.0316588,
        description:'Sue Higgins Off-Leash Area, 15 Street Southeast, Calgary, AB, Canada',
        destination:'Sue Higgins Off-Leash Area'
    }
]


const Favorites = () => {
    
    const dispatch = useDispatch()
    const [ selected, setSelected ] = useState(null)

    return(
            <FlatList
                contentContainerStyle={styles.favoritesList}
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => {
                            dispatch(setDestination({
                                location: {lat: item.lat, lng: item.lng},
                                description: `${item.description}`
                            }))
                            setSelected(item.id)
                        }}
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            margin:4,
                            backgroundColor: item.id === selected ? 'rgba(100,100,100,0.1)' : 'white',
                            borderBottomLeftRadius:999,
                            borderTopLeftRadius:999,
                            borderBottomRightRadius:999,
                            borderTopRightRadius:999
                        }}
                    >
                    <View style={styles.iconWrapper}>
                        {item.icon}
                    </View>
                    <View style={styles.detailsWrapper}>
                        <Text style={styles.locationText}>{item.location}</Text>
                        <Text style={styles.locationData}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
                )}
            />
    )
}

const styles = StyleSheet.create({
    favoritesList:{
        marginBottom:'auto',
        marginTop:'auto'
    },
    iconWrapper: {
        backgroundColor:'#111',
        width:45,
        height:45,
        borderRadius:999,
        justifyContent:'center',
        alignItems:'center'
    },
    detailsWrapper: {
        paddingLeft:5
    },
    locationText: {
        fontSize:16,
        color:'#111',
        fontWeight:'bold'
    },
    locationData: {
        fontSize:12,
        color:'#333'
    }
})

export default Favorites