import React, {FC} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login/login';
import SignUp from '../screens/signup/signup';
import Home from '../screens/home/home';
import Tabs from './tabs';


const {Navigator, Screen} =  createStackNavigator();

const AuthStack : FC = () => {
    return (
        <Navigator  screenOptions={{headerShown: false}} initialRouteName='login'>
            <Screen name="login" component={Login}/>
            <Screen name="signup" component={SignUp}/>
            <Screen name="home" component={Home}/>
        </Navigator>
    )
}

export default AuthStack;