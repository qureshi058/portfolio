import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack'

//import screens ---------------------------------------------
import HomeScreen from '../screens/Home.js'
import About from '../screens/About.js'
import PitchScreen from '../screens/Pitch.js'
import Secrets from '../screens/Secrets.js'
import Background from '../screens/Background.js'
import Book_Ash_for_an_Event from '../screens/Book_Ash_for_an _Event.js'
import Book from '../screens/Book.js'
import Business_Advice_Mentoring from '../screens/Business Advice & Mentoring.js'
import ConnectWithAsh from '../screens/ConnectWithAsh.js'
import DigitalEntreprenuer from '../screens/DigitalEntreprenuer .js'
import Form from '../screens/Form.js'
import KhokhraWelfare from '../screens/KhokhraWelfare .js'
import Philanthropy from '../screens/Philanthropy.js'
import Publications from '../screens/Publications.js'
import Resources from '../screens/Resources.js'
import SocialMedia from '../screens/SocialMedia.js'
import Timeline from '../screens/Timeline.js'
// import Icons ------------------------------------------------
import Icon from 'react-native-vector-icons/Ionicons';
import fIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import varibale ---------------------
import { text_color, theme_color } from '../constant/varible'



//variable-----------------------------------
const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

// main Tab navigation --------------------------------------------------------------------------------
const Navigation = () => {
    const Tab = createBottomTabNavigator()
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="stack" tabBarOptions={{
                    style: { ...styles.tabBar },
<<<<<<< HEAD
                    inactiveTintColor: "white",
                    activeTintColor: theme_color,
                    activeBackgroundColor: "#f1f2f6",
                    labelStyle: {

                        fontSize: 12,
                        position: "absolute",
                        bottom: 10
=======
                    inactiveTintColor: "#747d8c",
                    activeTintColor:theme_color,
                   
                    labelStyle:{
                       
                        fontSize:11,
                        position:"absolute",
                        bottom:15
>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e
                    },
                    iconStyle: {
                        marginBottom: 25
                    }



                }} >
<<<<<<< HEAD
                    <Tab.Screen name="stack" component={StackNavigator} options={{ title: "HOME", tabBarIcon: ({ focused, size, color }) => (<MaterialIcons name="home" color={color} size={25} />) }}>
=======
                    <Tab.Screen name="Home" component={HomeScreen} options={{ title: "HOME",tabBarIcon:({focused,size,color})=>( <MaterialIcons name="home" color={color} size={25} />) }}>
>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e

                    </Tab.Screen >
                    <Tab.Screen options={{
                        title: "PITCH",
                        tabBarIcon: ({ focused, size, color }) =>
                        (
                            <MaterialIcons name="video-library" color={color} size={25} />
                        )

                    }} name="pitch" component={PitchScreen}></Tab.Screen>
                    <Tab.Screen name="Secrets" component={Secrets} options={{
                        title: "SECRETS",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="lock" color={color} size={25} />
                        ),
                    }}></Tab.Screen>
<<<<<<< HEAD
                    <Tab.Screen name="About" options={{ title: "ABOUT", tabBarIcon: ({ focused, size, color }) => (<MaterialIcons name="supervised-user-circle" color={color} size={25} />) }} component={About}></Tab.Screen>
=======
                    <Tab.Screen name="stack"  options={{ title: "ABOUT",tabBarIcon:({focused,size,color})=>( <MaterialIcons name="supervised-user-circle" color={color} size={25} />) }} component={StackNavigator}></Tab.Screen>
>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}
// stack screen navigator--------------------------------------------------
const StackNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <>
            <Stack.Navigator screenOptions={{
                headerStyle:{
                    height:80,
                    backgroundColor:theme_color,
                    

                },
                headerTitleStyle:{
                    color:"white",
                    alignSelf:"center",
                    marginRight:50,
                    fontSize:16

                },
           headerTintColor:"white"
            }}>
                <Stack.Screen name="About" options={{ headerShown: false,title:"ABOUT ASH" }} component={About} />
                <Stack.Screen name="Background" component={Background} options={{ headerShown: true,title:"ASH BACKGROUND" }} />
                <Stack.Screen name="Book_Ash_for_an_Event" component={Book_Ash_for_an_Event} options={{ title:"BOOK ASH FOR AN EVENT" }} />
                <Stack.Screen name="Business_Advice_Mentoring" component={Business_Advice_Mentoring} options={{ title:"BUSINESS ADVICE MENTORING" }} />
                {/* <Stack.Screen name="ConnectWithAsh" component={ConnectWithAsh} /> */}
                <Stack.Screen name="DigitalEntreprenuer" component={DigitalEntreprenuer}options={{ title:"DIGITAL ENTERPRENEUR" }} />
                <Stack.Screen name="Philanthropy" component={Philanthropy} options={{ title:"ASH PHILANTHROPY" }} />
                {/* <Stack.Screen name="Publications" component={Publications} /> */}
                {/* <Stack.Screen name="Resources" component={Resources} /> */}
                <Stack.Screen name="SocialMedia" component={SocialMedia} options={{ title:"SOCIAL MEDIA" }} />
                <Stack.Screen name="Timeline" component={Timeline} options={{ title:"ASH TIMELINE" }} />
                {/* <Stack.Screen name="Form" component={Form} />
                <Stack.Screen name="Book" component={Book} /> */}
                <Stack.Screen name="KhokhraWelfare" component={KhokhraWelfare} options={{ title:"KHOKRA WALFARE" }} />
            </Stack.Navigator>
        </>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tabBar: {
        width: width,
<<<<<<< HEAD
        height: 60,
=======
        height: 70,
>>>>>>> a1deb9fe6c7488f63850fa699b8205746fd6e77e
        justifyContent: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,


    }
})


export default Navigation