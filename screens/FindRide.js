import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux';
import { setOrigin, selectOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const FindRide = (props) => {

  // User sets their location by entering address in the text input or by pressing "Use Current Location"

  const navigation = useNavigation()
  const dispatch = useDispatch()

  // User passed as prop from App.js

  const userName = props.route.params.user.name

  let origin = useSelector(selectOrigin)

  const useCurrentLocation = () => {
    // Add Geolocation function
    console.warn('Geolocation Services Disabled')
  }

  return (

        <View style={{marginTop:'auto', marginBottom:'auto'}}>

            <Text style={{
                textAlign:'center',
                fontSize:16,
                fontWeight:'bold',
                margin:10
              }}
            >
              {origin.location.lat === 0 ? `Hey ${userName}, let's find you a ride!` : `Starting a trip from` }
            </Text>

              <GooglePlacesAutocomplete
                query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: 'en',
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                onPress={(data, details = null) => {
                  dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description
                  }))
                }}
                fetchDetails={true}
                returnKeyType={"search"}
                debounce={400}
                minLength={2}
                enablePoweredByContainer={false}
                placeholder="Enter Your Start Location"
                autoFocus={true}
                styles={locationInputStyles}
              />
          
              <TouchableOpacity
                onPress={ origin.location.lat === 0  ? () => useCurrentLocation() : () => navigation.navigate('Route')}
                style={styles.button}
              >
                { origin.location.lat === 0  ?  <Icon name="location-pin" type="material" iconStyle={{color:'#eee',paddingRight:2,fontSize: 28}}/> : null }
                <Text style={styles.buttonText}>{origin.location.lat === 0 ? 'Use Current Location' : `Let's Go!`}</Text>
              </TouchableOpacity>

        </View>
  )
}

const locationInputStyles = StyleSheet.create({
    container: {
      flex: 0,
      paddingRight:5,
      paddingLeft: 5
    },
    textInputContainer: {
      alignItems:'center'
    },
    textInput: {
      fontSize: 17,
      borderRadius:20
    }
})

const styles = StyleSheet.create({
  button: {
      marginLeft:30,
      marginRight:30,
      marginTop:20,
      padding:10,
      borderRadius:50,
      backgroundColor: 'black',
      flexDirection: 'row',
      alignItems:'center'
  },
  buttonText: {
      color: '#eee',
      fontSize:16,
      fontWeight:'bold',
      marginLeft: 'auto',
      marginRight: 'auto'
  }
})

export default FindRide
