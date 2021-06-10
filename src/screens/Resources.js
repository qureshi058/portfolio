import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, Dimensions} from 'react-native'


const Resources =()=>{

    return(
        <>
        <View style={styles.container}>
        <Text>resources</Text>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
         }
  
})

export default Resources