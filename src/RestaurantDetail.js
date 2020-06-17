import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, SafeAreaView, Image, View, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios'



const RestaurantDetail = props => {

    const [restaurantId, setRestaurantId] = useState(0)
    const [restaurantInfo, setRestaurantInfo] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchId = () => {
        let id = props.route.params.restaurantId
        setRestaurantId(id)
    }

    useEffect(() => {

        fetchId()
        fetchDetail()
       
    }, [])

    const fetchDetail = async () => {
        let detail = await axios.get(`https://opentable.herokuapp.com/api/restaurants/${restaurantId}`).catch(error => console.log(error))
        console.log(detail.data)
        
       
        setRestaurantInfo(detail.data)
        setLoading(false)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                loading ?
                <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator/>
                </View>
                :

            <View style={styles.container}>
                            <Image
                                style={styles.image}
                                source={require('./assets/restaurant.jpg')}
                            />
                            <Text style={styles.name}>{restaurantInfo.name}</Text>
                            <View style={styles.borderInfo}>
                                <Text style={styles.address}>Address :{restaurantInfo.address}</Text>
                            <Text style={styles.city}>City :{restaurantInfo.city}</Text>
                            <Text style={styles.phone}>Phone :{restaurantInfo.phone}</Text>
                            </View>

                            <TouchableOpacity style={styles.randevuBtn}>
                                <Text style={styles.randevuTxt}>Randevu Al</Text>
                            </TouchableOpacity>
                        </View>

            }
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 10,
        padding: 5,
        alignItems: 'center'
    },
    image: {
        resizeMode: 'stretch',
        width: Dimensions.get('window').width / 1,
        height: Dimensions.get('window').height / 3
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        color:'#e74c3c',
        textDecorationLine:'underline',
        marginBottom:15,
        marginTop:10
    },
    address:{
        fontSize:16,
        color:'#34495e'
    },
    city:{
        fontSize:16,
        color:'#34495e'
    },
    phone:{
        fontSize:16,
        fontWeight:'bold',
        color:'#2ecc71'
    },
    borderInfo:{
        borderWidth:4,
        borderColor:'#bdc3c7',
        borderRadius:10,
        padding:10,
        borderStyle:'dashed'

    },
    randevuBtn:{
        padding:10,
        backgroundColor:'#27ae60'
    },
    randevuTxt:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    }
})

export default RestaurantDetail