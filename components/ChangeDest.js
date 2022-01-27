import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setDestination } from '../slices/navSlice' 

const ChangeDestination = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    return(
        <TouchableOpacity 
        onPress={() => {
            dispatch(setDestination({
            location: { lat: 0, lng: 0 },
            description: ''
          }))
          navigation.navigate('TripNav')
        }}
        style={{
            flexDirection:'row',
            alignItems:'center',
            maxHeight:35,
            padding:5,
            marginTop:'auto',
            marginLeft:'auto',
            marginRight:'auto',
            marginBottom:4,
            width:'49%',
            backgroundColor:'red',
            borderTopLeftRadius:30,
            borderBottomLeftRadius:30,
        }}
    >
        <Icon name="backward" type="font-awesome-5" iconStyle={{color:'#eee',paddingLeft:5,fontSize: 20}}/>
        <Text style={{paddingLeft:5,fontSize:16,fontWeight:'bold',color:'#eee',marginLeft:'auto',marginRight:'auto'}}>Modify Trip</Text>
    </TouchableOpacity>
    )
}

export default ChangeDestination