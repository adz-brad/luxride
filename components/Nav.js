import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

const navOptions = [
    {
        id: '001',
        title: 'Find a Ride',
        icon: <Icon name="car-sport-sharp" type="ionicon" iconStyle={{fontSize: 40}}/>,
        screen:'FindRide'
    },
    {
        id: '002',
        title: 'Route',
        icon: <Icon name="map-marker-distance" type="material-community" iconStyle={{fontSize: 36}}/>,
        screen:'Route'
    },
    {
        id: '003',
        title: 'History',
        icon: <Icon name="history" type="material" iconStyle={{fontSize: 38}}/>,
        screen:'RideHistory'
    },
    {
        id: '004',
        title: 'Account',
        icon: <Icon name="user-circle-o" type="font-awesome" iconStyle={{fontSize: 32}}/>,
        screen:'Account'
    }
]

const Nav = () => {

    const navigation = useNavigation()

    return(
        <View style={styles.nav}>
            <FlatList
                data={navOptions}
                horizontal
                keyExtractor={( item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.navIcon}
                        onPress={() => navigation.navigate(item.screen)}
                    >
                            {item.icon}
                            <Text style={styles.iconText}>{item.title}</Text>

                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.navList}
            >

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
      position: 'absolute',
      bottom:0,
      left:0,
      width: '100%',
      height:65,
      alignItems: 'center',
      backgroundColor: '#eee'
    },
    navList: {
        width:'100%',
        justifyContent:'space-around',
        paddingBottom:3,
    },
    navIcon: {
        marginTop: 'auto',
        alignItems:'center'
    },
    iconText: {
        color:'#111',
        fontSize: 14,
        fontWeight: 'bold',
    }
  })

export default Nav