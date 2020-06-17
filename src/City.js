import React, { useState, useEffect } from 'react'
import {Text, View, FlatList, ActivityIndicator, SafeAreaView} from 'react-native'
import axios from 'axios'
import ListItem from './components/ListItem'
import MyInput from './components/MyInput'

const Sayfa = props => {

    const [liste, setListe] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [loading, setLoading] = useState(false)
    const [cityCount, setCityCount] = useState(0)
    const [search, setSearch] = useState("")
    const [selectedCities, setSelectedCities] = useState("")
    const fetchData = async() => {
        setLoading(true)
        let veri = await axios.get('https://opentable.herokuapp.com/api/cities')
        //console.log(veri.data.cities)
        setListe(veri.data.cities)
        setCityCount(veri.data.count)
        setFilteredList(veri.data.cities)
        setLoading(false)
    
    }

    const searchCity = (text) => {
        let filteredCity = liste.filter(function(item){
            const itemData = item.toUpperCase()
            const textData = text.toUpperCase()

            return itemData.indexOf(textData) > -1
        })
        setListe(filteredCity)
        setCityCount(filteredCity.length)
    }

    

   

    useEffect(() => {
        fetchData()
    } , [])

    const tick = (item) => {
        console.log(item)
    }

    const write = (text) => {
         setSearch(text)
    }
    const renderCity = ({item}) => {
        return (
            <ListItem
            press={() => selectedCity(item)}
            city={item}
            />
        )
    }
    function selectedCity(scity){
       // console.log(scity)
       props.navigation.navigate("Restaurants",{restaurantName:scity})
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
                <View>
                <MyInput  change={searchCity}/>
                <View style={{alignSelf:'center'}}>
                    <Text>Bulunan Şehir Sayısı :{cityCount}</Text>
                </View>
            </View>
            <View>
               <FlatList
           data={liste}
           keyExtractor={(item, index) => index.toString()}
        renderItem={renderCity}
           
           /> 
            </View>
            </View>
           }
            
           
        </SafeAreaView>
    )
}

export default Sayfa