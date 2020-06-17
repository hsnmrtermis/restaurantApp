import React from 'react'
import {View , TextInput , StyleSheet} from 'react-native'

const MyInput = props => {

    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder="Şehir Ara"
            onChangeText={props.change}
            
            
            />
        </View>
    )


}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#95a5a6',
        borderRadius:10
    },
    container:{
        flex:1,
        margin:10,
        padding:5
    }
})

export default MyInput