import React, { useState } from 'react'
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const SplashScreen = ({Navigation}) => {
    useState(()=>{
        setTimeout(() => {
            Navigation.navigate('DashboardScreen')
        }, 5000);
    },[]);
  return (
    <View style={{ backgroundColor: 'black' }}>
    <View style={{ flex: 1, paddingTop: 50 }}>
        <Text>Splash Screen</Text>
    </View>
</View>
  )
}

export default SplashScreen