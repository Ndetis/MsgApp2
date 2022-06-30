import React, {FC} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login/login';
import SignUp from '../screens/signup/signup';
import Tabs from './tabs';


const {Navigator, Screen} =  createStackNavigator();

const AuthStack : FC = () => {
    return (
        <Navigator  screenOptions={{headerShown: false}} initialRouteName='signup'>
            <Screen name="login" component={Login}/>
            <Screen name="signup" component={SignUp}/>
            <Screen name="home" component={Tabs}/>
        </Navigator>
    )
}

export default AuthStack;