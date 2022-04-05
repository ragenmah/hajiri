import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { screens } from '../RouteItems';
import DashboardScreen from '../../screens/DashboardScreen';
import TimeSheetScreen from '../../screens/TimeSheetScreen';
import LeaveRequestScreen from '../../screens/LeaveRequestScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={screens.Home} component={DashboardScreen} />
      </Stack.Navigator>
    )
  }

  const TimeSheetStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={screens.TimeSheet} component={TimeSheetScreen} />
      </Stack.Navigator>
    )
  }

  const LeaveRequestStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={screens.LeaveRequest} component={LeaveRequestScreen} />
      </Stack.Navigator>
    )
  }

  export {HomeStackNavigator,TimeSheetStackNavigator,LeaveRequestStackNavigator}