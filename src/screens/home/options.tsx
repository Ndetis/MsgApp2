import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native'

const Options= ({navigator}) => {
    return(
        <View style={styles.container}>
            <Text>Find Options !</Text>
            <Button
            title="click here"
            onPress={()=>alert('Button Clicked ! ')}
            />
        </View>
    )
}

export default Options;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    }
})