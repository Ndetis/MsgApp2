import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/authStack';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>  
        <AuthStack/>
    </NavigationContainer>
  );
}

export default App;