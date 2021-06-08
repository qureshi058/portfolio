import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import AboutComponent from '../components/AboutComponent'
import Header from '../components/Header'
import { theme_color } from '../constant/varible.js'

const image = require('../assets/main4.jpg')
let paraGraphs = ["Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use."]

const Background = () => {

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <AboutComponent paraGraphs={paraGraphs} image={image}></AboutComponent>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Background