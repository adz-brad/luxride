import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import Favorites from './Favorites'
import StartOver from './StartOver'
import FindARide from './FindARide'

const TripNav = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
  
    return (
        <SafeAreaView>
            <GooglePlacesAutocomplete
                query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: 'en',
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                renderLeftButton={()=> <Icon name="map-search" type="material-community" iconStyle={{paddingRight:2,fontSize: 35}}/>}
                onPress={(data, details = null) => {
                  dispatch(setDestination({
                    location: details.geometry.location,
                    description: data.description
                  }))
                  navigation.navigate('TripOptions')
                }}
                fetchDetails={true}
                returnKeyType={"search"}
                debounce={400}
                minLength={2}
                enablePoweredByContainer={false}
                placeholder="Where are you headed?"
                autoFocus={true}
                styles={locationInputStyles}
              />
              <Favorites/>
              <View style={{flexDirection:'row', marginTop:4}}>
                <StartOver/>
                <FindARide/>
              </View>
            </SafeAreaView>

    )
}

const locationInputStyles = StyleSheet.create({
    container: {
      flex: 0,
      paddingRight:5,
      paddingLeft: 5,
      marginTop:8,
      marginBottom:'auto'
    },
    textInputContainer: {
      alignItems:'center'
    },
    textInput: {
      fontSize: 17,
      borderRadius:20
    }
})

export default TripNav