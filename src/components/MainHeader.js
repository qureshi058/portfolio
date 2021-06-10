import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import {theme_color} from '../constant/varible'
import Icon from 'react-native-vector-icons/MaterialIcons'


const MainHeader = ({text,textColor,textSize,textStyle={},bgColor,style={},iconStyle,isIcon,iconColor,iconSize }) => {
const navigation=useNavigation()
    return (
        <>
      
            <View style={{...styles.container,backgroundColor:bgColor?bgColor:theme_color,...style}}>
          {isIcon?<View style={{marginLeft:10}}>
          <Icon onPress={()=>navigation.goBack()} name="arrow-back" color={iconColor?iconColor:"white"} size={iconSize?iconSize:30}/>
          </View>:null}
               <View style={{flex:1,alignItems:"center"}}>
               <Text style={{fontSize:textSize?textSize:16,color:textColor?textColor:"white",...textStyle}}>{text}</Text>
               </View>
            </View>
          
        </>
    )
}

const styles = StyleSheet.create({
    container: {
     
        flexDirection:"row",
        alignItems: "center",
      
     
        height:80,
 width: Dimensions.get("screen").width,
 shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
    }
})

export default MainHeader