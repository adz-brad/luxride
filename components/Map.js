import React, { useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useSelector, useDispatch } from 'react-redux'
import { selectDestination, selectOrigin, setTripInfo } from '../slices/navSlice'

const Map = () => {

    // Map only renders once origin is set on "Find Ride" screen
    // Directions and destination marker only render once Destination is set
    // Once both origin and destination are set, effect runs to reset map zoom to fit both location markers

    let origin = useSelector(selectOrigin)
    let destination = useSelector(selectDestination)

    const mapRef = useRef(null)

    useEffect(() => {
      if(origin.location.lat !== 0 && destination.location.lat !== 0){
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
          edgePadding: { top: 90, right: 50, bottom: 10, left: 50}
        })
      }
    }, [ origin, destination ])

    const dispatch = useDispatch()

    useEffect(() => {
        if(origin.location.lat !== 0 && destination.location.lat !== 0){
            const getTravelTime = async () => {
                fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
                .then((res) => res.json())
                .then(data => {
                    dispatch(setTripInfo(data.rows[0].elements[0]))
                })
            }
            getTravelTime()
        }
    }, [ origin, destination ])

    return(

            <MapView
                ref={mapRef}
                style={styles.map}
                mapType="mutedStandard"
                initialRegion={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >

            { destination ?
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={4}
                    strokeColor="black"
                />
            : null }

            <Marker
                pinColor="red"
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                }}
                title="Your Location"
                description={origin.description}
                identifier='origin'
            />

            { destination ?
                <Marker
                    pinColor="blue"
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="Your Destination"
                    description={destination.description}
                    identifier='destination'
                />
            : null }

        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
    }
  })

export default Map

 