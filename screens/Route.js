import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import Map from '../components/Map'
import TripNav from '../components/TripNav'
import TripOptions from '../components/TripOptions'

const Route = () => {

  const navigation = useNavigation()
  const Stack = createStackNavigator()

  let origin = useSelector(selectOrigin)

  return (
        <>
        {origin.location.lat !== 0 ?
          <>
            <View style={{height:'50%'}}>
              <Map/>
            </View>
            <View style={{height:'50%'}}>
              <Stack.Navigator
                initialRouteName="TripNav"
                screenOptions={{
                  headerShown:false
                }}
              >
                <Stack.Screen
                  name="TripNav"
                  component={TripNav}
                />
                <Stack.Screen
                  name="TripOptions"
                  component={TripOptions}
                />
              </Stack.Navigator>
            </View>
            </>
          :
            <View style={{
                marginTop:'auto', marginBottom:'auto'
            }}>
                <Text style={{
                    textAlign: 'center'
                }}
                    >Looks like you haven't started a trip yet ...
                </Text>
                <TouchableHighlight
                    onPress={() => navigation.navigate('FindRide')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Start Trip</Text>
                </TouchableHighlight>
            </View>
        }
        </>
  )
}

const styles = StyleSheet.create({
  map: {
      height: '100%',
  },
  button: {
      margin:10,
      padding:10,
      borderRadius:50,
      backgroundColor:'#111',
      alignItems:'center'
  },
  buttonText: {
      color: '#eee',
      fontSize:16,
      fontWeight:'bold'
  }
})

export default Route
