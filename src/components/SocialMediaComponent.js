import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image,Animated,Linking } from 'react-native'
import { text_color, theme_color, fon_family } from '../constant/varible'
import Entypo from 'react-native-vector-icons/Entypo'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const SocialMedia = ({ iconName,text,link}) => {
const [marginLeft,setMarginLeft]=useState(new Animated.Value(800))



useEffect(()=>{
    slideAnimation()
})
// Slide animtaion-------------------------------------------------
function slideAnimation(){
Animated.timing(marginLeft,{
    toValue:0,
    duration:2000,
   
}).start()


}
// open url bfunction------------------------------------
const socialNavigate = () => {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };
    return (
        <>
    <Animated.View style={{...styles.container,marginLeft:marginLeft}}>
        <TouchableOpacity onPress={socialNavigate} style={styles.socialWrapper} activeOpacity={0.8}>
<FontAwesome size={40} color={"white"} name={iconName}/>
<Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop:25
  
    },
    socialWrapper:{width:'100%',
    flexDirection:"row",
    alignItems:'center',
    padding:12,
    paddingLeft:25,
    backgroundColor:theme_color
},
textStyle:{
    fontFamily:fon_family,
    fontSize:10,
    color: 'white',
    marginLeft:25,
   textAlign:"left"
    
}


    
})

export default SocialMedia