import React, { useState, useEffect } from 'react'
import {Text, View, FlatList, ActivityIndicator} from 'react-native'
import axios from 'axios'
import ListItem from './components/ListItem'
import MyInput from './components/MyInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import ItemRestaurant from './components/ItemRestaurant'


const Restaurant = props => {

    const [originalList, setOriginalList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [loading, setLoading]  = useState(false)
    const [countRestaurant, setCountRestaurant] = useState(0)

    useEffect(() => {
        fetchRestaurant()
    }, [])

    const fetchRestaurant = async() => {
        setLoading(true)
        let response = await axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${props.route.params.restaurantName}`)
        setOriginalList(response.data.restaurants)
        setFilteredList(response.data.restaurants)
       
        setLoading(false)
    }

    const renderRestaurant = ({item}) => {
        return(
            <ItemRestaurant
            press={() => selectedRestaurant(item)}
            restaurant={item}/>
        )
    }

    function selectedRestaurant(restaurant){
        //console.log("Restoran id :"+restaurant.id)
        props.navigation.navigate("RestaurantDetail",{restaurantId:restaurant.id})
    }
    
    return(
        <SafeAreaView style={{flex:1}}>
             {
                 loading ? 
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <ActivityIndicator/>
                 </View>
                 :

                 <View>
               <FlatList
           data={originalList}
           keyExtractor={(item, index) => index.toString()}
        renderItem={renderRestaurant}
           
           /> 
            </View>
             }
            
        </SafeAreaView>
    )



}

export default Restaurant