import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const screens = {
  Home: 'Dashboard',
  HomeStack: 'DashboardStack',
//   Home: 'Home',
  TimeSheetStack: 'TimeSheetStack',
  TimeSheet: 'TimeSheetScreen',
  LeaveRequestStack: 'LeaveRequestStack',
  LeaveRequest: 'LeaveRequestScreen',
};

export const routes = [
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <Icon name="checkbox-marked-circle-outline" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: focused => (
      <Icon name="checkbox-marked-circle-outline" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },

  {
    name: screens.TimeSheetStack,
    focusedRoute: screens.TimeSheetStack,
    title: 'Time Sheet',
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <Icon name="clock-time-three-outline" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },

  {
    name: screens.TimeSheet,
    focusedRoute: screens.TimeSheetStack,
    title: 'Time Sheet',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <Icon name="clock-time-three-outline" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },

  {
    name: screens.LeaveRequestStack,
    focusedRoute: screens.LeaveRequestStack,
    title: 'Leave Request',
    showInTab: true,
    showInDrawer: true,
    icon: focused => (
      <Icon name="check-all" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },

  {
    name: screens.LeaveRequest,
    focusedRoute: screens.LeaveRequestStack,
    title: 'Leave Request',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <Icon name="check-all" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },
];
