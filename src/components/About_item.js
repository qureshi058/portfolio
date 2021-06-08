import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import {theme_color} from '../constant/varible'



const About_items = ({text,color,size,textStyle={},bgColor,style={},onPress }) => {

    return (
        <>
      
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={{fontSize:size?size:16,color:color?color:"white"}}>{text}</Text>
                </TouchableOpacity>
          
        </>
    )
}

const styles = StyleSheet.create({
    container: {
     
        
        alignItems: "center",
        justifyContent:"center",
     
        height:100,
 width: Dimensions.get("screen").width
    },
    btn:{
        paddingBottom:20,
        paddingTop:14,
    backfaceVisibility:"hidden",
    width:"100%",
    borderBottomColor:theme_color,
    borderBottomWidth:1

    }
})

export default About_items
// 