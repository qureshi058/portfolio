import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import {Divider} from 'react-native-elements'
import AboutComponent from '../components/AboutComponent'
import {theme_color} from '../constant/varible'


const DigitalEntreprenuer =()=>{
    const image = require('../assets/main4.jpg')
let paraGraphs = ["Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
   ]
    let paraGraphsTwo = ["Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use."]

    return(
        <>
        <View style={styles.container}>
        <ScrollView>
    <Header    text="DIGITAL ENTREPRENEUR"/>

         <AboutComponent imageStyle={{mrginTop:5,marginBottom:5,resizeMode:"center"}} paraGraphs={paraGraphs} image={require('../assets/entrepreneur.jpg')}></AboutComponent>
         <Divider style={{marginTop:-20,marginLeft:30,marginRight:90,borderColor:theme_color,borderWidth:0.9}}></Divider>
         <AboutComponent image={image} containerStyle={{paddingTop:40,paddingBottom:20}} paraGraphs={[paraGraphsTwo[0]]} ></AboutComponent>
         <AboutComponent image={image} containerStyle={{paddingTop:20,paddingBottom:20}}  paraGraphs={[paraGraphsTwo[1]]} ></AboutComponent>
         <AboutComponent image={image} containerStyle={{paddingTop:20,paddingBottom:20}}  paraGraphs={[paraGraphsTwo[2]]} ></AboutComponent>
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

export default DigitalEntreprenuer 
