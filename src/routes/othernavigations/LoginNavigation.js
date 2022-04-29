import React, {useEffect} from 'react';
import CheckEmailScreen from '../../screens/CheckEmailScreen';
import LoginScreen from '../../screens/LoginScreen';
import RecoveryPasswordScreen from '../../screens/RecoveryPasswordScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '../navigations/DrawerNavigator';
import ProfileScreen from '../../screens/ProfileScreen';
import SplashScreen from '../../screens/SplashScreen';
import OnboardingScreen from '../../screens/OnboardingScreen';
import OTPScreen from '../../screens/OTPScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import OTPVerifiedScreen from '../../screens/OTPVerifiedScreen';
import OnBoardingNewScreen from '../../screens/OnBoardingNewScreen';
import ChangePasswordScreen from '../../screens/ChangePasswordScreen';

const Stack = createStackNavigator();

const LoginNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
      <Stack.Screen name="OnboardingScreen" component={OnBoardingNewScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CheckEmail" component={CheckEmailScreen} />
      <Stack.Screen name="ForgetPassword" component={RecoveryPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />

      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="OTPVerifiedScreen" component={OTPVerifiedScreen} />
      <Stack.Screen name="DashboardHome" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
