import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity} from 'react-native'


const Publications =()=>{

    return(
        <>
        <View style={styles.container}>
            <Text>
            Publications
            </Text>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Publications