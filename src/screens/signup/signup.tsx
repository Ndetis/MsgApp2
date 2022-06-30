import React from 'react';
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

const image = { uri: "https://img.wallpapic.com/i4172-129-933/medium/beautiful-sky-nature-mountains-clouds-wallpaper.jpg" };

interface SignUpScreenProps{
  navigation : any
}

const  SignUp = (props:SignUpScreenProps)=> {
 
  const login = () => props.navigation.navigate('login')
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fb5b5a"/>
    
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     <Image
        source={{
          uri: 'https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/sms-icon-14-256.png'
        }}
        style={{ width: 100, height: 100,justifyContent: 'center',marginBottom:30}}
      />
       <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="User-name" 
            placeholderTextColor="white"
           // onChangeText={text => this.setState({email:text})}
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Surname " 
            placeholderTextColor="white"
           // onChangeText={text => this.setState({email:text})}
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Phone Number" 
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

        
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>SIGN-UP</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text onPress={login} style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        </ImageBackground>
    </View>
  );
}
export default SignUp;
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
// const createUserTable = async () => {
//   db.transaction(tx => {
//     tx.executeSql(`
//       CREATE TABLE IF NOT EXISTS
//       Users
//       (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT)
//     `)
//   })
// }

// const createUser = async (name: string) => {
//   try {
//     db.transaction(tx => {
//       tx.executeSql(`
//         INSERT INTO Users (Name)
//         VALUES (?)
//       `, [name])
//     })
//     getUser();
//   } catch (error) {
//     console.log(error);
//   }
// }

// const editUser = async (id: number, name: string) => {
//   try {
//     db.transaction(tx => {
//       tx.executeSql(`
//         UPDATE Users 
//         SET Name = '${name}'
//         WHERE Id = '${id}'
//       `)
//     })
//     getUser();
//   } catch (error) {
//     console.log(error);
//   }
// }

// const createTable = async () => {
//   db.transaction((tx) => {
//     tx.executeSql(`
//       CREATE TABLE IF NOT EXISTS 
//       Cryptos
//       (Id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price VARCHAR(255), quantity DOUBLE);
//     `)
//   })
// }

// const dropTable = async () => {
//   db.transaction(tx => {
//     tx.executeSql(`
//       DROP TABLE Users;
//     `)
//   })
// }

// const getUser = async () => {
//   try {
//     db.transaction(tx => {
//       tx.executeSql(`
//         SELECT * FROM Users
//       `, [], (tx, res) => {
//         for (let i = 0; i < res.rows.length; i++) {
//           let user = res.rows.item(i);
//           setUser(user);
//         }
//       })
//     })
//   } catch (e) {
//     console.log(e);
//   }
// }