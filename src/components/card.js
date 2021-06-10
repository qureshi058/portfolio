import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'


const Card = ({text,color,size,textStyle={},bgColor,style={} }) => {

    return (
        <>
      
            <View style={{...styles.container,backgroundColor:bgColor?bgColor:"#2C3A47",...style}}>
                <Text style={{fontSize:size?size:18,color:color?color:"white"}}>{text}</Text>
            </View>
          
        </>
    )
}

const styles = StyleSheet.create({
    container: {
     
        
        alignItems: "center",
        justifyContent:"center",
     
        height:100,
 width: Dimensions.get("screen").width
    }
})

export default Card
// 