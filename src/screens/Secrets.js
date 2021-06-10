import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Micon from 'react-native-vector-icons/MaterialIcons'
import MainHeader from '../components/MainHeader'
import {theme_color} from '../constant/varible'


const Secrets = () => {

    return (
        <>
            <View style={styles.container}>
                <MainHeader textSize={16} text="ASH SECRETS"></MainHeader>
                <ScrollView>
                   {/* resource box start------------------------------------------------------ */}
                <View style={styles.box}>
                    <View>
                        <Text style={styles.mainHeading}>RESOURCES</Text>
                        <Card.Divider style={{borderColor:theme_color,borderWidth:0.8,marginTop:8}}/>
                    </View>
                    <View>
            <TouchableOpacity activeOpacity={4} onPress={()=>alert("dhiugb")}>
            <Card>
  <Card.Title style={{color:theme_color}}>CONNECT WITH ASH</Card.Title>
  {/* <Card.Divider  /> */}
  <Card.Image source={require('../assets/main4.jpg')}>
    
  
  </Card.Image>
  <Text style={{marginBottom: 10,marginTop:15,textAlign:"center"}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
</Card>
            </TouchableOpacity>
                    </View>
                </View>
                {/* Publications box start------------------------------------------------------ */}
                <View style={styles.box}>
                    <View>
                        <Text style={styles.mainHeading}>PUBLICATION</Text>
                        <Card.Divider style={{borderColor:theme_color,borderWidth:0.8,marginTop:8}}/>
                    </View>
                    <View>
            <TouchableOpacity activeOpacity={4} onPress={()=>alert("dhiugb")}>
            <Card>
  <Card.Title style={{color:theme_color}}>MY MENTOR</Card.Title>
  {/* <Card.Divider/> */}
  <Card.Image source={{uri:"https://uploads-ssl.webflow.com/6027a0c20f124c04b4c62dfe/60880f76110b717819a8d26c_Life-Changing%20Books.jpg"}}>
    
  
  </Card.Image>
  <Text style={{marginBottom: 10,marginTop:15,textAlign:"center"}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
</Card>
            </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
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
        fontWeight:"bold"

    }
})

export default Secrets