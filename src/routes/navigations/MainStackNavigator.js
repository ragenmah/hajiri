import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../RouteItems';
import DashboardScreen from '../../screens/DashboardScreen';
import TimeSheetScreen from '../../screens/TimeSheetScreen';
import LeaveRequestScreen from '../../screens/LeaveRequestScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import LeaveRequestFormScreen from '../../screens/LeaveRequestFormScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Home} component={DashboardScreen} />
    </Stack.Navigator>
  );
};

const TimeSheetStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.TimeSheet} component={TimeSheetScreen} />
    </Stack.Navigator>
  );
};

const LeaveRequestStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={screens.LeaveRequest}
        component={LeaveRequestScreen}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const LeaveRequestFormNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.LeaveRequestForm} component={LeaveRequestFormScreen} />
    </Stack.Navigator>
  );
};


export {
  HomeStackNavigator,
  TimeSheetStackNavigator,
  LeaveRequestStackNavigator,
  ProfileStackNavigator,
  LeaveRequestFormNavigator
};
