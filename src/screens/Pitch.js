import React, { useEffect, useState,useRef } from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, Dimensions,ImageBackground,Animated} from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons'
import Micon from 'react-native-vector-icons/MaterialIcons'
import { text_color, theme_color } from '../constant/varible';
import Button from '../components/About_item_button'
import MainHeader from '../components/MainHeader'
import LinearGradient from 'react-native-linear-gradient'


const Pitch =()=>{
// const [formMargin,setFormMargin] =useState(new Animated.Value(200))
const formMargin = useRef(new Animated.Value(200)).current
const fadeAnim = useRef(new Animated.Value(1)).current
// useEffect function --------------------------
useEffect(()=>{
    formAnimation()
},[])
// form animation function ------------------------
function formAnimation(){
Animated.timing(
    formMargin,{
        toValue:-90,
        duration: 1000,
      
    }
).start()
}
    return(
        <>
     
        <View style={styles.container}>
       
        <MainHeader textSize={16} text="PITCH"/>
        <ScrollView style={{width:"100%",flex:1,display:"flex"}}>
        <LinearGradient   colors={["#a5b1c2",theme_color]} style={styles.Box_one}>
        <Text style={{...styles.mainHeading,fontSize:18,color:"white"}}>Dummy Heading</Text>
<Text style={styles.simple_text}>It is a long established fact that a reader will be distracted by the readable content </Text>
        </LinearGradient>
{/* */}
         <View style={styles.Box_two}>
            <Animated.View  style={{...styles.form,marginTop:formMargin,opacity: fadeAnim}}  >
            <View style={{width:"100%",paddingBottom:40,justifyContent:"center",alignItems:"center"}}>
    <Text style={styles.mainHeading}>FILL FORM</Text>
</View>
      <View style={styles.input_box}>
      <Input
   placeholder="Name"
   leftIcon={{ type: 'MaterialIcons', name: 'supervised-user-circle',color:"#747d8c" }}
   style={styles.Input}
   inputContainerStyle={styles.input_container_style}
   placeholderTextColor="#747d8c"
   
//    onChangeText={value => this.setState({ comment: value })}
  />
      </View>
      <View style={styles.input_box}>
      <Input
   placeholder="Email"
   leftIcon={{ type: 'MaterialIcons', name: 'email',color:"#747d8c" }}
   style={styles.Input}
   inputContainerStyle={styles.input_container_style}
   placeholderTextColor="#747d8c"
//    onChangeText={value => this.setState({ comment: value })}
  />
      </View>
      <View style={styles.input_box}>
      <Input
   placeholder="Message"
   leftIcon={{ type: 'MaterialIcons', name: 'message',color:"#747d8c" }}
   style={styles.Input}
   inputContainerStyle={styles.input_container_style}
   placeholderTextColor="#747d8c"
  
//    onChangeText={value => this.setState({ comment: value })}
  />
      </View>
      <View style={{paddingTop:40,alignItems:"center",...styles.input_box}}>
      <Button text="Submit" size={15} bgColor={theme_color} color="white" style={{backGroundColor:theme_color,alignItems:"center",justifyContent:"center",borderRadius:15,padding:10,width:"70%"}}>

</Button>
      </View >
      
            </Animated.View>
            </View>
    
            </ScrollView>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        width:Dimensions.get("screen").width,
        backgroundColor:"white"
    },
    Box_one:{
        height:350,
        width: '100%',
        backgroundColor:theme_color,
    padding: 15,
    paddingTop:100,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    Box_two:{flex:1,width:'100%',alignItems:"center",
paddingBottom:30},
    form:{
        zIndex:2,
     
        width:"93%",
        alignItems:"center",
        justifyContent:'center',
      
        backgroundColor:"white",
        alignSelf:"center",
        alignContent:"center",
        padding:15,
        paddingBottom:30,
        paddingTop:30,
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.34,
        shadowRadius: 2.27,
        
        elevation: 3,

    }
    ,
    Input:{
        width:"100%",
        color:"#747d8c",
        fontSize:13,
        fontWeight:"bold",
        marginLeft:10


    
        
        
    },
    input_container_style:{borderBottomWidth:1,borderColor:theme_color}
    ,

    input_box:{
        width:"100%"
    },
    simple_text:{
        fontSize:14,
        color:"white",
        textAlign:"justify",
        lineHeight:23,
        marginTop:10
        
    },
    mainHeading:{
        fontSize:20,
        color:theme_color,
        fontWeight:"bold"
    }
})

export default Pitch