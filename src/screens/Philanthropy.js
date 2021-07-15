import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity,Dimensions } from 'react-native'
import Header from '../components/Header'
import { Divider } from 'react-native-elements'
import AboutComponent from '../components/AboutComponent'
import { fon_family, theme_color } from '../constant/varible'


const Philantrophy = () => {
    const image = require('../assets/main4.jpg')
    let paraGraphs = ["Material Kit React Native is a fully coded app template built over Galio.io"]
    let paraGraphsTwo = ["Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
        "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
        "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use.",
        "Material Kit React Native is a fully coded app template built over Galio.io, React Native and Expo to allow you to create powerful and beautiful mobile applications. We have redesigned all the usual components in Galio to make it look like Google's material design, minimalistic and easy to use."]

    return (
        <>
            <View style={styles.container}>
                <ScrollView style={{width:'100%'}}>
                    <Header text="KHOKRE WALFARE" />
                    <View style={{width:"100%"}}>
                        <AboutComponent imageStyle={{  resizeMode: "center" }} paraGraphs={paraGraphs} image={require('../assets/entrepreneur.jpg')}></AboutComponent>
                        <Divider style={{ marginTop: -20, marginLeft: 30, marginRight: 90, borderColor: theme_color, borderWidth: 0.9 }}></Divider>
                        <AboutComponent image={image} containerStyle={{ paddingTop: 40, paddingBottom: 20 }} paraGraphs={[paraGraphsTwo[0], paraGraphsTwo[1], paraGraphsTwo[2]]} ></AboutComponent>
                    </View>
                    <View style={{ width: "100%", alignItems: "center", paddingBottom: 40,paddingTop:40 }} >
                        <TouchableOpacity activeOpacity={2} style={styles.btn}>
                            <Text style={{ color: 'white', fontWeight: "bold",letterSpacing:1.3,fontSize:13.2,fontFamily:fon_family }}>Veiw Khokre Walfare Website</Text>
                        </TouchableOpacity>
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
        width:Dimensions.get("screen").width
    },
    btn:{backgroundColor:theme_color,width:"85%",height:47,justifyContent:"center",alignItems:"center",borderRadius:10},
})

export default Philantrophy