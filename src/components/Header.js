import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { fon_family } from '../constant/varible'


const Header = ({ text }) => {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{text}</Text>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#00060f',
        height: 95,
        width: Dimensions.get("screen").width,
        paddingLeft:10,
        paddingRight:10
    },
    textStyle: {
        letterSpacing: 3.5, fontWeight: "bold",
        fontSize: 17, color: "white",
        fontFamily:fon_family
    }
})

export default Header
//