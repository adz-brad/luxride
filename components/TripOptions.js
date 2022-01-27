import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { selectTripInfo } from '../slices/navSlice'
import 'intl'
import 'intl/locale-data/jsonp/en-CA'
import ChangeDestination from './ChangeDest'
import StartTrip from './StartTrip'
import { FlatList } from 'react-native-gesture-handler'

const TripOptions = () => {

    const [ selected, setSelected ] = useState(null)

    const rides = [
        {
            id:'001',
            title:'LUX Green',
            description:'Tesla Model X',
            multiplier:1,
            image: require('../assets/images/luxGreenImage.png')
        },
        {
            id:'002',
            title:'LUX Speed',
            description:'Ferrari Convertible',
            multiplier:1.45,
            image: require('../assets/images/luxSpeedImage.png')
        },
        {
            id:'003',
            title:'LUX Platinum',
            description:'Bentley SUV',
            multiplier:1.75,
            image: require('../assets/images/luxPlatinumImage.png')
        }
    ]

    const tripInfo = useSelector(selectTripInfo)
  
    return (

        <SafeAreaView>
            <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center', marginTop:10, marginBottom:5}}>Select a Ride - {tripInfo?.distance.text}</Text>
            <FlatList
                data={rides}
                keyExtractor={item => item.id}
                contentContainerStyle={{ marginTop:'auto',marginBottom:'auto'}}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    onPress={() => setSelected(item)}
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        padding:5,
                        backgroundColor: item.id === selected?.id ? 'rgba(100,100,100,0.1)' : 'white',
                        borderRadius:30,
                        margin:3,
                    }}>
                        <Image
                            style={{
                                width:100,
                                height:40,
                                resizeMode:'contain',
                                marginLeft:5,
                                marginRight:10,
                                marginTop:1,
                                marginBottom:1,
                            }}
                            source={item.image}
                        />
                        <View>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>
                                {item.title}
                            </Text>
                            <Text style={{color:'#333',fontSize:12}}>
                                {tripInfo?.duration.text} Travel Time
                            </Text>
                        </View>
                        <Text style={{marginLeft:'auto', marginRight:10, fontSize:18}}>
                            {new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(
                                (tripInfo?.duration.value * item.multiplier / 100)
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={{flexDirection:'row', marginTop:5}}>
                <ChangeDestination/>
                <StartTrip selected={selected}/>
              </View>
            
        </SafeAreaView>

    )
}

export default TripOptions