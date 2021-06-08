import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground, Dimensions} from 'react-native'
import AboutComponent from '../components/AboutComponent'
 import Header from '../components/Header'
 import MainHeader from '../components/MainHeader'
import {theme_color} from '../constant/varible.js'
import { Tab } from 'react-native-elements';
import About_item from '../components/About_item'

const image = require('../assets/main4.jpg')
const About =({navigation})=>{

    
    return(
        <>

<View style={styles.container}>
{/* <MainHeader isIcon={true}  text="ABOUT ASH"></MainHeader> */}
<ImageBackground source={require('../assets/main5.jpg')} style={{flex:1,width:Dimensions.get("screen").width,opacity:1}}>
    <View style={{width:"100%",paddingLeft:30,paddingTop:30,paddingRight:10}}>
<About_item onPress={()=>{navigation.navigate("Background")}} text="BACK GROUND"/>
<About_item text="BACK GROUND"/>
<About_item text="BACK GROUND"/>
<About_item text="BACK GROUND"/>
<About_item text="BACK GROUND"/>
<About_item text="BACK GROUND"/>
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