import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,Dimensions} from 'react-native'
import MainHeader from '../components/MainHeader'
import TimelineCard from '../components/TimeLineCard'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {theme_color} from '../constant/varible'


const Timeline =()=>{

    return(
        <>
        <ScrollView>
        <View style={styles.container}>
          
        <TimelineCard  Year={2010} paraGraphs={['Founder and CEO of E-dropship Company', ]}>
               </TimelineCard>
               <EntypoIcon style={styles.iconStyle} size={50} name={"dots-three-vertical"} color={"black"} />
               <TimelineCard  Year={2010} paraGraphs={['Founder and CEO of E-dropship Company', ]}>
               </TimelineCard>
               <EntypoIcon style={styles.iconStyle} size={50} name={"dots-three-vertical"} color={"black"} />
               <TimelineCard  Year={2010} paraGraphs={['Founder and CEO of E-dropship Company',"Launched International Recognized  Magzine ","Launched International Recognized  Magzine " ]}>
               </TimelineCard>
               <EntypoIcon style={styles.iconStyle}  size={50} name={"dots-three-vertical"} color={"black"} />
               <TimelineCard  Year={2011} paraGraphs={['Founder and CEO of E-dropship Company',"Launched International Recognized  Magzine "]}>
               </TimelineCard>
               <EntypoIcon style={styles.iconStyle} size={50} name={"dots-three-vertical"} color={"black"} />
               <TimelineCard image={require('../assets/main7.jpg')} Year={2012} paraGraphs={['Founder and CEO of E-dropship Company',"Launched International Recognized  Magzine "]}>
               </TimelineCard>
               <EntypoIcon style={styles.iconStyle} size={50} name={"dots-three-vertical"} color={"black"} />
               <TimelineCard image={require('../assets/main7.jpg')} Year={2013} paraGraphs={['Founder and CEO of E-dropship Company',]} >
               </TimelineCard>
               
               </View>
     
        </ScrollView>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
      width: Dimensions.get("screen").width,
        alignItems:"center",
        backgroundColor:"white",
        paddingTop:30,
        paddingBottom:30
        
    },
    iconStyle:{
        marginTop:-4,
        marginBottom:-4
    }
})

export default Timeline