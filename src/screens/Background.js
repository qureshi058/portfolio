import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import AboutComponent from '../components/AboutComponent'
<<<<<<< HEAD
import Header from '../components/Header'
import { theme_color } from '../constant/varible.js'
=======
 import Header from '../components/Header'
import {theme_color} from '../constant/varible.js'
import MainHeader from '../components/MainHeader'
>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e

const image = require('../assets/main4.jpg')
let paraGraphs = ["Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use."]

const Background = () => {

    return (
        <>
        <View style={styles.container}>
        
        <ScrollView>
        {/* <Header size={17} color="#ffffff" bgColor="#1e272e" text="ASH BACKGROUND"/> */}

         <AboutComponent paraGraphs={paraGraphs} image={image}></AboutComponent>
         </ScrollView>
        </View>
        </>
    )
}

<<<<<<< HEAD
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
=======
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e
    }
})

export default Background