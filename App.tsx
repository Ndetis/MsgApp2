import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login/login'
import AuthStack from './src/navigation/authStack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
        <AuthStack/>
     
    </NavigationContainer>
  );
}

export default App;