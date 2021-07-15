import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import AboutComponent from '../components/AboutComponent'
 import Header from '../components/Header'
import {theme_color} from '../constant/varible.js'
import MainHeader from '../components/MainHeader'
import {Divider} from 'react-native-elements'

const image = require('../assets/main4.jpg')
let paraGraphs = ["Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
   ]
    let paraGraphsTwo = ["Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use."]


const Background = () => {

    return (
        <>
        <View style={styles.container}>
        
        <ScrollView>
    <Header text="ASH BACKGROUND"/>

         <AboutComponent imageStyle={{mrginTop:20}} paraGraphs={paraGraphs} image={image}></AboutComponent>
         <Divider style={{marginTop:-30,marginLeft:40,marginRight:90,borderColor:theme_color,borderWidth:0.9}}></Divider>
         <AboutComponent imageStyle={{mrginTop:20}} paraGraphs={paraGraphsTwo} ></AboutComponent>
         </ScrollView>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    }
})

export default Background