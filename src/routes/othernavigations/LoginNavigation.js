import React from 'react'
import CheckEmailScreen from '../../screens/CheckEmailScreen'
import LoginScreen from '../../screens/LoginScreen'
import RecoveryPasswordScreen from '../../screens/RecoveryPasswordScreen'
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '../navigations/DrawerNavigator';
import ProfileScreen from '../../screens/ProfileScreen';

const Stack = createStackNavigator();

const LoginNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
       <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
       <Stack.Screen
        name="CheckEmail"
        component={CheckEmailScreen}
      />
      <Stack.Screen name="ForgetPassword" component={RecoveryPasswordScreen} />
      <Stack.Screen name="DashboardHome" component={DrawerNavigator} />
     

    </Stack.Navigator>
  )
}

export default LoginNavigation