import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import AboutComponent from '../components/AboutComponent'
import Header from '../components/Header'
import { fon_family, theme_color } from '../constant/varible.js'
import MainHeader from '../components/MainHeader'
import { Divider } from 'react-native-elements'

const image = require('../assets/main4.jpg')
let paraGraphs = ["Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
]
let paraGraphsTwo = ["Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
    "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use."]


const Book_page = (props) => {
    const {chapterName,chapterContent}=props.route.params
    return (
        <>
            <View style={styles.container}>

                <ScrollView style={{ width: "100%" }}>
                    <Header text={chapterName} />
                    <View style={styles.sectionContent}>
                        <Text style={styles.textStyle}>
                        {chapterContent}
                           </Text>
                    </View>

                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: Dimensions.get('screen').width
    },
    sectionContent:{
        padding: 22,
        paddingTop:25,
    },
    textStyle:{
        fontFamily:fon_family,
        lineHeight:29,
        letterSpacing:0.5,
        fontSize:13.5,
        textAlign:"justify"
    }
})

export default Book_page