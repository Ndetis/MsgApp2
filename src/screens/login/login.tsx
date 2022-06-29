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

//import { TouchableWithoutFeedback } from 'react-native-web';
interface LoginScreenProps{
  navigation : any
}

const image = { uri: "https://img.wallpapic.com/i4172-129-933/medium/beautiful-sky-nature-mountains-clouds-wallpaper.jpg" };

const Login=(props: LoginScreenProps) =>{

  const login = () => props.navigation.navigate('home')
  const register = () => props.navigation.navigate('signup')

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#fb5b5a"/>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     <Image
        source={{
          uri: 'https://digitalasset.intuit.com/IMAGE/A9pgeoJgK/Taxcaster.png'
        }}
        style={{ width: 100, height: 100,justifyContent: 'center',marginBottom:30}}
      />
       <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="white"
           // onChangeText={text => this.setState({email:text})}
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="white"
            //onChangeText={text => this.setState({password:text})}
            />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text onPress={register} style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={login} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        </ImageBackground>
    </View>
  );
}
export default Login;
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