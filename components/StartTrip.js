import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectDestination } from '../slices/navSlice'

const StartTrip = ({selected}) => {

    const navigation = useNavigation()
    const destination = useSelector(selectDestination)

    return(
        <TouchableOpacity 
        onPress={() => {
            console.log('Start Trip')
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
            backgroundColor: !selected ? 'gray' : 'green',
            borderTopRightRadius:30,
            borderBottomRightRadius:30,
        }}
    > 
        <Text style={{paddingLeft:5,fontSize:16,fontWeight:'bold',color:'#eee',marginLeft:'auto',marginRight:'auto'}}>Start Trip</Text>
        <Icon name="forward" type="font-awesome-5" iconStyle={{color:'#eee',paddingRight:5,fontSize: 20}}/>
    </TouchableOpacity>
    )
}

export default StartTrip