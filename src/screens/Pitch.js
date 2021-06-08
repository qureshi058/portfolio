import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, Dimensions,ImageBackground} from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons'
import Micon from 'react-native-vector-icons/MaterialIcons'
import { text_color, theme_color } from '../constant/varible';


const Pitch =()=>{

const image="https://i.pinimg.com/originals/08/40/f3/0840f320f9eabd256dda29bb90e4f40a.jpg"
    return(
        <>
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={{height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}} source={{uri:image}}>

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
   placeholder="Comment"
   leftIcon={{ type: 'MaterialIcons', name: 'email',color:"white" }}
   style={styles.Input}
   inputContainerStyle={styles.input_container_style}
   placeholderTextColor="white"
//    onChangeText={value => this.setState({ comment: value })}
  />
      </View>
      <View style={styles.input_box}>
      <Input
   placeholder="Comment"
   leftIcon={{ type: 'font-awesome', name: 'comment',color:"white" }}
   style={styles.Input}
   inputContainerStyle={styles.input_container_style}
   placeholderTextColor="white"
  
//    onChangeText={value => this.setState({ comment: value })}
  />
      </View>
      
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
        color:text_color,
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