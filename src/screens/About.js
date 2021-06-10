import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground, Dimensions} from 'react-native'
import AboutComponent from '../components/AboutComponent'
 import Header from '../components/Header'
 import MainHeader from '../components/MainHeader'
import {theme_color} from '../constant/varible.js'
import { Tab } from 'react-native-elements';
import About_item from '../components/About_item_button'

const image = require('../assets/main4.jpg')
const About =({navigation})=>{

    
    return(
        <>

<View style={styles.container}>
<MainHeader textSize={16}  text="ABOUT ASH"></MainHeader>
<ImageBackground source={require('../assets/main5.jpg')} style={{flex:1,width:Dimensions.get("screen").width,opacity:1}}>
    <View style={{width:"100%",paddingLeft:30,paddingTop:30,paddingRight:30,}}>
<About_item onPress={()=>{navigation.navigate("Background")}} text="BACK GROUND"/>
<About_item onPress={()=>{navigation.navigate("Philanthropy")}} text="PHILANTROPHY"/>
<About_item onPress={()=>{navigation.navigate("Timeline")}} text="TIMELINE"/>
<About_item onPress={()=>{navigation.navigate("Business_Advice_Mentoring")}} text="BUSINESS ADVICE & MENTORING"/>
<About_item onPress={()=>{navigation.navigate("Book_Ash_for_an_Event")}} text="BOOK ASH FOR AN EVENT"/>
<About_item onPress={()=>{navigation.navigate("SocialMedia")}} text="SOCIAL MEDIA "/>
<About_item onPress={()=>{navigation.navigate("DigitalEntreprenuer")}} text="DIGITAL ENTERPRENEUR"/>
    </View>

</ImageBackground>
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

export default About