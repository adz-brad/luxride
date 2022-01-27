import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'


const Account = () => {
    
    return(
        <>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',margin:5}}>
                <Icon name="playlist-edit" type="material-community" iconStyle={{color:'#111',padding:5,fontSize: 35}}/>
                <Text>Edit Favorites</Text>
            </TouchableOpacity>
    </>
    )
}


export default Account