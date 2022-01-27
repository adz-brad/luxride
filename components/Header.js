import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

const Header = () => {

    const navigation = useNavigation()
    
    return(
        <View style={styles.header}>
            <Image
                style={styles.logo}
                source={require('../assets/images/luxrideLogo.png')}
            />
            <TouchableOpacity 
                style={styles.navIcon}
                onPress={() => navigation.navigate('Settings')}
            >
             <Icon 
                iconStyle={styles.settings}
                name="settings-outline" 
                type="ionicon" 
            />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'black',
        width:'100%',
        height:70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    logo: {
        height:60, 
        width:120,
        resizeMode:'contain',
        transform: ([{translateX:5}])
    },
    settings: {
        color:'#eee',
        paddingRight: 2,
        fontSize: 30,
    }
})

export default Header