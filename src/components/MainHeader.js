import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { theme_color } from '../constant/varible'
import Icon from 'react-native-vector-icons/MaterialIcons'


const MainHeader = ({ text, textColor, textSize, textStyle = {}, bgColor, style = {}, iconStyle, isIcon, iconColor, iconSize }) => {
    const navigation = useNavigation()
    return (
        <>

            <View style={{ ...styles.container, backgroundColor: bgColor ? bgColor : "white", ...style }}>
                <View style={{ marginLeft: 10 }}>
                    {isIcon ? <Icon onPress={() => navigation.goBack()} name="arrow-back" color={iconColor ? iconColor : "black"} size={iconSize ? iconSize : 30} /> : null}
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={{ fontSize: textSize ? textSize : 18, color: textColor ? textColor : "black", ...textStyle }}>{text}</Text>
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        alignItems: "center",
        height: 55,
        width: Dimensions.get("screen").width,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
})

export default MainHeader