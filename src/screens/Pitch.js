import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, Dimensions,ImageBackground} from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons'
import Micon from 'react-native-vector-icons/MaterialIcons'
import { text_color, theme_color } from '../constant/varible';
import Button from '../components/About_item_button'


const Pitch =()=>{

const image="https://img.freepik.com/free-photo/double-exposure-image-business-person_31965-2440.jpg?size=626&ext=jpg"
    return(
        <>
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={{height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}} source={require("../assets/main6.jpg")}>

            <View style={styles.form}>
      <View style={styles.input_box}>
      <Input
   placeholder="Name"
   leftIcon={{ type: 'MaterialIcons', name: 'supervised-user-circle',color:"white" }}
   style={styles.Input}
   inputContainerStyle={styles.input_container_style}
   placeholderTextColor="white"
   
//    onChangeText={value => this.setState({ comment: value })}
  />
      </View>
      <View style={styles.input_box}>
      <Input
   placeholder="Email"
   leftIcon={{ type: 'MaterialIcons', name: 'email',color:"white" }}
   style={styles.Input}
   inputContainerStyle={styles.input_container_style}
   placeholderTextColor="white"
//    onChangeText={value => this.setState({ comment: value })}
  />
      </View>
      <View style={styles.input_box}>
      <Input
   placeholder="Message"
   leftIcon={{ type: 'MaterialIcons', name: 'message',color:"white" }}
   style={styles.Input}
   inputContainerStyle={styles.input_container_style}
   placeholderTextColor="white"
  
//    onChangeText={value => this.setState({ comment: value })}
  />
      </View>
      <View style={{paddingTop:40,...styles.input_box}}>
      <Button text="Submit" size={18} bgColor={theme_color} color="white" style={{backGroundColor:theme_color,alignItems:"center",justifyContent:"center",borderRadius:30,}}>

</Button>
      </View >
      
            </View>
            </ImageBackground>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        
        alignItems:"center",
        width:Dimensions.get("screen").width,
    },
    form:{
     
        width:"85%",
        alignItems:"center"

    }
    ,
    Input:{
        width:"100%",
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        marginLeft:10


    
        
        
    },
    input_container_style:{borderBottomWidth:2,borderColor:theme_color}
    ,

    input_box:{
        width:"100%"
    }
})

export default Pitch