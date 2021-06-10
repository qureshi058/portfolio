import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import {text_color,theme_color} from '../constant/varible'


const AboutComponent = ({ image, paraGraphs = [], imageStyle,paraStyle={},color }) => {

    return (
        <>
    
            <View style={styles.container}>
                <View style={{ width: "85%", alignItems: "center" }}>
                    <Image resizeMode="cover" style={{ width: "100%", height: 200, ...imageStyle }} source={image} ></Image>
                    <View>
                        {paraGraphs.length ? paraGraphs.map((para) => {
                            return(
                                <Text style={{ marginTop: 20, fontSize: 14,textAlign:"justify" , lineHeight: 25,color:color?color:text_color,...paraStyle }}>
                                {para}
                            </Text>
                            )

                        }) : null}
                    </View>
                </View>
            </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: "center",
        paddingBottom:40,

        width: Dimensions.get("screen").width
    }
})

export default AboutComponent