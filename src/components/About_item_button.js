import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import {theme_color} from '../constant/varible'



const About_item = ({text,color,size,textStyle={},bgColor,style={},onPress }) => {

    return (
        <>
      
            <TouchableOpacity activeOpacity={0.7} style={{...styles.btn,backgroundColor:bgColor?bgColor:null,...style}} onPress={onPress}>
                <Text style={{fontSize:size?size:15,color:color?color:"white",}}>{text}</Text>
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
    
       padding: 15,
    backfaceVisibility:"hidden",
    width:"100%",
    borderBottomColor:theme_color,
    borderBottomWidth:1

    }
})

export default About_item
// 