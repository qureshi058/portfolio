import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,Dimensions} from 'react-native'
import  AboutComponent from '../components/AboutComponent'
import { theme_color } from '../constant/varible'


const Book_Ash_for_an_Event =()=>{
const paraGraphs=["In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."]
    return(
        <>
          <ScrollView>
        <View style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center',paddingTop:20}}> 
       <Text style={styles.mainHeading}>Main Heading</Text>
       </View>
           <View style={{paddingTop:10,paddingBottom:20,flex:1}}>
           
           <AboutComponent image={{uri:"https://lh3.googleusercontent.com/proxy/qk9OmGWC-PZMKk-xJH6mk0R1A90VMbRSXWL-vtJiyRjOxuRTGqWmCUDy-ZWB8H9wyL2XXxRwWAlbkgqu_flgFLv6nYcmBZXRcwOQA9Pi2EoAlzDbJUux28y2mS3Oc0O0G6Tt-f9O9Ddo3pBUlN5p"}} paraGraphs={paraGraphs}/>  
            <AboutComponent image={{uri:"https://lh3.googleusercontent.com/proxy/qk9OmGWC-PZMKk-xJH6mk0R1A90VMbRSXWL-vtJiyRjOxuRTGqWmCUDy-ZWB8H9wyL2XXxRwWAlbkgqu_flgFLv6nYcmBZXRcwOQA9Pi2EoAlzDbJUux28y2mS3Oc0O0G6Tt-f9O9Ddo3pBUlN5p"}} paraGraphs={paraGraphs}/>  
            <AboutComponent image={{uri:"https://lh3.googleusercontent.com/proxy/qk9OmGWC-PZMKk-xJH6mk0R1A90VMbRSXWL-vtJiyRjOxuRTGqWmCUDy-ZWB8H9wyL2XXxRwWAlbkgqu_flgFLv6nYcmBZXRcwOQA9Pi2EoAlzDbJUux28y2mS3Oc0O0G6Tt-f9O9Ddo3pBUlN5p"}} paraGraphs={paraGraphs}/>  
       
           </View>
           <View style={{width:"100%",alignItems:"center",paddingBottom:40}} >
               <TouchableOpacity activeOpacity={2} style={styles.btn}>
                <Text style={{color:'white',fontWeight:"bold"}}>Book Ash</Text>
               </TouchableOpacity>
           </View>
        </View>
        </ScrollView>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        
        alignItems:"center",
        backgroundColor:"white",
        width:Dimensions.get("screen").width
      
    },
    btn:{backgroundColor:theme_color,width:"85%",height:50,justifyContent:"center",alignItems:"center",borderRadius:10},
    mainHeading:{
        fontSize:20,
        color:theme_color,
        fontWeight:"800"
    }
})

export default Book_Ash_for_an_Event