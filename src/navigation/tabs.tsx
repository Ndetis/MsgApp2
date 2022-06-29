import React, {FC} from 'react'
import { View,Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/home'
import Login from '../screens/login/login'
import SignUp from '../screens/signup/signup'

const Tab = createBottomTabNavigator()

function Chats(){
    return(
        <View>
            <Text>This your chats</Text>
        </View>
    )
}

function options(){
    return(
        <View>
            <Text>This your options</Text>
        </View>
    )
}
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: 'none'
            }}>
            <Tab.Screen name='home'  component={Home} />
            <Tab.Screen name='options' component={options} />
            <Tab.Screen name='chats' component={Chats} />
        </Tab.Navigator>
    )
}

export default Tabs;