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
import { theme_color } from '../constant/varible'



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
                    inactiveTintColor: "white",
                    activeTintColor: theme_color,
                    activeBackgroundColor: "#f1f2f6",
                    labelStyle: {

                        fontSize: 12,
                        position: "absolute",
                        bottom: 10
                    },
                    iconStyle: {
                        marginBottom: 25
                    }



                }} >
                    <Tab.Screen name="stack" component={StackNavigator} options={{ title: "HOME", tabBarIcon: ({ focused, size, color }) => (<MaterialIcons name="home" color={color} size={25} />) }}>

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
                    <Tab.Screen name="About" options={{ title: "ABOUT", tabBarIcon: ({ focused, size, color }) => (<MaterialIcons name="supervised-user-circle" color={color} size={25} />) }} component={About}></Tab.Screen>
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
            <Stack.Navigator>
                <Stack.Screen name="home" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="Background" component={Background} />
                <Stack.Screen name="Book_Ash_for_an_Event" component={Book_Ash_for_an_Event} />
                <Stack.Screen name="Business_Advice_Mentoring" component={Business_Advice_Mentoring} />
                <Stack.Screen name="ConnectWithAsh" component={ConnectWithAsh} />
                <Stack.Screen name="DigitalEntreprenuer" component={DigitalEntreprenuer} />
                <Stack.Screen name="Philanthropy" component={Philanthropy} />
                <Stack.Screen name="Publications" component={Publications} />
                <Stack.Screen name="Resources" component={Resources} />
                <Stack.Screen name="SocialMedia" component={SocialMedia} />
                <Stack.Screen name="Timeline" component={Timeline} />
                <Stack.Screen name="Form" component={Form} />
                <Stack.Screen name="Book" component={Book} />
                <Stack.Screen name="KhokhraWelfare" component={KhokhraWelfare} />
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
        height: 60,
        justifyContent: "center",
        backgroundColor: theme_color,
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