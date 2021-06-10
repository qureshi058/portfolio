import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, Dimensions,ImageBackground} from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons'
import Micon from 'react-native-vector-icons/MaterialIcons'
import { text_color, theme_color } from '../constant/varible';
import Button from '../components/About_item_button'
import MainHeader from '../components/MainHeader'


const Pitch =()=>{

const image="https://img.freepik.com/free-photo/double-exposure-image-business-person_31965-2440.jpg?size=626&ext=jpg"
    return(
        <>
     
        <View style={styles.container}>
        {/* <ImageBackground resizeMode="cover" style={{height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}} source={require("../assets/main6.jpg")}> */}
        <MainHeader textSize={16} text="PITCH"/>
{/* <ScrollView contentContainerStyle={{justifyContent:"center",alignItems:"center",alignContent:"center",backgroundColor:'red'}} style={{flex:2}}> */}
         <View style={{flex:1,width:'100%',alignContent:"center",justifyContent:"center"}}>
            <View style={styles.form}>
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
      <View style={{paddingTop:40,...styles.input_box}}>
      <Button text="Submit" size={15} bgColor={theme_color} color="white" style={{backGroundColor:theme_color,alignItems:"center",justifyContent:"center",borderRadius:25,height:55}}>

</Button>
      </View >
      
            </View>
            </View>
            {/* </ImageBackground> */}
            {/* </ScrollView> */}
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
    form:{
     
        width:"85%",
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
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 8,

    }
    ,
    Input:{
        width:"100%",
        color:"#747d8c",
        fontSize:15,
        fontWeight:"bold",
        marginLeft:10


    
        
        
    },
    input_container_style:{borderBottomWidth:1,borderColor:theme_color}
    ,

    input_box:{
        width:"100%"
    },
    mainHeading:{
        fontSize:25,
        color:theme_color,
        fontWeight:"bold"
    }
})

export default Pitch