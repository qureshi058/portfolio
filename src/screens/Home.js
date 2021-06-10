<<<<<<< HEAD
import React, { useRef } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground, Dimensions, Animated } from 'react-native'
import { theme_color, text_color } from '../constant/varible'
=======
import React,{useRef} from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground,Dimensions,Animated} from 'react-native'
import {theme_color,text_color} from '../constant/varible'
import MainHeader from '../components/MainHeader'
>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e



//  screen home start----------------------------
const Home = () => {
    //variable------------------------
    // let width=Dimensions.get('screen').width
    // let height=Dimensions.get("screen").height
    // const ref=useRef(new Animated.Value(0))
    const image = "https://thumbs.dreamstime.com/b/full-length-portrait-handsome-elegant-businessman-wearing-blue-suit-standing-hall-modern-office-building-holding-leather-bag-116641205.jpg"

    return (
        <>
<<<<<<< HEAD
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ widt: "100%" }}>
                        <ImageBackground resizeMode="cover" source={require("../assets/main3.jpg")} style={{ height: Dimensions.get("screen").height * 0.60, width: "100%" }}>

                        </ImageBackground>
                    </View>
                    <View style={{ width: Dimensions.get("screen").width, alignItems: "center", paddingBottom: 10, }}>
                        <View style={styles.descriptionBox}>

                            <Text style={styles.headText}>Ashfaq Khokra</Text>
                            <Text style={styles.simpleText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without .</Text>
                        </View>



                    </View>

                </View>

            </ScrollView>
=======
       
        <View style={styles.container}>
        <MainHeader textSize={16} isIcon={false}   text="ASH KHOKRE"></MainHeader>
        <ScrollView>
<View style={{widt:"100%"}}>
<ImageBackground resizeMode="cover" source={require("../assets/main5.jpg")} style={{height:Dimensions.get("screen").height*0.75,width:"100%",justifyContent:"flex-end"}}>
<View style={{paddingLeft:30,paddingBottom:50,paddingTop:50,justifyContent:'center',width:"80%",}}>
    <Text style={{...styles.headText}}>HELLOW,I'M </Text>
    <Text style={{...styles.headText}}>ASH KHOKRE</Text>
    <View style={{borderBottomWidth:1,borderTopWidth:1,borderColor:"white",paddingBottom:10,justifyContent:"center",width:"100%",marginTop:10}}>
    <Text style={{...styles.simpleText,}}>BUSINESS CONSTRUCTOR</Text>
    </View>
</View>
</ImageBackground>
</View>
<View style={{width:Dimensions.get("screen").width,padding:30,backgroundColor:"white"}}>
    {/* <View style={styles.descriptionBox}> */}
         
<Text style={{color:theme_color,fontWeight:"bold",marginBottom:10,fontSize:18}} >PERSONAL PROFILE</Text>
        <Text style={{color:"#1e272e",fontSize:14}}  >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without .</Text>
 {/* </View> */}
    
    
</View>
</ScrollView>       
        </View>

>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e
        </>
    )
}

<<<<<<< HEAD
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: Dimensions.get("screen").width,
    },
    descriptionBox: {

        // borderColor: theme_color,
        // borderWidth: 1,
        width: "80%",
        padding: 25,
        marginTop: -130,
        backgroundColor: "white",
=======
const styles= StyleSheet.create({
    container:{
        flex:1,
      
        width:Dimensions.get("screen").width,
    },
    descriptionBox:{
        
       
        width:"80%",
        padding:25,
       
        backgroundColor:"white",
>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e
        shadowColor: "#000",
        borderRadius: 6,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    }
    ,
<<<<<<< HEAD
    headText: {
        fontSize: 25,
        color: theme_color,
        fontWeight: "bold"
    },
    simpleText: {
        fontSize: 15,
        color: text_color,
        marginTop: 20,
        letterSpacing: 1
=======
    headText:{
fontSize:27,
color:"white",
fontWeight:"bold"
    },
    simpleText:{
        fontSize:14,
        color:"white",
        marginTop:20,
        fontWeight:"bold",

>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e
    }
})

export default Home