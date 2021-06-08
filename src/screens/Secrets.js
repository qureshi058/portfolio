import React from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity} from 'react-native'


const Secrets =()=>{

    return(
        <>
        <View style={styles.container}>
            <Text>
                Secrets
            </Text>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Secrets