import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,Image,ImageBackground,TouchableOpacity,
  useColorScheme,TextInput,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../../navigation/tabs'

//import { TouchableWithoutFeedback } from 'react-native-web';
interface LoginScreenProps{
  navigation : any
}

const image = { uri: "https://img.wallpapic.com/i4172-129-933/medium/beautiful-sky-nature-mountains-clouds-wallpaper.jpg" };

const Home=(props: LoginScreenProps) =>{

  const login = () => props.navigation.navigate('tabs')
  const register = () => props.navigation.navigate('signup')

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#fb5b5a"/>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Tabs />
        </ImageBackground>
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },

   image: {
    flex: 1,
    width:"100%",
    alignItems: 'center',
    justifyContent: "center"
  },

  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    color:"white",
  },

  loginText:{
    fontWeight: "bold",
    color:"white",
  },

  inputText:{
    height:50,
    color:"white"
  },

  forgot:{
    color:"white",
    fontSize:11
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

const state={
  email:"",
  password:""
}