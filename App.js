import { Text, View , Button, TouchableOpacity} from 'react-native';
import {css} from './assets/css/Css';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home, Login} from './views';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options = {{
          title: 'BEYOND CURE',
          headerTintColor:'#333', 
          headerStyle : {backgroundColor: "#c8a2c8"},
          headerTitleStyle: {fontWeight:'bold', alignSelf: 'center'}
        }}/>
        <Stack.Screen name="Login" options = {{headerShown:false}} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

