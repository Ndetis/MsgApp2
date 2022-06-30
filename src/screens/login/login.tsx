import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Alert,
  StatusBar,
  StyleSheet,
  Text,Image,ImageBackground,TouchableOpacity,
  useColorScheme,TextInput,
  View,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage'
// import {  } from 'react';
//import { TouchableWithoutFeedback } from 'react-native-web';
interface LoginScreenProps{
  navigation : any
}

const image = { uri: "https://img.wallpapic.com/i4172-129-933/medium/beautiful-sky-nature-mountains-clouds-wallpaper.jpg" };

const db = SQLite.openDatabase(
  {
    name : 'sqlitebd',
    location:'default',
  },
  ()=> { },
error => {console.log(error)}
  
)

const Login=(props: LoginScreenProps) =>{

  const [name,setName] = useState('');
  const [password,setPassword] = useState('');

  useEffect(()=>{
    createUserTable();
    getData();
  },[])

const createUserTable = async () => {
  db.transaction(tx => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS
      Users
      (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT,Surname TEXT,Phone INTEGER,Password TEXT  )
    `)
  })
}


  const getData=()=>{
    try {
      
    } catch (error) {
      
    }
  }

  const setData = async () => {
    if (name.length == 0 || password.length == 0){
      Alert.alert('Warning!', 'Please fill your informations')
    }else{
      try {
          await  db.transaction(tx => {
              tx.executeSql(`
                INSERT INTO Users (Name)
                VALUES (?)
              `, [name])
            })
            getData();
          } catch (error) {
            console.log(error);
          }
    }

  }

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