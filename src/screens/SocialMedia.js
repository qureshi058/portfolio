import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import SocialMediaComponent from '../components/SocialMediaComponent'
import Header from '../components/Header'

const SocialMedia  = () => {
    const url="https://web.facebook.com/profile.php?id=100008698564560"
        return (
            <>
                <View style={styles.container}>
                <Header size={17} textStyle={{letterSpacing:5,fontWeight:"bold"}} style={{zIndex:0}} color="white" bgColor="#00060f" text="ASH SOCIAL "/>  
              <View style={styles.sectionSocailMedia}>
              <SocialMediaComponent link={url} iconName={"facebook"} text={"LIKE ASH ON FACEBOOK"} />
               <SocialMediaComponent link={url} iconName={"twitter"} text={"FOLLW ASH ON TWITTER"} />
               <SocialMediaComponent link={url} iconName={"instagram"} text={"FIND ASH ON INSTGRAM"} />
               <SocialMediaComponent link={url} iconName={"linkedin"} text={"CONNECT WITH ASH ON LINKED IN"} />
               <SocialMediaComponent link={url} iconName={"youtube-play"} text={"SUBSCRIBE TO ASH ON YOUTUBE"} />  
              </View>
              
                </View>
            </>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    width: "100%",
   alignItems: "center",
   backgroundColor:'white'
 
    }
    ,
    sectionSocailMedia:{
        flex: 1,
        width:"100%",
        padding: 30,
        paddingTop:10,
        alignItems:"center",
      

    }
})

export default SocialMedia
