import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectDestination } from '../slices/navSlice'

const FindARide = () => {

    const navigation = useNavigation()
    const destination = useSelector(selectDestination)

    return(
        <TouchableOpacity 
        disabled={destination.location.lat === 0 ? true : false}
        onPress={() => {
            navigation.navigate('TripOptions')
        }}
        style={{
            flexDirection:'row',
            alignItems:'center',
            maxHeight:35,
            marginTop:'auto',
            marginLeft:'auto',
            marginRight:'auto',
            marginBottom:4,
            padding:5,
            width:'49%',
            backgroundColor: destination.location.lat === 0 ? 'gray' : 'green',
            borderTopRightRadius:30,
            borderBottomRightRadius:30,
        }}
    > 
        <Text style={{paddingLeft:5,fontSize:16,fontWeight:'bold',color:'#eee',marginLeft:'auto',marginRight:'auto'}}>Find Ride</Text>
        <Icon name="forward" type="font-awesome-5" iconStyle={{color:'#eee',paddingRight:5,fontSize: 20}}/>
    </TouchableOpacity>
    )
}

export default FindARide