import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { theme_color, text_color } from '../constant/varible'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'


const Publications = ({navigation}) => {

    return (
        <>
            <View style={styles.container}>
                <Header size={17} textStyle={{ letterSpacing: 5, fontWeight: "bold" }} style={{ zIndex: 0 }} color="white" bgColor="#00060f" text="ASH BOOKS" />
                <LinearGradient colors={["white", "white"]} style={{ padding: 50, width: "100%", alignItems: "center", flex: 1, justifyContent: "center" }}>
                    <TouchableOpacity style={{ width: "100%" }} activeOpacity={4} onPress={() => navigation.navigate('Book')}>
                        <Card wrapperStyle={{ width: "100%", }}>
                            <Card.Title style={{ color: theme_color, fontSize: 17 }}>MY MENTOR</Card.Title>
                            {/* <Card.Divider/> */}
                            <Card.Image style={{ height: 260, resizeMode: "cover" }} source={require('../assets/book.jpg')}>


                            </Card.Image>

                        </Card>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        width: '100%'
    }
})

export default Publications