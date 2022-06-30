import React, {FC} from 'react'
import { StyleSheet, View,Image,Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Options from '../screens/home/options'
import Chats from '../screens/home/chats'
import Others from '../screens/home/others'
import Accueil from '../screens/home/home'
import ContactsList from '../screens/home/contact'
const Tab = createBottomTabNavigator()


const Tabs = () => {
    return (
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:[
                {
                "display":'flex',
                "position" : "absolute",
                "bottom":10 ,
                "left":10 ,
                "right":10 ,
                "elevation":0,
                "backgroundColor":'#fff',
                "borderRadius":15,
                "height":70,
                ...styles.shadow
                },null]
          
          }
            }
            >
            <Tab.Screen name='Accueil'  component={Accueil} 
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image 
                    source={require('../assets/icons/home.png')}
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? '#fb5b5a' : '#465881',
                    }}
                    />
                    <Text
                    style={{color:focused ? '#fb5b5a' : '#465881',display:focused?'flex':'none',fontSize : 12}}>
                    Home
                   </Text>
                    </View>
                ),
            }}
            />
            <Tab.Screen name="Options" component={Options} 
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image 
                    source={require('../assets/icons/settings.png')}
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? '#fb5b5a' : '#465881',
                    }}
                    />
                    <Text
                    style={{color:focused ? '#fb5b5a' : '#465881',display:focused?'flex':'none',fontSize : 12}}>
                    settings
                   </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Chats" component={Chats}
             options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image 
                    source={require('../assets/icons/chat.png')}
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? '#fb5b5a' : '#465881',
                    }}
                    />
                   <Text
                    style={{color:focused ? '#fb5b5a' : '#465881',display:focused?'flex':'none',fontSize : 12}}>
                    chats
                   </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Contacts" component={ContactsList}
             options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image 
                    source={require('../assets/icons/contact.png')}
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? '#fb5b5a' : '#465881',
                    }}
                    />
                    <Text
                    style={{color:focused ? '#fb5b5a' : '#465881',display:focused?'flex':'none',fontSize : 12}}>
                    contacts
                   </Text>
                    </View>
                ),
            }}
            />
            <Tab.Screen name="Others" component={Others}
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image 
                    source={require('../assets/icons/search.png')}
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? '#fb5b5a' : '#465881',
                    }}
                    />
                    <Text
                    style={{color:focused ? '#fb5b5a' : '#465881',display:focused?'flex':'none',fontSize : 12}}>
                    search
                   </Text>
                    </View>
                ),
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'#fb5b5a',
        shadowOffset: {
            width : 0,
            height:10,
        },
        shadowOpacity:0.5,
        shadowRadius:3.5,
        elevation:10
    }
})

export default Tabs;