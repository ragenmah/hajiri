import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {routes, screens} from '../RouteItems';
import {
  HomeStackNavigator,
  LeaveRequestFormNavigator,
  LeaveRequestStackNavigator,
  ProfileStackNavigator,
  TimeSheetStackNavigator,
} from './MainStackNavigator';

const Tab = createBottomTabNavigator();

const tabOptions = ({route}) => {
  const item = routes.find(routeItem => routeItem.name === route.name);
// console.log(item?.showInTab)
  // if (item?.showInTab===false) {
  //   return {
  //     tabBarButton: () => <View style={{width: 0}} />,
  //     headerShown: false,
  //     tabBarStyle: styles.tabContainer,
  //     title: item?.title,
  //   };
  // }
  if(route.name==="ProfileStack"|| route.name==="LeaveRequestFormStack"){
    return {
      tabBarButton: () => <View style={{width: 0}} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item?.title, 
     
    };
  }

  return {
    tabBarIcon: ({focused}) => item?.icon(focused),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}>{item?.title || ''}</Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item?.title
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Tab.Screen
        name={screens.TimeSheetStack}
        component={TimeSheetStackNavigator}
      />
      <Tab.Screen
        name={screens.LeaveRequestStack}
        component={LeaveRequestStackNavigator}
      />
      <Tab.Screen
        name={screens.ProfileStack}
        component={ProfileStackNavigator}
      />
       <Tab.Screen
        name={screens.LeaveRequestFormStack}
        component={LeaveRequestFormNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#FCFCFC ',
    fontSize: 12,
    marginBottom:8
  },
  tabContainer: {
    height: 60,
    backgroundColor:"#9E6AB2",
    letterSpacing:0.4,
    padding:8,
    color:"#FCFCFC "
  },
});

export default BottomTabNavigator;
