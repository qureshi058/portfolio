import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { text_color, theme_color, fon_family } from '../constant/varible'
import Entypo from 'react-native-vector-icons/Entypo'
import { Card, ListItem, Button, Icon } from 'react-native-elements'



const TimelineComponent = ({ image, paraGraphs = [], Year }) => {

    return (
        <>
            <Card containerStyle={{ padding: 0, width: 300, margin:0 }} >
                <View style={{ backgroundColor: theme_color, alignItems: "center", justifyContent: "center", height: 50 }}>
                    {/* <Card.Title style={{ color: "white" }}>{Year}</Card.Title> */}
                    <Text style={{ color: "white", fontSize: 22, fontFamily: fon_family,fontWeight:'bold' }}>{Year}</Text>
                </View>
                {/* <Card.Divider  /> */}
               {image? <Card.Image style={{margin:10}} source={image}>
                </Card.Image>:null}
                <View style={{ paddingLeft: 15, paddingTop: 30,paddingRight:20, width: "100%", alignItems: "flex-start", justifyContent: "center" }}>
                    {paraGraphs.length ? paraGraphs.map((para, i) =>
                        <Text style={{ marginBottom: 30, textAlign: "left",fontFamily:fon_family,lineHeight:25 }}>
                            {para}
                        </Text>
                    ) : null}
                </View>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: 30,
        alignItems: "center",
        paddingBottom: 40,

        width: Dimensions.get("screen").width
    }
})

export default TimelineComponent