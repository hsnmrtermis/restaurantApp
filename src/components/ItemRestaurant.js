import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ItemRestaurant = props => {

    return(
        <TouchableOpacity
        onPress={props.press}
        >
        <View style={styles.container}>
            <Text style={styles.city}>{props.restaurant.name}</Text>
        </View>
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    container:{
        alignItems:'flex-start',
        padding:5,
        margin:10,
        backgroundColor:'#bdc3c7'
    },
    city:{
        fontSize:20,
        fontWeight:'bold',
        color:'#ecf0f1'
    }
})



export default ItemRestaurant