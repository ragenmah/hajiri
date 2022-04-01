import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from './screens/DashboardScreen';
import TimeSheetScreen from './screens/TimeSheetScreen';
import LeaveRequestScreen from './screens/LeaveRequestScreen';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#9E6AB2',
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveBackgroundColor: '#9E6AB2',
        tabBarInactiveTintColor: '#fff',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon
              name="checkbox-marked-circle-outline"
              color={color}
              size={24}
            />
          ),
          tabBarLabelStyle: {fontSize: 12, letterSpacing: 0.4, padding: 3},
        }}
      />

      <Tab.Screen
        name="Time sheet"
        component={TimeSheetScreen}
        options={{
          tabBarLabel: 'Time sheet',
          tabBarIcon: ({color, size}) => (
            <Icon name="clock-time-three-outline" color={color} size={24} />
          ),
          tabBarLabelStyle: {fontSize: 12, letterSpacing: 0.4, padding: 3},
        }}
      />

      <Tab.Screen
        name="Leave Request"
        component={LeaveRequestScreen}
        options={{
          tabBarLabel: 'Leave Request',
          tabBarIcon: ({color, size}) => (
            <Icon name="check-all" color={color} size={24} />
          ),
          tabBarLabelStyle: {fontSize: 12, letterSpacing: 0.4, padding: 3},
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
