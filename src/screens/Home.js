import React,{useRef} from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground,Dimensions,Animated} from 'react-native'



//  screen home start----------------------------
const Home =()=>{
//variable------------------------
// let width=Dimensions.get('screen').width
// let height=Dimensions.get("screen").height
// const ref=useRef(new Animated.Value(0))
const image ="https://thumbs.dreamstime.com/b/full-length-portrait-handsome-elegant-businessman-wearing-blue-suit-standing-hall-modern-office-building-holding-leather-bag-116641205.jpg"

    return(
        <>
        <ScrollView>
        <View style={styles.container}>
<View style={{widt:"100%"}}>
<ImageBackground resizeMode="cover" source={require("../assets/main3.jpg")} style={{height:Dimensions.get("screen").height*0.60,width:"100%"}}>

</ImageBackground>
</View>
<View style={{width:Dimensions.get("screen").width,alignItems:"center",paddingBottom:10,}}>
    <View style={styles.descriptionBox}>
         
<Text style={styles.headText}>Ashfaq Khokra</Text>
        <Text style={styles.simpleText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without .</Text>
 </View>
    
    
</View>
            
        </View>
        </ScrollView>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:"white",
        width:Dimensions.get("screen").width,
    },
    descriptionBox:{
        
        borderColor:"#192a56",
        borderWidth:1,
        width:"70%",
        padding:25,
        marginTop:-130,
        backgroundColor:"white",
        shadowColor: "#000",
       
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,

    }
    ,
    headText:{
fontSize:25,
color:"#192a56",
fontWeight:"bold"
    },
    simpleText:{
        fontSize:15,
        color:"#192a56",
        marginTop:20,
        letterSpacing:1
    }
})

export default Home