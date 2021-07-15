import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import {fon_family, text_color,theme_color} from '../constant/varible'


const AboutComponent = ({ image, paraGraphs = [], imageStyle,paraStyle={},color,containerStyle }) => {

    return (
        <>
    
            <View style={{...styles.container,...containerStyle}}>
                <View style={{ width: "82%", alignItems: "center" }}>
                {image?<Image  style={{ width: "100%", resizeMode:"cover",height: 180, ...imageStyle }} source={image} ></Image>:null}
                    <View style={{width:"100%"}}>
                        {paraGraphs.length ? paraGraphs.map((para) => {
                            return(
                                <Text style={{...styles.textStyle, color:color?color:text_color,...paraStyle }}>
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
        paddingTop: 40,
        alignItems: "center",
        paddingBottom:40,
width: Dimensions.get("screen").width
    },
    textStyle:{
        marginTop: 20, fontSize: 12,textAlign:"justify" , lineHeight: 25,
        fontFamily:fon_family
    }
})

export default AboutComponent