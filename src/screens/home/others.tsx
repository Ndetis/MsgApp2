import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native'

const Others= ({navigator}) => {
    return(
        <View style={styles.container}>
            <Text>Find Others</Text>
            <Button
            title="click here"
            onPress={()=>alert('Button Clicked ! ')}
            />
        </View>
    )
}

export default Others;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    }
})