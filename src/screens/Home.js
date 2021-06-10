import React, { useRef } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground, Dimensions, Animated } from 'react-native'
import { theme_color, text_color, fon_family } from '../constant/varible'
import MainHeader from '../components/MainHeader'



//  screen home start----------------------------
const Home = () => {
    //variable------------------------
    // let width=Dimensions.get('screen').width
    // let height=Dimensions.get("screen").height
    // const ref=useRef(new Animated.Value(0))
    const image = "https://thumbs.dreamstime.com/b/full-length-portrait-handsome-elegant-businessman-wearing-blue-suit-standing-hall-modern-office-building-holding-leather-bag-116641205.jpg"

    return (
        <>

            <View style={styles.container}>
                <MainHeader textSize={16} isIcon={false} text="ASH KHOKRE"></MainHeader>
                <ScrollView>
                    <View style={{ widt: "100%" }}>
                        <ImageBackground resizeMode="cover" source={require("../assets/main5.jpg")} style={{ height: Dimensions.get("screen").height * 0.75, width: "100%", justifyContent: "flex-end" }}>
                            <View style={{ paddingLeft: 30, paddingBottom: 50, paddingTop: 50, justifyContent: 'center', width: "80%", }}>
                                <Text style={{ ...styles.headText }}>HELLO , I 'm </Text>
                                <Text style={{ ...styles.headText }}>ASH KHOKRE</Text>
                                <View style={{ borderBottomWidth: 1, borderTopWidth: 1, borderColor: "white", paddingBottom: 10, justifyContent: "center", width: "100%", marginTop: 10 }}>
                                    <Text style={{ ...styles.simpleText, }}>BUSINESS CONSTRUCTOR</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ width: Dimensions.get("screen").width, padding: 30, backgroundColor: "white" }}>
                        {/* <View style={styles.descriptionBox}> */}

                        <Text style={{ color: theme_color, fontWeight: "bold", marginBottom: 10, fontSize: 18 ,fontFamily:fon_family }} >PERSONAL PROFILE</Text>
                        <Text style={{ color: "#1e272e", fontSize: 14,fontFamily:fon_family,textAlign:"justify" }}  >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without .</Text>
                        {/* </View> */}


                    </View>
                </ScrollView>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        width: Dimensions.get("screen").width,
    },
    descriptionBox: {


        width: "80%",
        padding: 25,
        fontFamily: fon_family,
        backgroundColor: "white",
        shadowColor: "#000",
        borderRadius: 6,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    }
    ,
    headText: {
        fontFamily: fon_family,
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },
    simpleText: {
        fontFamily: fon_family,
        fontSize: 17,
        color: "white",
        marginTop: 20,
        fontWeight: "bold",

    }
})

export default Home