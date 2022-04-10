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
  Profile: 'ProfileScreen',
  ProfileStack: 'ProfileStack',
  LeaveRequestForm: 'LeaveRequestForm',
  LeaveRequestFormStack: 'LeaveRequestFormStack',
  LogOut: 'LogOut',
  LogOutStack: 'LogOutStack',
};

export const routes = [
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="checkbox-marked-circle-outline"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="checkbox-marked-circle-outline"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
  },

  {
    name: screens.TimeSheetStack,
    focusedRoute: screens.TimeSheetStack,
    title: 'Time Sheet',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="clock-time-three-outline"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
  },

  {
    name: screens.TimeSheet,
    focusedRoute: screens.TimeSheetStack,
    title: 'Time Sheet',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="clock-time-three-outline"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
  },

  {
    name: screens.LeaveRequestStack,
    focusedRoute: screens.LeaveRequestStack,
    title: 'Leave Request',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="check-all"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
  },

  {
    name: screens.LeaveRequest,
    focusedRoute: screens.LeaveRequestStack,
    title: 'Leave Request',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="check-all"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
  },
  {
    name: screens.Profile,
    focusedRoute: screens.ProfileStack,
    title: 'Profile Screen',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="check-all"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
  },
  {
    name: screens.ProfileStack,
    focusedRoute: screens.ProfileStack,
    title: 'Profile ',
    showInTab: false,
    showInDrawer: true,
    icon: focused => (
      <Icon
        name="check-all"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
    iconImage: 'Profile.png',
  },
  {
    name: screens.LeaveRequestForm,
    focusedRoute: screens.LeaveRequestFormStack,
    title: 'Profile Screen',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="check-all"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
  },
  {
    name: screens.LeaveRequestFormStack,
    focusedRoute: screens.LeaveRequestFormStack,
    title: 'Leave ',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="check-all"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
    iconImage: 'Profile.png',
  },

  {
    name: screens.LogOut,
    focusedRoute: screens.LogOutStack,
    title: 'Log Out',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <Icon
        name="check-all"
        size={30}
        color={focused ? '#803A9B' : '#FCFCFC'}
      />
    ),
    iconImage: 'Profile.png',
  },
];
