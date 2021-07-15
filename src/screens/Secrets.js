import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions,Animated } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Micon from 'react-native-vector-icons/MaterialIcons'
import MainHeader from '../components/MainHeader'
import {theme_color,text_color} from '../constant/varible'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';




const Secrets = ({navigation}) => {
    const [opacity,setOpacity]=useState(new Animated.Value(0))
    const [marginLeft,setMarginLeft]=useState(new Animated.Value(220))
    //useeefect function--------------------------------------------------------
    useEffect(()=>{
// Animated.parallel([fadeIn(),slideAnimtion()]).start()
fadeIn()
slideAnimtion()

    },[])
    // fadeIn animation function----------------------------------------------------
    function fadeIn(){
        Animated.timing(opacity,{
            toValue:1,
            duration:2000
        }).start()
    }
    // slide animation function --------------------------------------------------
    function slideAnimtion(){
        Animated.timing(marginLeft,{
            toValue:0,
            duration:800
        }).start()
    }
// naviagte to publiaction page function------------------------------
function goToPublication(){
navigation.navigate("Publications")
}

    return (
        <>
      
            <View style={styles.container}>
            <MainHeader textSize={16} text="ASH SECRETS"></MainHeader>
            <LinearGradient colors={["white","#8395a7"]}  style={{backgroundColor:"white",width:"100%",flex:1,justifyContent:"space-evenly",alignItems:"center"}}>
<Animated.View style={{...styles.secretWrapper,opacity:opacity,marginLeft:marginLeft}}>
  <TouchableOpacity onPress={goToPublication} activeOpacity={0.8} style={styles.iconWrapper}>
  <FontAwesome5 name={"users-cog"} size={55} color={theme_color}/>  
  </TouchableOpacity>
  <TouchableOpacity onPress={goToPublication} activeOpacity={0.8}>
      <Text style={styles.mainHeading}>Resources</Text></TouchableOpacity>
</Animated.View>
<Animated.View style={{...styles.secretWrapper,opacity:opacity,marginLeft:marginLeft}}>
 <TouchableOpacity activeOpacity={0.8} style={styles.iconWrapper}>
 <MaterialIcons name={"library-books"} size={55} color={theme_color}/>  
 </TouchableOpacity>
<TouchableOpacity activeOpacity={0.8}> 
    <Text style={styles.mainHeading}>Publications</Text>
    </TouchableOpacity>
</Animated.View>

            </LinearGradient>
            </View>
           
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:"white",
        alignItems: "center",
        width: Dimensions.get("screen").width,
    },
    box: {
        width: "100%",
        alignItems: "center",
        padding: 20,
        paddingTop:40,
        paddingBottom:40
    },
    mainHeading:{
        fontSize:20,
        color:theme_color,
        fontWeight:"bold",
        marginTop:10

    },
    secretWrapper:{
        justifyContent:"center",
        alignItems:"center",
      
   

},
iconWrapper:{
    padding:30,borderColor:theme_color,borderWidth:4,justifyContent:"center",alignItems:'center',borderRadius:80
}
})

export default Secrets
{/* 
<ScrollView> */}
   {/* resource box start------------------------------------------------------ */}
{/* <View style={styles.box}>
    <View>
        <Text style={styles.mainHeading}>RESOURCES</Text>
        <Card.Divider style={{borderColor:theme_color,borderWidth:0.8,marginTop:8}}/>
    </View>
    <View>
<TouchableOpacity activeOpacity={4} onPress={()=>alert("dhiugb")}>
<Card>
<Card.Title style={{color:theme_color}}>CONNECT WITH ASH</Card.Title> */}
{/* <Card.Divider  /> */}
{/* <Card.Image source={require('../assets/main4.jpg')}>


</Card.Image>
<Text style={{marginBottom: 10,marginTop:15,textAlign:"center"}}>
The idea with React Native Elements is more about component structure than actual design.
</Text>
</Card>
</TouchableOpacity>
    </View>
</View> */}
{/* Publications box start------------------------------------------------------ */}
{/* <View style={styles.box}>
    <View>
        <Text style={styles.mainHeading}>PUBLICATION</Text>
        <Card.Divider style={{borderColor:theme_color,borderWidth:0.8,marginTop:8}}/>
    </View>
    <View>
<TouchableOpacity activeOpacity={4} onPress={()=>alert("dhiugb")}>
<Card>
<Card.Title style={{color:theme_color}}>MY MENTOR</Card.Title> */}
{/* <Card.Divider/> */}
{/* <Card.Image source={{uri:"https://uploads-ssl.webflow.com/6027a0c20f124c04b4c62dfe/60880f76110b717819a8d26c_Life-Changing%20Books.jpg"}}>


</Card.Image>
<Text style={{marginBottom: 10,marginTop:15,textAlign:"center"}}>
The idea with React Native Elements is more about component structure than actual design.
</Text>
</Card>
</TouchableOpacity>
    </View>
</View>
</ScrollView> */}