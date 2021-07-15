import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import AboutComponent from '../components/AboutComponent'
import Header from '../components/Header'
import MainHeader from '../components/MainHeader'
import { fon_family, theme_color } from '../constant/varible.js'
import myBook from '../content/bookContent'
import LinearGradient from 'react-native-linear-gradient'
import About_item from '../components/About_item_button'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Book = ({ navigation }) => {
// const BOOK=JSON.stringify(myBook)
    return (
        <>
            <LinearGradient  colors={["white","#8395a7"]}  style={styles.container}>
              <ScrollView style={{width:"100%"}}>
                <View style={styles.iconWrapper}>
                    <View style={{padding:30,paddingLeft:40,paddingRight:40,borderColor:theme_color,borderWidth:2.5,borderRadius:360}}>
                   <FontAwesome5  color={theme_color} size={80} name={"book"}/>
                   </View>
                   <Text style={styles.heading}>
                        {myBook.bookName}</Text>

                </View>
                <View style={{ flex: 1, width:"100%",paddingRight: 20, paddingLeft: 30,paddingBottom:30 }}>
                
                      {myBook.chapters.map((chapter)=>{
                        return   <About_item style={{borderBottomColor:theme_color,borderBottomWidth:1.3,paddingLeft:0,}} color={"black"} onPress={() => { navigation.navigate("Book_page",{chapterName:chapter.chapterName,chapterContent:chapter.chapterContent}) }} text={chapter.chapterName} />
                      })}
                        
                </View>
                </ScrollView>
            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        },
    iconWrapper: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
        paddingTop:40,
        width: "100%"
 },
    heading: {
        fontWeight:"bold",
        fontFamily: fon_family,
        fontSize: 25,
        color: "black",
        marginTop: 15,
        letterSpacing:1.5,
        

    }
})

export default Book